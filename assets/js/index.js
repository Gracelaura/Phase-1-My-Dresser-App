 function myFunction() {
     let dropdown = document.getElementById("myDropdown")
       if(dropdown.style.display=="block"){
         dropdown.style.display="none"
       }else{
        dropdown.style.display="block"
       }
 }
  function myFunction2() {
      document.getElementById("submit").addEventListener("submit",(e) => {
        e.preventDefault()
        let commentSubmitted = document.getElementById("comments").value
  let commentDisplayed = document.createElement("p")
  commentDisplayed.textContent = commentSubmitted
  console.log("commentDisplayed")
  })
  //let comment = `<p>${e.target.comment.value}</p>`
  //commentsDisplay.innerHTML = comment
}
//  const list = document.getElementById('list')
//    list.addEventListener('click',function(){
//      document.getElementById('categoriesjs').style.display="block";
//      document.getElementById('commentsjs').style.display="none";
//  })
// const form = document.getElementById('myForm')
//   myForm.addEventListener('click',function(){
//     document.getElementById('commentsjs').style.display="block";
//     document.getElementById('categoriesjs').style.display="none";
// })
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

//  fetch("http://localhost:3000/outfits/1")
//  .then(response => response.json())
//  .then(data =>{
//    updatePage(data);
// })

// function updatePage(outfitsObj){
//    let swankyImg = document.getElementById("swanky-outfit");
//    swankyImg.src = outfitsObj.image1;
//  document.getElementById("swanky-outfit2").src = outfitsObj.image2
// }

//  fetch("http://localhost:3000/outfits/2")
//  .then(response => response.json())
//  .then(data =>{
//    console.log(data);
//   updateChic(data);
//  })

//  function updateChic(outfitsObj){
//  let chicImg = document.getElementById("chic-outfit");
//  chicImg.src = outfitsObj.image1;
//  document.getElementById("chic-outfit2").src = outfitsObj.image2
//  }
//  fetch("http://localhost:3000/outfits/3")
//  .then(response => response.json())
//  .then(data =>{
//    console.log(data);
//    updateCasual(data);
//  })

//  function updateCasual(outfitsObj){
//  let casualImg = document.getElementById("casual-outfit");
//  casualImg.src = outfitsObj.image1;
//  document.getElementById("casual-outfit2").src = outfitsObj.image2
//  }
//  fetch("http://localhost:3000/outfits/4")
//  .then(response => response.json())
//  .then(data =>{
//    console.log(data);
//    updateRockstar(data);
//  })

//  function updateRockstar(outfitsObj){
//  let rockstarImg = document.getElementById("rockstar-outfit");
//  rockstarImg.src = outfitsObj.image1;
//  document.getElementById("rockstar-outfit2").src = outfitsObj.image2
//  }
