var filmPromise = d3.json("https://ghibliapi.herokuapp.com/films")
filmPromise.then(function(films)
{
    d3.select("h1")
    .text("Select film")
console.log("film", films);
    displayfilms(films)
    displaydescription(films)
},
function(err)
{
console.log("fail", err)
        d3.select("h1")
    .text("No Films Found")
})

var displayfilms = function(films)
{
   d3.select("#gib")
    .selectAll("h2")
    .data(films)
    .enter()
    .append("h2")
    .text(function(d)
         {
       return d.title
   })

}

  var displaydescription = function(films)
{
   var box = 
    d3.select("#gib2")
    .selectAll("div")
   .data(films)
   .enter()
    box.append("div")
    .attr("class", "description")
    .text(function(d)
         {
        return d.description
    })
    var info = 
        box.append("p")
    .text(function(d)
         {
        return d.title
    })
}