const form = document.querySelector("form") // using the <form> tag

form.addEventListener("submit", (e) => {
   // e.preventDefault()
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

   // If name and id are hypenated
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
   displayUserData1(user)
//    displayUserData2(user)
})

function displayUserData1(user) {
    // get the hard-coded elements from the DOM

    const firstNameElement = document.getElementById('first');
    const lastNameElement = document.getElementById('last');
    const emailElement = document.getElementById('email-info');
    const dateElement = document.getElementById('date-info');

    // use the user object to populate them

    firstNameElement.textContent = user.firstName;
    lastNameElement.textContent = user.lastName;
    emailElement.textContent = user.email;
    dateElement.textContent = user.date;
}

function displayUserData2(user) {
   const userInfoDiv = document.getElementById("user-info")
   const div = document.createElement("div")
   div.innerHTML =  `<label for="first">First Name:</label>
        <span id="first">${user.firstName}</span><br />
        <label for="last">Last Name:</label>
        <span id="last">${user.lastName}</span><br />
        <label for="email-info">Email:</label>
        <span id="email-info">${user.email}</span><br />
        <label for="date-info">Date:</label>
        <span id="date-info">${user.date}</span><br /><br />`
   userInfoDiv.append(div)

}
