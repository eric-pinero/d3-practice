/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/
let svg = d3.select("#chart-area")
    .append("svg")
    .attr("class", "canvas")
    .attr("width", 400)
    .attr("height", 500);

let rectleft = d3.select(".canvas")
    .append("rect")
    .attr("x", 0)
    .attr("y", 20)
    .attr("width", 10)
    .attr("height", 100)
    .attr("fill", "red")

    let bluecircle = d3.select(".canvas")
    .append("circle")
    .attr("cx", 40)
    .attr("cy", 50)
    .attr("r", 30)
    .attr("fill", "blue")

let rectright = d3.select(".canvas")
    .append("rect")
    .attr("x", 70)
    .attr("y", 20)
    .attr("width", 10)
    .attr("height", 100)
    .attr("fill", "red")
