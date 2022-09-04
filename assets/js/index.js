window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#myForm").addEventListener("submit",(e) =>{
    e.preventDefault();
    //alert("hello")
    addComment();

    function addComment() {
      let inputComment = document.querySelector("#inputComment").value;
      console.log(inputComment);
    }
  })
})