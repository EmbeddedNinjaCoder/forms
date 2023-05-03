const form = document.querySelector("form") // using the <form> tag

form.addEventListener("submit", (e) => {
   e.preventDefault()
   console.log(e)

   // Different ways to access input values

   // Using the element id or name
   const firstName = document.getElementById("first-name").value
   console.log(firstName)

   // Using the target array
   const lastName = e.target[1].value
   console.log(lastName)

   // If name or id is a single word
   const email = e.target.email.value
   console.log(email)

   const date = e.target.date.value
   console.log(date)

   // If name and id are hypenated - access it with bracket notation, like an object property...which it is!
   let firstNameUsingNameOrIDAttribute = e.target["first-name"].value
   console.log(firstNameUsingNameOrIDAttribute)

   // You can see why it's a good idea to name the id and name attributes the same!!!!

   // make an object
   const user = {
      firstName,
      lastName,
      email,
      date,
   }
   displayUserData(user)
})

function displayUserData(user) {
   const userInfoDiv = document.getElementById("user-info")

   const dataDiv = document.createElement("div")

   const firstNameP = document.createElement("div")
   firstNameP.textContent = `First Name: ${user.firstName}`

   const lastNameP = document.createElement("div")
   lastNameP.textContent = `Last Name: ${user.lastName}`

   const emailP = document.createElement("div")

   emailP.textContent = `Email: ${user.email}`

   const dateP = document.createElement("div")
   dateP.textContent = `Date: ${user.date}`

   dataDiv.append(firstNameP, lastNameP, emailP, dateP)

   const br = document.createElement("br")
   userInfoDiv.append(dataDiv, br)
}
