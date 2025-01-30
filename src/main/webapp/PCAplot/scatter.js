var plotData;
var axisInertia;
var xAxisComponent = 1;
var yAxisComponent = 2;

// Shape generator functions for when mdConfig is null
const shapes = {
    circle: function(size) {
        return `M 0 0 m -${size*1.5}, 0 a ${size*1.5},${size*1.5} 0 1,0 ${size*3},0 a ${size*1.5},${size*1.5} 0 1,0 -${size*3},0`;
    },
    diamond: function(size) {
        const offset = size * 2;
        return `M 0 -${offset} L ${offset} 0 L 0 ${offset} L -${offset} 0 Z`;
    },
    square: function(size) {
        const offset = size * 1.5;
        return `M -${offset} -${offset} h ${offset*2} v ${offset*2} h -${offset*2} Z`;
    },
    triangle: function(size) {
        const offset = size * 2;
        return `M 0 -${offset} L ${offset} ${offset} L -${offset} ${offset} Z`;
    }
};

const rgbToHex = rgbArray => rgbArray == null ? null : ('#' + rgbArray.map(x => x.toString(16).padStart(2, '0')).join(''));

// main scatter.js chart generator function:
var scatter = function(inputFile) {
    var individualVar = 0, groupClasses = {};

    var urlParams = new URLSearchParams(window.location.search);
    var rotateChart = urlParams.get('rotate') === 'true';

    if (plotData == null)
    {
        if (inputFile == null)
        {
            alert("Please provide an input file!");
            return;
        }
        else {

            var xhr = new XMLHttpRequest();
            xhr.open('GET', inputFile, true);

            // Set up the progress event
            xhr.addEventListener('progress', function(event) {
                $('#chart').html('<div style="margin-top:100px; text-align:center;">Downloaded ' + (event.loaded / 1024 / 1024).toFixed(2) + ' Mb</div>');
            });

            xhr.onload = function() {
                let dataAsText = xhr.responseText.replace(/\t+/g, ",");
                let parsedData = d3.csv.parseRows(dataAsText);
                axisInertia = parsedData.splice(0, 1)[0];
                plotData = parsedData;
                showScatterPlot(plotData);
            };

            xhr.send();
        }
    }
    else
        showScatterPlot(plotData);
    
    function isAssignedPop(popName)
    {
        return false;//popName.indexOf("A_") == 0;
    }
    
    function getIndividualMetadata(indName) {
        let selectedMdField = $("select#mdFields").val();
        return metadata[indName] == null || selectedMdField == null ? null : metadata[indName][selectedMdField];
    }

    function getMetadataClass(mdVal) {
        if (mdVal == null)
            return "";

        let groupClass = groupClasses[mdVal];
        if (groupClass == null) {
            groupClass = "group" + (Object.keys(groupClasses).length + 1);
            groupClasses[mdVal] = groupClass;
        }
        return groupClass;
    }

    function showScatterPlot(data) {
        $('#chart').empty();

        // Displayable column array:
        var dataColumns = null;

        // Colour classes array:
        var classes = {};
        var shapeKeys = Object.keys(shapes);
        
        // change string (from CSV) into number format
        data.forEach(function(d) {
            d[xAxisComponent] = +d[xAxisComponent];
            d[yAxisComponent] = +d[yAxisComponent];
            var indMd = getIndividualMetadata(d[0]), className = getMetadataClass(indMd);
            if (classes[className] == null)
                classes[className] = indMd;
            if (dataColumns == null)
            {
                dataColumns = new Array();
                let totalVariance = 0;
                for (var colIndex=1; colIndex<axisInertia.length; colIndex++)
                     totalVariance += parseInt(axisInertia[colIndex]);
                for (var colIndex=1; colIndex<d.length; colIndex++)
                    dataColumns[colIndex] = colIndex + " (" + (axisInertia[colIndex]*100/totalVariance).toFixed(2) + "%)";
            }
        });

        var margin = {top: 20, right: 20, bottom: 50, left: 70},
            width = document.getElementById('chart').clientWidth - margin.left - margin.right,
            height = document.getElementById('chart').clientHeight - margin.top - margin.bottom;
        
        // Calculate axis ranges with dynamic padding
        var xMax = d3.max(data, function(d) { return rotateChart ? -d[xAxisComponent] : +d[xAxisComponent]; }),
            xMin = d3.min(data, function(d) { return rotateChart ? -d[xAxisComponent] : +d[xAxisComponent]; }),
            yMax = d3.max(data, function(d) { return rotateChart ? -d[yAxisComponent] : +d[yAxisComponent]; }),
            yMin = d3.min(data, function(d) { return rotateChart ? -d[yAxisComponent] : +d[yAxisComponent]; });
        
        // Add padding to ensure all dots are visible
        var xPadding = Math.abs(xMax - xMin) * 0.1,
            yPadding = Math.abs(yMax - yMin) * 0.1;
        
        xMax += xPadding;
        xMin -= xPadding;
        yMax += yPadding;
        yMin -= yPadding;

        //Define scales
        var x = d3.scale.linear()
            .domain([xMin, xMax])
            .range([0, width]);
            
        var y = d3.scale.linear()
            .domain([yMin, yMax])
            .range([height, 0]);
        
        //Define X axis
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .tickSize(-height)
            .tickFormat(d3.format(".2s"));
        
        //Define Y axis
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(5)
            .tickSize(-width)
            .tickFormat(d3.format(".2s"));        
            
        var svg = d3.select("#chart").append("svg")
            .attr("id", "scatter")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
            .attr("preserveAspectRatio", "xMidYMid meet")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(d3.behavior.zoom().x(x).y(y).on("zoom", zoom));            
        
        // Create background
        svg.append("rect")
            .attr("width", width)
            .attr("height", height);
        
        //Create axes
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
        
        // Add thicker x=0 and y=0 axes
        svg.append("line")
            .attr("class", "axis-zero")
            .attr("x1", x(0))
            .attr("y1", 0)
            .attr("x2", x(0))
            .attr("y2", height)
            .attr("stroke", "black");

        svg.append("line")
            .attr("class", "axis-zero")
            .attr("x1", 0)
            .attr("y1", y(0))
            .attr("x2", width)
            .attr("y2", y(0))
            .attr("stroke", "black");
        
        var objects = svg.append("svg")
            .attr("class", "objects")
            .attr("width", width)
            .attr("height", height);
            
        // add the tooltip area to the webpage
        var tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        // define coloring and shape rules
        var color = mdConfig == null ? d3.scale.category20() : function(className) {
            return rgbToHex(mdConfig.colorMapping[classes[className]]);
        };
        
        var shapeByClass = {};
        objects.selectAll("path")
            .data(data)
            .enter()
            .append("path")
            .attr("d", function(d) {
				if (mdConfig != null)
					return shapes['circle'](3);

				// Use paths with different shapes when no mdConfig
                let mdClass = getMetadataClass(getIndividualMetadata(d[0]));
                let classKeys = Object.keys(classes);
                let classIndex = classKeys.indexOf(mdClass);
                let shapeIndex = Math.floor(classIndex / 20);
                let shapeFn = shapes[shapeKeys[shapeIndex % shapeKeys.length]];
                shapeByClass[mdClass] = shapeKeys[shapeIndex % shapeKeys.length];
                return shapeFn(3);
            })
            .attr("fill", function(d) {
                let mdClass = getMetadataClass(getIndividualMetadata(d[0]));
                let fillColor = color(mdClass);
                return fillColor;
            })
			.style("stroke", function(d) {
                let mdClass = getMetadataClass(getIndividualMetadata(d[0]));
                return color(mdClass) == null || isAssignedPop(mdClass) ? 'black' : 'white';
			})
            .attr("class", function(d) {
                return "dot_" + getMetadataClass(getIndividualMetadata(d[0]));
            })
            .attr("transform", function(d) {
                return "translate("+x(rotateChart ? -d[xAxisComponent] : d[xAxisComponent])+","+y(rotateChart ? -d[yAxisComponent] : d[yAxisComponent])+")";
            })
	        .on("mouseover", (d) => {
	          var tooltipContent = "<div style='background-color:#eee; padding:5px; border-radius:5px'><b>" + d[individualVar] + "</b>";
	          if (metadata[d[0]])
	            for (var key in metadata[d[0]])
	            	if (metadata[d[0]][key])
	    	          	tooltipContent += "<br>" + key + ": " + metadata[d[0]][key];

	          tooltip.transition().duration(150).style("opacity", 0.85);
	          tooltip
	            .html(tooltipContent + "</div>")
	            .style("left", d3.event.pageX + 10 + "px")
	            .style("top", d3.event.pageY + 10 + "px");
	        })
            .on("mouseout", function(d) {
                tooltip.transition()
                .duration(500)
                .style("opacity", 0);
            });

        // Create X Axis label
        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height + margin.bottom - 10)
            .text("Component " + (xAxisComponent));

        // Create Y Axis label
        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", -margin.left)
            .attr("x", 0)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("Component " + (yAxisComponent));

        // Legend creation
        var assignedPopLegendItems = "", refPopLegendItems = "";
        if (mdConfig == null) {
            let classKeys = Object.keys(classes).sort();
            for (let i = 1; i <= classKeys.length; i++) {
                let key = "group" + i;
                let shapeFn = shapes[shapeByClass[key]];
                var fIsAssignedPop = isAssignedPop(key);
                var stringToAppend = '<li style="padding-left:20px; text-align:left; border-width:3px; border-color:' + 
                    color(key) + ';" class="selected' + (fIsAssignedPop ? ' assignedPop' : '') + 
                    '" id="dot_' + key + '" onclick="toggleClassDisplay(this);" title="Click to show/hide ' + 
                    (fIsAssignedPop ? 'assigned ' : '') + 'population"><svg height="16" style="margin-left:-20px;"><path d="' + 
                    shapeFn(4) + '" fill="' + color(key) + '" style="stroke:' + 
                    (fIsAssignedPop ? "black" : "white") + 
                    '" transform="translate(8,8)" /></svg>' + (classes[key] == '' ? '&nbsp;' : classes[key]) + '</li>';
                if (fIsAssignedPop)
                    assignedPopLegendItems += stringToAppend;
                else
                    refPopLegendItems += stringToAppend;
            }
        } else {
	        var assignedPopLegendItems = "", refPopLegendItems = "";
	        for (const [key, value] of Object.entries(groupClasses).sort())
	            if (value != "") {
	                var fIsAssignedPop = isAssignedPop(value);
	                var stringToAppend = '<li style="text-align:center; border-width:3px; border-color:' + color(value) + ';" class="selected' + (fIsAssignedPop ? ' assignedPop' : '') + '" id="dot_' + value + '" onclick="toggleClassDisplay(this);" title="Click to show/hide ' + (fIsAssignedPop ? 'assigned ' : '') + 'population">' + (key == '' ? '&nbsp;' : key) + '</li>';
	                if (fIsAssignedPop)
	                    assignedPopLegendItems += stringToAppend;
	                else
	                    refPopLegendItems += stringToAppend;
	            }
        }
        d3.select("#legend").html(assignedPopLegendItems + refPopLegendItems);

        // Update zoom function to handle both paths and circles
        function zoom() {
            svg.select(".x.axis").call(xAxis);
            svg.select(".y.axis").call(yAxis);
                            
            svg.selectAll("path, circle")
                .attr("transform", function(d) {
                    return "translate("+x(rotateChart ? -d[xAxisComponent] : d[xAxisComponent])+","+y(rotateChart ? -d[yAxisComponent] : d[yAxisComponent])+")";
                });
            
            // Update thicker x=0 and y=0 axes
            svg.select(".axis-zero")
                .attr("x1", x(0))
                .attr("x2", x(0));

            svg.selectAll(".axis-zero")
                .filter(function() { return this.getAttribute("x1") === "0"; })
                .attr("y1", y(0))
                .attr("y2", y(0));
        }

        // Update resize function to handle both paths and circles
        function resizeChart() {
            var newWidth = document.getElementById('chart').clientWidth - margin.left - margin.right;
            var newHeight = document.getElementById('chart').clientHeight - margin.top - margin.bottom;
            
            // Update scales
            x.range([0, newWidth]);
            y.range([newHeight, 0]);
            var rect = svg.select("rect");
            rect.attr('width', newWidth);
            rect.attr('height', newHeight);
            objects.attr('width', newWidth);
            objects.attr('height', newHeight);
        
            // Update SVG viewBox
            d3.select("#scatter").attr("viewBox", "0 0 " + (newWidth + margin.left + margin.right) + " " + (newHeight + margin.top + margin.bottom));
        
            // Update axes
            svg.select(".x.axis")
                .attr("transform", "translate(0," + newHeight + ")")
                .call(xAxis.tickSize(-newHeight));
        
            svg.select(".y.axis")
                .call(yAxis.tickSize(-newWidth));
                            
            svg.selectAll("path, circle")
                .attr("transform", function(d) {
                    return "translate("+x(rotateChart ? -d[xAxisComponent] : d[xAxisComponent])+","+y(rotateChart ? -d[yAxisComponent] : d[yAxisComponent])+")";
                });
            
            // Update labels
            svg.select(".x.label")
                .attr("x", newWidth)
                .attr("y", newHeight + margin.bottom - 10);
        
            svg.select(".y.label")
                .attr("y", -margin.left)
                .attr("x", 0);
        
            // Update thicker x=0 and y=0 axes
            svg.select(".axis-zero")
                .attr("x1", x(0))
                .attr("x2", x(0))
                .attr("y2", newHeight);
        
            svg.selectAll(".axis-zero")
                .filter(function() { return this.getAttribute("x1") === "0"; })
                .attr("y1", y(0))
                .attr("y2", y(0))
                .attr("x2", newWidth);
                    
            // Reinitialize zoom behavior with updated scales
            svg.call(d3.behavior.zoom().x(x).y(y).on("zoom", zoom));
        }

        window.addEventListener('resize', resizeChart);
    }
};

// Update toggle function to handle both paths and circles
function toggleClassDisplay(liObject) {
    var hiding = d3.select(liObject).classed("selected");
    d3.selectAll("#chart svg path." + d3.select(liObject).attr('id') + ", #chart svg circle." + d3.select(liObject).attr('id'))
        .each(function() {
            d3.select(this).style("display", hiding ? "none" : "");
        });
    d3.select(liObject).classed("selected", !hiding);
}