function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction() {
    document.getElementById("myForm").submit();
  }

const list = document.getElementById('list')
  list.addEventListener('click',function(){
    document.getElementById('categoriesjs').style.display="block";
    document.getElementById('commentsjs').style.display="none";
})
const form = document.getElementById('myForm')
  interpreter.addEventListener('click',function(){
    document.getElementById('commentsjs').style.display="block";
    document.getElementById('categoriesjs').style.display="none";
})
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

