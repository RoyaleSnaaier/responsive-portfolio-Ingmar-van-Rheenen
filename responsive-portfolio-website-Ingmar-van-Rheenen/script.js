document.getElementById("btn_hamburger").addEventListener("mousedown",function(e) {
  show();
});

function show(){
  if(document.querySelector('.hamburger').classList.contains("open")) {
      document.querySelector('.hamburger').classList.remove("open");
      document.querySelector('.navigation').classList.remove('active');
  } else {
      document.querySelector('.hamburger').classList.add("open");
      document.querySelector('.navigation').classList.add('active');
  }
  
}
document.querySelector('a[href="#timeline"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#timeline').scrollIntoView({ behavior: 'smooth' });
});

$(function() {
  $("#slideshow").draggable();
});

