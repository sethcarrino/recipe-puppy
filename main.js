let content = document.querySelector("#wrapper");
let recipeHTML = "";

fetch("http://www.recipepuppy.com/api/?q=pizza")

.then(function(response){
  if (response === 200){
    return response.json();
  }
})

.then(function(data) {
  let data = data.results;
  for (var i = 0; i < data.length; i++) {
    recipeHTML += `
    <div id="container">
      <img src="${data.thumbnail}">
    </div>`
  }
})
