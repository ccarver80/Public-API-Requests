const galleryDiv = document.getElementById("gallery");
const userCard = document.getElementsByClassName("card");
const bodyTag = document.querySelector("body");

//-------------------------------------------------------------------------------------------------------
//  Create a functiuon to pass in all data from api and create elements and add to website dynamically
//------------------------------------------------------------------------------------------------------

function addUserToGallery(img, first, last, email, city, state) {
  //------Create "card div" and append to gallery div-----------
  const divCard = document.createElement("div");
  divCard.className = "card";
  galleryDiv.appendChild(divCard);
  //------Create "img div" and append to card div---------
  const divImgContainer = document.createElement("div");
  divImgContainer.className = "card-img-container";
  divCard.appendChild(divImgContainer);
  //------Create "INFO div" and append to card div---------
  const divInfoContainer = document.createElement("div");
  divInfoContainer.className = "card-info-container";
  divCard.appendChild(divInfoContainer);
  //------Create img element and pass in src and add class and alt text
  const profileImg = document.createElement("img");
  profileImg.src = `${img}`;
  profileImg.className = "card-img";
  profileImg.alt = "profile picture";
  divImgContainer.appendChild(profileImg);
  //-------Create h3 name element and pass in first and last name
  const profileName = document.createElement("h3");
  profileName.id = "name";
  profileName.className = "card-name cap";
  profileName.insertAdjacentHTML("beforeend", `${first} ${last}`);
  divInfoContainer.appendChild(profileName);
  //-------Create p email element and pass in email
  const emailPara = document.createElement("p");
  emailPara.className = "card-text";
  emailPara.insertAdjacentHTML("beforeend", `${email}`);
  divInfoContainer.appendChild(emailPara);
  //--------Create p city/state element and pass in city, state
  const cityStatePara = document.createElement("p");
  cityStatePara.className = "card-text cap";
  cityStatePara.insertAdjacentHTML("beforeend", `${city}, ${state}`);
  divInfoContainer.appendChild(cityStatePara);
}
//-------------------------------------------------------------
//     Function to create Modal when card is clicked on
//-------------------------------------------------------------

function createModal(img, firstname, lastname, email, city, phone, address, birthday) {
  //-------Create Modal Container Div and add it before the script tag-----------------------
  const modalContDiv = document.createElement("div");
  modalContDiv.className = "modal-container";
  bodyTag.insertBefore(modalContDiv, bodyTag.childNodes[11]); // this inserts the div before the script tag and not after it
  //-------Create Modal div that holds img and Modal Info------------------------------------------------------------------------
  const modalDiv = document.createElement("div");
  modalDiv.className = "modal";
  modalContDiv.appendChild(modalDiv);
  //---Create Close "X" button in upper corner and add eventlistener to display "none" on modalContentDiv when clicked ------------------
  const closeButton = document.createElement("button");
  closeButton.className = "modal-close-btn";
  closeButton.type = "button";
  closeButton.id = "modal-close-btn";
  const X = document.createElement("strong");
  X.insertAdjacentHTML("beforeend", "X");
  closeButton.appendChild(X);
  modalDiv.appendChild(closeButton);
  closeButton.addEventListener("click", () => (modalContDiv.style.display = "none")); // --- closes out of user profile when button is clicked
  //------Create a div to hold the info on user profile that was clicked-------------------------------------------------------------------
  const modalInfoDiv = document.createElement("div");
  modalInfoDiv.className = "modal-info-container";
  modalDiv.appendChild(modalInfoDiv);
  //------Create img tag, set src to same img that was clicked-------------------
  const modalImg = document.createElement("img");
  modalImg.src = `${img}`;
  modalImg.className = "modal-img";
  modalImg.alt = "profile picture";
  modalInfoDiv.appendChild(modalImg);
  //------Create h3 tag, insert clicked name ------------------------
  const modalName = document.createElement("h3");
  modalName.id = "name";
  modalName.className = "modal-name cap";
  modalName.insertAdjacentHTML("beforeend", `${firstname} ${lastname}`);
  modalInfoDiv.appendChild(modalName);
  //------Create a p tag to hold email value and add to modal card ----------------------------
  const modalEmail = document.createElement("p");
  modalEmail.className = "modal-text";
  modalEmail.insertAdjacentHTML("beforeend", `${email}`);
  modalInfoDiv.appendChild(modalEmail);
  //------Create p tag to hold city value and add to modal card ------------------------------------
  const modalCity = document.createElement("p");
  modalCity.className = "modal-text cap";
  modalCity.insertAdjacentHTML("beforeend", `${city}`);
  modalInfoDiv.appendChild(modalCity);
  //------Create hr (horizonal Line) element and add to card --------------------------------------
  const hrTag = document.createElement("hr");
  modalInfoDiv.appendChild(hrTag);
  //------Create p tag and insert phone value to modal card----------------------------------
  const modalPhone = document.createElement("p");
  modalPhone.className = "modal-text";
  modalPhone.insertAdjacentHTML("beforeend", `Phone: ${phone}`);
  modalInfoDiv.appendChild(modalPhone);
  //------Create p tag to hold full address (number, street name, city state and zip code) and add to modal card-----
  const modalAddress = document.createElement("p");
  modalAddress.className = "modal-text";
  modalAddress.insertAdjacentHTML("beforeend", `${address}`);
  modalInfoDiv.appendChild(modalAddress);
  //------Create p tag to hold birthday and add to modal card --------------------------------------
  const modalBirthday = document.createElement('p');
  modalBirthday.className = 'modal-text'; 
  modalBirthday.insertAdjacentHTML('beforeend', `Birthday: ${birthday}`);
  modalInfoDiv.appendChild(modalBirthday);
}

//------------------------------------------------------------------
//    Function to add click event listener to all the div cards
//-----------------------------------------------------------------

function clickOnCardEvent() {
  for (let i = 0; i < userCard.length; i++) {
    userCard[i].addEventListener("click", () => {
        //------declare all varibles to add to "createModal()" function
      let clickImg = employeeList[i].picture.large;
      let clickFirstName = employeeList[i].name.first;
      let clickLastName = employeeList[i].name.last;
      let clickEmail = employeeList[i].email;
      let clickCity = employeeList[i].location.city;
      let clickPhone = employeeList[i].cell;
      let clickAddress = `
        ${employeeList[i].location.street.number}
        ${employeeList[i].location.street.name}, 
        ${clickCity}, 
        ${employeeList[i].location.state} 
        ${employeeList[i].location.postcode}
        `;
      let clickBirthday = employeeList[i].dob.date.slice(0, 10) // <----- slice off time from dob
      //call function and pass in all arguments to add to modal
      createModal(
        clickImg,
        clickFirstName,
        clickLastName,
        clickEmail,
        clickCity,
        clickPhone,
        clickAddress,
        clickBirthday
      );
    });
  }
}
let employeeList;

//-----------------------------------------------------------------------------
//    Get data from randomuser API
//----------------------------------------------------------------------------

fetch("https://randomuser.me/api/?results=12")
  .then((res) => res.json())
  .then((data) => {
    employeeList = data.results;
    employeeList.map((result) => {
      let rdmImg = result.picture.large;
      let firstName = result.name.first;
      let lastName = result.name.last;
      let email = result.email;
      let city = result.location.city;
      let state = result.location.state;
      addUserToGallery(rdmImg, firstName, lastName, email, city, state);
    });
  })
  .then(() => clickOnCardEvent())
  .then()
  .catch((err) => Error(err));


