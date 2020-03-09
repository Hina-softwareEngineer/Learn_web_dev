// write your code here!
var width=500;
var height=500;
var padding=40;

var data=regionData.filter(mustHaveKeys);

function mustHaveKeys(obj){
	var keys=['subscribersPer100',
	'adultLiteracyRate',
	'medianAge',
	'urbanPopulationRate'];

	for (var i=0;i<keys.length;i++){
		if (obj[keys[i]]===null) return false;
	}
	return true;
}

var xScale=d3.scaleLinear()
			.domain(d3.extent(data,r=>r.adultLiteracyRate))
			.range([padding,width-padding]);
var yScale=d3.scaleLinear()
			.domain(d3.extent(data,r=>r.subscribersPer100))
			.range([height-padding,padding]);

var rScale=d3.scaleLinear()
			.domain(d3.extent(data,r=>r.medianAge))
			.range([5,30]);
var fScale=d3.scaleLinear()
			.domain(d3.extent(data,r=>r.urbanPopulationRate))
			.range(['green','blue']);

var xAxis=d3.axisBottom(xScale)
			.tickSize(-height+2*padding)
			.tickSizeOuter(0);

var yAxis=d3.axisLeft(yScale)
			.tickSize(-width+2*padding)
			.tickSizeOuter(0);

// var radiusScale=d3.scaleLinear()
// 					.domain(d3.extent(regionData,r=>r.urbanPopulationRate))
// 					.range([2,40])

d3.select('svg')
	.append('g')
	.attr("transform", "translate(0," + (height - padding) + ")")
    .call(xAxis);
	// .attr('transform','translate(0,'+(height-padding)+')')
	// .call(xAxis)

d3.select('svg')
	.append('g')
	.attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);
	// .attr('transform','translate('+padding+',0)')
	// .call(yAxis)

d3.select('svg')
	.attr("width",width)
	.attr('height',height)
	.selectAll("circle")
	.data(data)
	.enter()
	.append('circle')
		.attr('cx',r=>xScale(r.adultLiteracyRate))
		.attr('cy',r=>yScale(r.subscribersPer100))
		.attr('r',r=>rScale(r.medianAge))
		.attr('fill',r=>fScale(r.urbanPopulationRate))
		.attr('stroke','#fff');

d3.select("svg")
	.append("text")
	.attr('x',width/2)
	.attr('y',height-padding)
	.attr('dy',padding/2)
	.style("text-anchor",'middle')
	.text('Adult Literacy Rate');

d3.select("svg")
	.append("text")
	.attr('x',width/2)
	.attr('y',padding)
	.attr('dy','1.5em')
	.style("text-anchor",'middle')
	.text('Data Of Region by UN');

d3.select('svg')
	.append('text')
	.attr('transform','rotate(-90)')
	.attr('x',-height/2)
	// .attr('y',padding)
	.attr('dy',padding/2)
	.style("text-anchor",'middle')
	.text('subscribersPer100');