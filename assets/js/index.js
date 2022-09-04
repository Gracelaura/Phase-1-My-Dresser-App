window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#myForm").addEventListener("submit",(e) =>{
    e.preventDefault();
    //alert("hello")
    addComment();

    function addComment() {
      let inputComment = document.querySelector("#inputComment").value;
      console.log(inputComment);
      let li = document.createElement("li");
      li.textContent = inputComment;
      let displayedComment = document.querySelector("#comments-displayed");
    }
  })
})