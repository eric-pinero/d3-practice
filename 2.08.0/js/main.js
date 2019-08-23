/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("data/buildings.json").then(function(data){
    var rectangles = d3.selectAll("rect")
        .data(data)
    console.log(data);
    console.log(rectangles);
    
    
    // rectangles.enter().append("rect")
})