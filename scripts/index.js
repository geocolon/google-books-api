'use strict';
function bookSearch(){
  const search = document.getElementById('search').value;

  document.getElementById('results').innerHTML = '',

  console.log(search);


  $.ajax({
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + search + '&startIndex=0&maxResults=20',
    dataType: 'json',
    success: function(data) {
      console.log('This is the data: ',data);
      for(let i = 0; i < data.items.length; i++){
        let book = data.items[i].volumeInfo;
        let image = data.items[i].volumeInfo.imageLinks.thumbnail.replace(/http/gi,'https');
        let addressLink = data.items[i].volumeInfo.infoLink;
        console.log('url resource: ', 'https://www.googleapis.com/books/v1/volumes?q=' + search + '&startIndex=0&maxResults=20');
        results.innerHTML += 
        `
        <div class="col-4">
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
        <a href="${addressLink}" target="_blank"><button>More info.</button></a>
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

