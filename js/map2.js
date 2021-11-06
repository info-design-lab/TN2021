
function loadall2(){
        var tooltip = d3.select('.toolt2');

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
                            //var op=this.style("opacity")
                           d3.select(this).style("stroke","orange");
                           //debugger;
						   var mouse=d3.mouse(d3.select(this).node());
                           tooltip.classed('hidden', false)
                                .attr('style', 'left:' + (mouse[0] + 150) +
                                        'px; top:' + (mouse[1] +40) + 'px')

                                .html(function(){
                                  if (((margin_data[+(d.properties.AC_NO)-1]).Margin) < 0 ){
                                    return ("<b>"+d.properties.AC_NAME+"</b>"+"\nVictory Margin: "+Math.abs(margin_data[+(d.properties.AC_NO)-1].Margin));
                                  }
                                  else {
                                    return ("<b>"+d.properties.AC_NAME+"</b>"+"\nLoss Margin: "+Math.abs(margin_data[+(d.properties.AC_NO)-1].Margin));
                                  }
                                  
                                })
                           })
                           .on("mouseout", function(d) {

                            tooltip.classed('hidden', true);
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
                            .style("stroke","grey");
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