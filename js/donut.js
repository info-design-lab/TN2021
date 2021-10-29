var svg = d3.select("#donut")
    .append("svg")
    .attr("width", 800)
    .attr("height", 300)
    .append("g")
    .attr("transform", "translate(300,150)");

var t = d3.select("#donut").append("div")	
					.attr("class", "tooltip34")				
					.style("opacity", 0);
		
var arc = d3.svg.arc()
		.innerRadius(50).outerRadius(75).startAngle(0).endAngle(20.5*Math.PI/18);
		svg.append("path").attr("class", "arc").attr("d", arc).attr("fill","#ff0000")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + "133/188 seats obtained by DMK" + "</font>").style("left", 100).style("top", 100);
					d3.selectAll(".arc1, .arc3, .arc4, .arc6, .arc7").attr("fill","rgb(204,204,204)"); 
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc1").attr("fill","#29a329"); 
					d3.select(".arc3").attr("fill","#ff4d4d"); 
					d3.select(".arc4").attr("fill","#33cc33"); 
					d3.select(".arc6").attr("fill","#ff8080"); 
					d3.select(".arc7").attr("fill","#70db70"); 
		});

var arc1 = d3.svg.arc()
		.innerRadius(50).outerRadius(75).startAngle(20.5*Math.PI/18).endAngle(30.7*Math.PI/18);
		svg.append("path").attr("class", "arc1").attr("d", arc1).attr("fill","#29a329")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					
					t.html("<font size=3>" + "66/191 seats obtained by ADMK" + "</font>").style("left", 100).style("top", 100);
					d3.selectAll(".arc, .arc3, .arc4, .arc6, .arc7").attr("fill","rgb(204,204,204)"); 
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc").attr("fill","#ff0000"); 
					d3.select(".arc3").attr("fill","#ff4d4d"); 
					d3.select(".arc4").attr("fill","#33cc33"); 
					d3.select(".arc6").attr("fill","#ff8080"); 
					d3.select(".arc7").attr("fill","#70db70");
		});

var arc2 = d3.svg.arc()
		.innerRadius(50).outerRadius(75).startAngle(30.7*Math.PI/18).endAngle(36*Math.PI/18);
		svg.append("path").attr("class", "arc2").attr("d", arc2).attr("fill","rgb(247,247,247)")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + " " + "</font>").style("left", 100).style("top", 100);
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
		});

var arc3 = d3.svg.arc()
		.innerRadius(75).outerRadius(100).startAngle(0).endAngle(33.4*Math.PI/36);
		svg.append("path").attr("class", "arc3").attr("d", arc3).attr("fill","#ff4d4d")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + "40.8% of the contested vote share for AIADMK" + "</font>").style("left", 100).style("top", 100);
					d3.selectAll(".arc1, .arc4, .arc6, .arc7").attr("fill","rgb(204,204,204)"); 
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc1").attr("fill","#29a329"); 
					d3.select(".arc4").attr("fill","#33cc33"); 
					d3.select(".arc6").attr("fill","#ff8080"); 
					d3.select(".arc7").attr("fill","#70db70");
		});

var arc4 = d3.svg.arc()
		.innerRadius(75).outerRadius(100).startAngle(33.4*Math.PI/36).endAngle(62.6*Math.PI/36);
		svg.append("path").attr("class", "arc4").attr("d", arc4).attr("fill","#33cc33")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + "41.1% of the contested vote share for DMK" + "</font>").style("left", 100).style("top", 100);
					d3.selectAll(".arc, .arc3, .arc6, .arc7").attr("fill","rgb(204,204,204)");
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc").attr("fill","#ff0000"); 
					d3.select(".arc3").attr("fill","#ff4d4d"); 
					d3.select(".arc6").attr("fill","#ff8080"); 
					d3.select(".arc7").attr("fill","#70db70");
		});

var arc5 = d3.svg.arc()
		.innerRadius(75).outerRadius(100).startAngle(62.6*Math.PI/36).endAngle(72*Math.PI/36);
		svg.append("path").attr("class", "arc5").attr("d", arc5).attr("fill","rgb(247,247,247)")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + " " + "</font>").style("left", 100).style("top", 100);
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
		});
		
var arc6 = d3.svg.arc()
		.innerRadius(100).outerRadius(125).startAngle(0).endAngle(27.1*Math.PI/36);
		svg.append("path").attr("class", "arc6").attr("d", arc6).attr("fill","#ff8080")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + "40.8% of the total vote share for AIADMK" + "</font>").style("left", 100).style("top", 100);
					d3.selectAll(".arc1, .arc4, .arc7").attr("fill","rgb(204,204,204)");
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc1").attr("fill","#29a329"); 
					d3.select(".arc4").attr("fill","#33cc33"); 
					d3.select(".arc7").attr("fill","#70db70");
		});

