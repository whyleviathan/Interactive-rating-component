const mainContainer = document.querySelector(".main-container .card")
const thankWindow = document.querySelector(".thank-card")
const submitBtn = document.getElementById("submit")
const goBack = document.getElementById("go-back")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click", () => {
    thankWindow.classList.remove("hidden")
    mainContainer.style.display= "none"
})

goBack.addEventListener("click", () => {
    thankWindow.classList.add("hidden")
    mainContainer.style.display= "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})