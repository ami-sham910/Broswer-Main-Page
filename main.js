var currentDate = new Date();

    // var day = currentDate.getDate();
    // var month = currentDate.getMonth() + 1; // Months are zero-based
    // var year = currentDate.getFullYear();
    // var dateString = day + '/' + month + '/' + year;

    // var dateElement = document.getElementById('Cdat');
    // dateElement.innerText = dateString;


// if (day < 10) {
//   day = "0" + day;
// }
// if (mnth < 10) {
//   mnth = "0" + mnth;
// // }
// let toda = (day + "-" + mnth + "-" + year)
// console.log(toda)
// console.log(day)
// console.log(mnth)
// console.log(year)





function displaytime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let ampm = "AM";


  if (hours > 12) {
    hours = hours - 12;
    ampm = "PM";
  }

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }



  let fulltime = (hours + ":" + minutes + ":" + seconds + ":" + ampm);
  let clock = document.getElementById("clock");
  clock.innerHTML = fulltime;


}
setInterval(displaytime, 100);
function changeBackground() {
  let cb = document.getElementById('targetElement')
  var image = document.getElementById('myImage');

}




function search(event) {
  event.preventDefault();
  var query = document.getElementById("searchQuery").value;
  var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
  window.open(searchUrl, "_blank");

  document.getElementById("searchForm").reset();
}
var images = ['images/beauty.jpg', 'images/itachi.jpg', 'images/madara.jpg', 'images/moon.png', 'images/ninja.jpg']; // Add the URLs of your images here
var currentIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = "url('" + images[currentIndex] + "')";
  currentIndex = (currentIndex + 1) % images.length;
}

// setInterval(changeBackground, 15000); // Run the changeBackground function every 5 seconds (5000 milliseconds)






