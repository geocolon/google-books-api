'use strict';
function bookSearch(){
  var search = document.getElementById('search').value;

  document.getElementById('results').innerHTML = '',

  console.log(search);

  const mixContent = (ImageLink) => {
    console.log(ImageLink);

  };


  $.ajax({
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + search,
    dataType: 'json',
    success: function(data) {
      console.log('This is the data: ',data);
      for(let i = 0; i < data.items.length; i++){
        let book = data.items[i].volumeInfo;
        let image = data.items[i].volumeInfo.imageLinks.thumbnail.replace(/http/gi,'https');
        let addressLink = JSON.stringify(data.items[i].volumeInfo.infoLink);
        console.log('Image resource: ', typeof image);
        results.innerHTML += 
        `
        <div class="col-3">
        <div class="list-content">
        <div>
        <img src="${image}" alt="${book.title}">
        </div>
        <h4>${book.title}</h4>
        <p>by ${book.authors}</p>
        <button onclick="buttonHide('desc${i}')">description</button>
        <div id="desc${i}" class="desc">
        <p>${book.description}</p>
        </div>
        <a href="${addressLink}"><button>More info.</button></a>
        </div>
        </div>
        `;
      }
    },
    type: 'GET'
  });
}

const buttonHide = (iD) => {
  let x = document.getElementById(iD);
  console.log('Is is working', x);

  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
};

document.getElementById('button').addEventListener('click', bookSearch, buttonHide, false);

