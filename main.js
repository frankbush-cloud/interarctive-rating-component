
const mainContainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thankyou');
const submitButton = document.getElementById('btn-submit');
const rateAgain = document.getElementById('rate-again');
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

//remove the main-container on clicking the submit-btton
// submitButton.addEventListener("click", ()=>{
//     thanksContainer.classList.remove("hidden");
//     mainContainer.style.display = "none";
// })

// rateAgain.addEventListener("click", ()=> {
//   thanksContainer.classList.add("hidden");
//   mainContainer.style.display="block";
// })

rates.forEach((rate)=>{
  rate.addEventListener("click", ()=>{
    rating.innerHTML = rate.innerHTML;
    submitButton.addEventListener("click", ()=>{
      thanksContainer.classList.remove("hidden");
      mainContainer.style.display = "none";
      rateAgain.addEventListener("click", ()=> {
        thanksContainer.classList.add("hidden");
        mainContainer.style.display="block";
      })
  })
  })
})
  

// 
// rates.forEach((rate)=>{
//   rate.addEventListener("click", ()=>{
//     rating.innerHTML = rate.innerHTML;
//     submitButton.addEventListener("click", ()=>{
//       thanksContainer.classList.remove("hidden");
//       mainContainer.style.display = "none";
//     })
//   })
// });


