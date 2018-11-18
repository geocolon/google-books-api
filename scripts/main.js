'use strict';
/* global $, console.log*/

// google.books.load();

// function initialize() {
//   var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
//   viewer.load('ISBN:0738531367');
// }

// google.books.setOnLoadCallback(initialize);

console.log('<! main.js attached: OK! >');


$(document).ready(function() {
  function myFunction() {
    let form = document.getElementById('myForm').submit();
    console.log(form);
  }
});



{/* <script>
    let title = '';


    function handleResponse(response) {
      for (var i = 0; i < response.items.length; i++) {
        let item = response.items[i];
        title = '<h5 class="center-align white-text">' + response.items[i].volumeInfo.title + '</h5>';

        console.log(item);
        // in production code, item.text should have the HTML entities escaped.
        document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title + title;
      }
    }
    
    </script> */}