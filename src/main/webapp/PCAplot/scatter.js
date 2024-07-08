var plotData;
var axisInertia;
var xAxisComponent = 1;
var yAxisComponent = 2;

const rgbToHex = rgbArray => rgbArray == null ? null : ('#' + rgbArray.map(x => x.toString(16).padStart(2, '0')).join(''));

// main scatter.js chart generator function:
var scatter = function(inputFile) {
    
    var individualVar = 0, groupClasses = {};

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
//				let dataAsText = xhr.responseText/*.replace(/^  +/g, "").replace(/\n  +/g, "\n")*/.replace(/\t/g, ",").replace(/  +/g, ",");
				let dataAsText = xhr.responseText.replace(/\t+/g, ",")/*.replace(/^  +/g, "").replace(/\n  +/g, "\n").replace(/  +/g, ",")*/;
				let parsedData = d3.csv.parseRows(dataAsText);
				axisInertia = parsedData.splice(0, 1)[0];
				plotData = parsedData/*.splice(1)*/;
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
//		console.log(data);
		
		$('#chart').empty();

		// Displayable column array:
		var dataColumns = null;

		// Colour classes array:
		var classes = {};
		
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
		
		var margin = {top: 0, right: 20, bottom: 50, left: 70},
			width = document.body.clientWidth - margin.left - margin.right,
			height = document.body.clientHeight - margin.top - margin.bottom;
		
		var xMax = d3.max(data, function(d) { return +d[xAxisComponent]; }) * 1.03,
			xMin = d3.min(data, function(d) { return +d[xAxisComponent]; }) * 1.03,
			yMax = d3.max(data, function(d) { return +d[yAxisComponent]; }) * 1.03,
			yMin = d3.min(data, function(d) { return +d[yAxisComponent]; }) * 1.03;
		
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
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
			.call(d3.behavior.zoom().x(x).y(y)/*.scaleExtent([1, 13])*/.on("zoom", zoom));			
		
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
		
		var objects = svg.append("svg")
			.attr("class", "objects")
			.attr("width", width)
			.attr("height", height);
			
		// add the tooltip area to the webpage
		var tooltip = d3.select("body").append("div")
		    .attr("class", "tooltip")
		    .style("opacity", 0);

		// define coloring rule
		var color = mdConfig == null ? d3.scale.category20() : function(className) {
			return rgbToHex(mdConfig.colorMapping[classes[className]]);
		};
		    
		//Create dot points
		objects.selectAll("circle")
			.data(data)
			.enter()
			.append("circle")
		    .attr("r", 3)
      		.attr("fill", function(d) { 
      			let mdClass = getMetadataClass(getIndividualMetadata(d[0])), dotColor = color(mdClass);
      			return dotColor == null ? 'white' : dotColor;
      		})
      		.attr("stroke", function(d) {
      			let mdClass = getMetadataClass(getIndividualMetadata(d[0])), dotColor = color(mdClass);
      			return dotColor == null || isAssignedPop(mdClass) ? 'black' : dotColor;
      		})
			.attr("class", function(d) { return "dot_" + getMetadataClass(getIndividualMetadata(d[0])); })
			.attr("transform", function(d) {
				return "translate("+x(d[xAxisComponent])+","+y(d[yAxisComponent])+")";
			})
			.on("mouseover", function(d) {
				tooltip.transition()
			    .duration(150)
			    .style("opacity", .8);
			    tooltip.html("<span style='background-color:#eee;'>" + d[individualVar]
			//           				+ "<br/> (" + xValue(d) + ", " + yValue(d) + ")"
			      			+ "</span>")
			    .style("left", (d3.event.pageX + 10) + "px")
			    .style("top", (d3.event.pageY + 15) + "px");
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
		
		// Create legend
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
		d3.select("#legend").html(assignedPopLegendItems + refPopLegendItems);
		
		// Display component selectors
		var xComponentOptions = "", yComponentOptions = "";
		for (var key in dataColumns)
		{
			xComponentOptions += '<option value="' + key + '"' + (key == xAxisComponent ? " selected" : "") + '>Component ' + dataColumns[key] + '</option>';
			yComponentOptions += '<option value="' + key + '"' + (key == yAxisComponent ? " selected" : "") + '>Component ' + dataColumns[key] + '</option>';
		}
		d3.select("#componentSelection").html("<b>Displayed components:</b>&nbsp;&nbsp;&nbsp;X-axis <select id='xAxisComponent' onchange='xAxisComponent=options[selectedIndex].value; scatter();'>" + xComponentOptions + "</select>&nbsp;&nbsp;&nbsp;&nbsp;Y-axis <select id='yAxisComponent' onchange='yAxisComponent=options[selectedIndex].value; scatter();'>" + yComponentOptions + "</select>");
		
		// Zoom/pan behaviour:
		function zoom() {
			svg.select(".x.axis").call(xAxis);
			svg.select(".y.axis").call(yAxis);
							
			svg.selectAll("circle")
				.attr("transform", function(d) {
					return "translate("+x(d[xAxisComponent])+","+y(d[yAxisComponent])+")";
				});
		};
	}
};


function toggleClassDisplay(liObject) {
	var hiding = d3.select(liObject).classed("selected");
	d3.selectAll("#chart svg circle." + d3.select(liObject).attr('id')).each(function() { d3.select(this).style("display", hiding ? "none" : ""); });
	d3.select(liObject).classed("selected", !hiding);
}