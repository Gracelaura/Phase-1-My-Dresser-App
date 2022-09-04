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

      displayedComment.appendChild("li");
      li.style.listStyle = "none";
      myForm.reset();
    }
  });

  document.querySelector(".dropbtn").addEventListener("click", (e) => {
    let categoryShow = document.querySelector("#categoryjs");
    if (categoryShow.style.display == "block") {
      categoryShow.style.display = "none";
    }else{
      categoryShow.style.display = "block";

      let showBanner = document.getElementById("showBanner");
      if (categoryShow.style.display == "none") {
        showBanner.style.display = "block";
      }else {
        showBanner.style.display = "none";
      }
      }
    });

    fetch("http://localhost:3000/outfits")
    
  })
})