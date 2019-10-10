var filmPromise = d3.json("https://ghibliapi.herokuapp.com/films")
filmPromise.then(function(films)
{
console.log("film", films);
    displayfilms(films)
},
function(err)
{
console.log("fail", err)    
})

var displayfilms = function(films)
{
    var box = d3.select("#gib")
    box.append("p")
    .text(function(d){
        return d.description;
    }
         )
}