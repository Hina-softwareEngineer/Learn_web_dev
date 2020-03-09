// we'll write this code together
var width=600;
var height=600;
var barpadding=1;

var minYear=d3.min(birthData,d=>d.year);
var YearData=birthData.filter(d=>d.year===minYear);

