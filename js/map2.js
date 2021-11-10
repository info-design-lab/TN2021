function loadall2(){
        var tooltip = d3.select('.toolt2');
        var tooltip2 = d3.select('.toolt1');

        var width =500,
            height = 550;
        

        var win;
        var cberror;
        d3.tsv("csv/finalwinners.tsv",function(error,data){
            cberror=error;
            win=data;
        });



        var svg = d3.select(".map-2").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "map-2");
        
        var scale2=d3.scale.linear()
                    .domain([0,65])
                    //.range(["#ff73a3","#A51D4C"]);
                    .range(["#f573ff","#710b79"]);
        
        var scale4=d3.scale.linear()
                    .domain([-50,0])
                    .range(["#0231A1","#5BC7E3"]);

        var scale3=d3.scale.linear()
                    .domain([0,65])
                    .range([2,1]);
        //debugger;
        var margin_data;
        var cberror;
        d3.csv("csv/women-margin.csv",function(error,data){
                          cberror=error;
                          margin_data=data;
        d3.csv("csv/women-votes.csv",function(error,data){
              cberror=error;
               agg_data=data;})
                          
        //debugger;

        d3.json("csv/tngeo2.json", function(error,topology) {
        
                  var data=topology;
                  //debugger;
                  var center=d3.geo.centroid(topology)
                  var offset = [250,230];
                  var projection = d3.geo.mercator()
                            .center(center)
                            .scale(5000).translate(offset);    
                  var path = d3.geo.path()
                            .projection(projection);
                 // debugger;
                  svg.selectAll("path")
                           .data(topology.features)
                           .enter()
                           .append("path")
                           .attr("d", path)
                           .attr("class",function(d){
                            return "a"+d.properties["AC_NO"];
                          })
                           //debugger;
        
                           .style("fill", function(d){
                             if(((margin_data[+(d.properties.AC_NO)-1]).Margin) == 0){
                               return ("#F98811");}
                             else if (((margin_data[+(d.properties.AC_NO)-1]).Margin) < 0 ){
                              return scale4((margin_data[+(d.properties.AC_NO)-1]).Margin);
                             }
                             else {
                               return scale2((margin_data[+(d.properties.AC_NO)-1]).Margin);
                              }
                            
                            })
                           .style("opacity",function(d){ 
                              return 1/scale3(Math.abs(+margin_data[+(d.properties.AC_NO)-1].Margin));
                         })
                           .style("stroke","grey")
                           .on("mouseover",function(d){
                            var map1=d3.select(".map-1");
                            var map2=d3.select(".map-2");
                           mouse=d3.mouse(this);
                           var consti=".a"+d.properties["AC_NO"];
                           d3.select(this).style("stroke","red").style("stroke-width","2");
                           
                           map1.select(consti).style("stroke","red").style("stroke-width","2");

	                        
                          map1.select(".toolt1")
                          .classed('hidden', false)
                          .attr('style', 'left:' + (mouse[0] + 50) +
                                'px; top:' + (mouse[1] +40) + 'px')
                          .html(function(){
                            if (((agg_data[+(d.properties.AC_NO)-1]).Margin) == 0){
                              return ("<b>"+d.properties.AC_NAME+"</b>"+"\nNo Candidates");}
                            else {
                              return("<b>"+d.properties.AC_NAME+"</b>"+"\nPercentage of Votes: "+agg_data[+(d.properties.AC_NO)-1].Margin)}
                          
                          });
                          
                          
                          map2.select(".toolt2")
                          .attr('style', 'left:' + (mouse[0] + 150) +
                                'px; top:' + (mouse[1] +40) + 'px')
                          .classed("hidden",false)
                          .html(function(){
                            if (((margin_data[+(d.properties.AC_NO)-1]).Margin) < 0 ){
                              return ("<b>"+d.properties.AC_NAME+"</b>"+"\nVictory Margin: "+Math.abs(margin_data[+(d.properties.AC_NO)-1].Margin));
                            }
                            else if (((margin_data[+(d.properties.AC_NO)-1]).Margin) == 0){
                              return ("<b>"+d.properties.AC_NAME+"</b>"+"\nNo Candidates");
                            }
                            else {
                              return ("<b>"+d.properties.AC_NAME+"</b>"+"\nLoss Margin: "+Math.abs(margin_data[+(d.properties.AC_NO)-1].Margin));
                            }
                            
                          });
                          
                           })
          
                           .on("mouseout", function(d) {
                            var map1=d3.select(".map-1");
                            var map2=d3.select(".map-2");
                            var consti=".a"+d.properties["AC_NO"];

                            map2.select(".toolt2").classed('hidden', true);
                            map1.select(".toolt1").classed('hidden', true);
                            d3.select(this).style("fill", function(d){
                              if(((margin_data[+(d.properties.AC_NO)-1]).Margin) == 0){
                                return ("#F98811");}
                              else if (((margin_data[+(d.properties.AC_NO)-1]).Margin) < 0 ){
                               return scale4((margin_data[+(d.properties.AC_NO)-1]).Margin);
                              }
                              else {
                                return scale2((margin_data[+(d.properties.AC_NO)-1]).Margin);
                               }
                             
                             })
                             .style("stroke","grey").style("stroke-width","0.2")
                            
                            map1.select(consti).style("stroke","grey").style("stroke-width","0.2");
                            });

                           
                          // .attr("transform", "translate(-400,200)");
            });
          
          });
      d3.json("csv/TNS2.json",function(error,topo){
          
                  //debugger;
                  var center=d3.geo.centroid(topo)
                  var offset = [250,230];
                  var projection = d3.geo.mercator()
                            .center(center)
                            .scale(5000).translate(offset);    
                  var path = d3.geo.path()
                            .projection(projection);
                  //debugger;
                  

                  svg.data(topo.features)
                                            
                                            .append("path")
                                            .attr("d",path)
                                            .style("stroke","black")
                                            .style("fill","none");
        });




}
