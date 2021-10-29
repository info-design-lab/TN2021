var w = 483;
		var h = 100;

		var svg = d3.select("#bullet1").append("svg").attr("width", w).attr("height", h);
		
		function drawrect(x,y,w,h,col) {
			var re=svg.append("rect") 
			.attr("x", x) 
			.attr("y", y)
			.attr("width", w)
			.attr("height", h)
			.attr("fill", col);
			return re;
		}
		
		var labs = [["0",15,60,"black","10"],["50",115,60,"black","10"],["100",215,60,"black","10"],["150",315,60,"black","10"],["200",415,60,"black","10"],["234",468,60,"black","10"],["Constituencies",181.29,90,"black","13"]];

		function disptext(tex,x,y,col,size) {
		
		var text1 = svg.append("text")
		   .text(tex)
		   .attr("y", y)
		   .attr("x", x)
		   .attr("font-size", size)
		   .attr("fill",col)
		   .attr("font-family","Roboto Condensed"); 
		   
		   return text1;
		 }
		
		for (var i=0; i<labs.length; i=i+1)
    	{
		var v1 = labs[i][0];
		var v2 = labs[i][1];
		var v3 = labs[i][2];
		var v4 = labs[i][3];
		var v5 = labs[i][4];
		disptext(v1,v2,v3,v4,v5)
		}
		
		var rect1 = drawrect(15,10,234*2,35,"lightgray");
		var rect3 = drawrect(15,15,159*2,25,"#ff0000");
		var rect4 = drawrect(333,15,75*2,25,"#29a329");
		
		var text1 = disptext("100",-5,31,"white",13);
		var text2 = disptext("58",-5,31,"white",13);
		var text3 = disptext("61",-5,31,"white",13);
		var text4 = disptext("38",-5,31,"white",13);
		var text5 = disptext("159",304,31,"white",13);
		var text6 = disptext("75",462,31,"white",13);
				
		d3.select("#b2").on("click", function() {
    	
		rect3.transition().duration(1000).attr("width",100*2); 			
		rect4.transition().duration(1000).attr("x",215).attr("width",58*2);
		
		text1.transition().duration(1000).attr("x",186);
		text2.transition().duration(1000).attr("x",310);
		text3.transition().duration(1000).attr("x",-5);
		text4.transition().duration(1000).attr("x",-5);
		text5.transition().duration(1000).attr("x",-5);
		text6.transition().duration(1000).attr("x",-5);
		
		});
		
		d3.select("#b3").on("click", function() {
    	
		rect3.transition().duration(1000).attr("width",61*2);
		rect4.transition().duration(1000).attr("x",137).attr("width",38*2);	
		
		text3.transition().duration(1000).attr("x",108);
		text4.transition().duration(1000).attr("x",192);
		text1.transition().duration(1000).attr("x",-5);
		text2.transition().duration(1000).attr("x",-5);
		text5.transition().duration(1000).attr("x",-5);
		text6.transition().duration(1000).attr("x",-5);
		
		});
		
		d3.select("#b1").on("click", function() {
		
    		rect3.transition().duration(1000).attr("x",15).attr("width",159*2); 		
		rect4.transition().duration(1000).attr("x",333).attr("width",75*2);
		
		text5.transition().duration(1000).attr("x",304);
		text6.transition().duration(1000).attr("x",462);
		text1.transition().duration(1000).attr("x",-5);
		text2.transition().duration(1000).attr("x",-5);
		text3.transition().duration(1000).attr("x",-5);
		text4.transition().duration(1000).attr("x",-5);
			
		});
		
