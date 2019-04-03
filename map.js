
const visited_countries = [
    '724',
    '804',
    '840',
    '710',
    '156'
]

function colorCountry(country) {
    if (visited_countries.includes(country.id)) {
        return '#c8b98d'
    } else {
        return '#eeeeee';
    }
};


document.addEventListener("DOMContentLoaded", function (e) {

    var width = window.innerWidth,
        height = window.innerHeight;

    var projection = d3.geoMercator()
        .translate([width / 2.2, height / 1.5]);

    var plane_path = d3.geoPath()
        .projection(projection);

    var svg = d3.select("#world-map").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "map");

    var g = svg.append("g");
    var path = d3.geoPath()
        .projection(projection);

    // load and display the World
    d3.json("https://unpkg.com/world-atlas@1/world/110m.json", function (error, topology) {
        g.selectAll("path")
            .data(topojson.feature(topology, topology.objects.countries)
                .features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr('fill', colorCountry);
    });

})
