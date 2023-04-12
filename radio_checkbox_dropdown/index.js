const form = document.querySelector("form")
const languageRadioBtns = document.getElementsByName("language")
const macCheckbox = document.getElementById("mac")
const pcCheckbox = document.getElementById("pc")
const cuisineSelect = document.getElementById("cuisine")

form.addEventListener("submit", (e) => {
   e.preventDefault()

   const aboutMe = {
      language: "",
      Mac: false,
      PC: false,
      cuisine: "",
   }

   // Get the radio button info
   languageRadioBtns.forEach((btn) => {
      if (btn.checked) {
         aboutMe["language"] = btn.value
      }
   })

   // Get the checkbox info
   aboutMe["Mac"] = macCheckbox.checked
   aboutMe["PC"] = pcCheckbox.checked

   // Get the select box info
   aboutMe["cuisine"] = cuisineSelect.value

   console.log(aboutMe)
})


