let recipeBox = document.querySelector(".recipeContainer")
let recipes = document.querySelector(".recipeList")
let content = document.querySelector("#wrapper");
let button = document.querySelector("#button");


fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${search.value}`)

  .then(function(response) {
    if (response.status === 200) {
      return response.json();
    }
  })

  .then(function(data) {
    console.log(data);
    let recipeHTML = "";
    let results = data.results;
    for (var i = 0; i < results.length; i++) {
      recipes.innerHTML += `
    <img src=${results[i].thumbnail}>
    <h1>${results[i].title}</h1>
    `
    }

  })




  .catch(function(error) {
    console.error(error.message);
  });
