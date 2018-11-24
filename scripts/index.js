function bookSearch(){
  var search = document.getElementById('search').value

  document.getElementById('results').innerHTML = "",

  console.log(search);

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",
    success: function(data) {
      for(let i = 0; i < data.items.length; i++){
        let book = data.items[i].volumeInfo;
        let image = data.items[i].volumeInfo.imageLinks.thumbnail;
        let addressLink = data.items[i].volumeInfo.infoLink;
        results.innerHTML += 
        `<div class="col-4">
        <div class="class="${typeof image === 'undefined' ? 'hidden' : ''}">
        <img src="${image}" alt="${book.value}">
        </div>
        <h4>${book.title}</h4>
        <p>${book.authors}</p>
        <div class="desc">
        <p>${book.description}</p>
        </div>
        <a href="${addressLink}">More info.</a>
        </div>
        `
      }
    },
    type: 'GET'
  });
}

document.getElementById('button').addEventListener('click', bookSearch, false);