var arc7 = d3.svg.arc()
		.innerRadius(100).outerRadius(125).startAngle(27.1*Math.PI/36).endAngle(51*Math.PI/36);
		svg.append("path").attr("class", "arc7").attr("d", arc7).attr("fill","#70db70")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					
					t.html("<font size=3>" + "39.7% of the total vote share for DMK" + "</font>").style("left", 100).style("top", 100);
					d3.selectAll(".arc, .arc3, .arc6").attr("fill","rgb(204,204,204)");
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc").attr("fill","#ff0000"); 
					d3.select(".arc3").attr("fill","#ff4d4d"); 
					d3.select(".arc6").attr("fill","#ff8080"); 
		});

var arc8 = d3.svg.arc()
		.innerRadius(100).outerRadius(125).startAngle(51*Math.PI/36).endAngle(72*Math.PI/36);
		svg.append("path").attr("class", "arc8").attr("d", arc8).attr("fill","rgb(247,247,247)")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					
					t.html("<font size=3>" + " " + "</font>").style("left", 100).style("top", 100);
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
		});

var tx = svg.append("text").text("133").attr("x",-15).attr("y",70).attr("font-size",15).attr("fill","white").attr("transform","rotate(-40)").attr("font-family","Roboto Condensed")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + "133/188 seats obtained by DMK" + "</font>").style("left", 100).style("top", 100);
					d3.selectAll(".arc1, .arc3, .arc4, .arc6, .arc7").attr("fill","rgb(204,204,204)"); 
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc1").attr("fill","#29a329"); 
					d3.select(".arc3").attr("fill","#ff4d4d"); 
					d3.select(".arc4").attr("fill","#33cc33"); 
					d3.select(".arc6").attr("fill","#ff8080"); 
					d3.select(".arc7").attr("fill","#70db70"); 
		});
		
var tx3 = svg.append("text").text("46.5%").attr("x",-15).attr("y",92).attr("font-size",15).attr("fill","white").attr("transform","rotate(-50)").attr("font-family","Roboto Condensed")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + "46.5% of the contested vote share for ADMK" + "</font>").style("left", 100).style("top", 100);
					d3.selectAll(".arc1, .arc4, .arc6, .arc7").attr("fill","rgb(204,204,204)"); 
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc1").attr("fill","#29a329"); 
					d3.select(".arc4").attr("fill","#33cc33"); 
					d3.select(".arc6").attr("fill","#ff8080"); 
					d3.select(".arc7").attr("fill","#70db70");
		});
		
var tx6 = svg.append("text").text("37.7%").attr("x",-15).attr("y",115).attr("font-size",15).attr("fill","white").attr("transform","rotate(-60)").attr("font-family","Roboto Condensed")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + "37.7% of the total vote share for DMK" + "</font>").style("left", 100).style("top", 100);
					d3.selectAll(".arc1, .arc4, .arc7").attr("fill","rgb(204,204,204)");
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc1").attr("fill","#29a329"); 
					d3.select(".arc4").attr("fill","#33cc33"); 
					d3.select(".arc7").attr("fill","#70db70");
		});

var tx1 = svg.append("text").text("66").attr("x",-15).attr("y",70).attr("font-size",15).attr("fill","white").attr("transform","rotate(40)").attr("font-family","Roboto Condensed")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					
					t.html("<font size=3>" + "66/191 seats obtained by ADMK" + "</font>").style("left", 100).style("top", 100);
					d3.selectAll(".arc, .arc3, .arc4, .arc6, .arc7").attr("fill","rgb(204,204,204)"); 
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc").attr("fill","#ff0000"); 
					d3.select(".arc3").attr("fill","#ff4d4d"); 
					d3.select(".arc4").attr("fill","#33cc33"); 
					d3.select(".arc6").attr("fill","#ff8080"); 
					d3.select(".arc7").attr("fill","#70db70");	
		});
		
var tx4 = svg.append("text").text("40.5%").attr("x",-15).attr("y",92).attr("font-size",15).attr("fill","white").attr("transform","rotate(50)").attr("font-family","Roboto Condensed")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + "40.5% of the contested vote share for ADMK" + "</font>").style("left", 100).style("top", 100);
					d3.selectAll(".arc, .arc3, .arc6, .arc7").attr("fill","rgb(204,204,204)");
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc").attr("fill","#ff0000"); 
					d3.select(".arc3").attr("fill","#ff4d4d"); 
					d3.select(".arc6").attr("fill","#ff8080"); 
					d3.select(".arc7").attr("fill","#70db70");
		});

var tx7 = svg.append("text").text("33.3%").attr("x",-15).attr("y",117).attr("font-size",15).attr("fill","white").attr("transform","rotate(40)").attr("font-family","Roboto Condensed")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					
					t.html("<font size=3>" + "33.3% of the total vote share for ADMK" + "</font>").style("left", 100).style("top", 100);
					d3.selectAll(".arc, .arc3, .arc6").attr("fill","rgb(204,204,204)");
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc").attr("fill","#ff0000"); 
					d3.select(".arc3").attr("fill","#ff4d4d"); 
					d3.select(".arc6").attr("fill","#ff8080"); 
		});

$( "#tooltip" ).position({
  my: "center",
  at: "center",
  of: "#donut"
});
