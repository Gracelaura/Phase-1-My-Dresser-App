window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    // alert("hello")
    addComment();

    function addComment() {
      let inputComment = document.querySelector("#inputComment").value;
      console.log(inputComment);
      let li = document.createElement("li");
      li.textContent = inputComment;
      let displayedComment = document.querySelector("#comments-display");

      displayedComment.appendChild(li);
      li.style.listStyle = "none";
      myForm.reset();
    }
  });

  document.querySelector(".dropbtn").addEventListener("click", (e) => {
    let categoryShow = document.querySelector("#catergoriesjs");
    if (categoryShow.style.display == "block") {
      categoryShow.style.display = "none";
    } else {
      categoryShow.style.display = "block";

      let showBanner = document.getElementById("showBanner");
      if (categoryShow.style.display == "none") {
        showBanner.style.display = "block";
      } 
    }
  });

  fetch("http://localhost:3000/outfits")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      document.getElementById("swanky-title").textContent = data[0].category;
      document.getElementById("swanky-outfit").src = data[0].image1;
      document.getElementById("swanky-outfit2").src = data[0].image2;
      document.getElementById("swanky-description").textContent = data[0].description;

      document.getElementById("chic-title").textContent = data[1].category;
      document.getElementById("chic-outfit").src = data[1].image1;
      document.getElementById("chic-outfit2").src = data[1].image2;
      document.getElementById("chic-description").textContent = data[1].description;

      document.getElementById("casual-title").textContent = data[2].category;
      document.getElementById("casual-outfit").src = data[2].image1;
      document.getElementById("casual-outfit2").src = data[2].image2;
      document.getElementById("casual-description").textContent = data[2].description;

      document.getElementById("rockstar-title").textContent = data[3].category;
      document.getElementById("rockstar-outfit").src = data[3].image1;
      document.getElementById("rockstar-outfit2").src = data[3].image2;
      document.getElementById("rockstar-description").textContent = data[3].description;
    });
});

