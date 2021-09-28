const galleryDiv = document.getElementById('gallery')

/*
    Create a functiuon to pass in all data from api and create elements and add to website dynamiclly 
*/
function addUserToGallery(img, first, last, email, city, state) {
    //------Create "card div" and append to gallery div-----------
    const divCard = document.createElement('div'); 
    divCard.className = 'card'; 
    galleryDiv.appendChild(divCard);
    //------Create "img div" and append to card div---------
    const divImgContainer = document.createElement('div'); 
    divImgContainer.className = 'card-img-container'
    divCard.appendChild(divImgContainer);
    //------Create "INFO div" and append to card div---------
    const divInfoContainer = document.createElement('div'); 
    divInfoContainer.className = 'card-info-container';
    divCard.appendChild(divInfoContainer);
    //------Create img element and pass in src and add class and alt text
    const profileImg = document.createElement('img')
    profileImg.src = `${img}`
    profileImg.className ="card-img"
    profileImg.alt = "profile picture"
    divImgContainer.appendChild(profileImg);
    //-------Create h3 name element and pass in first and last name 
    const profileName = document.createElement('h3')
    profileName.id = "name";
    profileName.className = "card-name cap";
    profileName.insertAdjacentHTML('beforeend', `${first} ${last}`)
    divInfoContainer.appendChild(profileName); 
    //-------Create p email element and pass in email 
    const emailPara = document.createElement('p')
    emailPara.className= 'card-text';
    emailPara.insertAdjacentHTML('beforeend', `${email}`)
    divInfoContainer.appendChild(emailPara); 
    //--------Create p city/state element and pass in city, state
    const cityStatePara = document.createElement('p')
    cityStatePara.className = 'card-text cap'; 
    cityStatePara.insertAdjacentHTML('beforeend', `${city}, ${state}`)
    divInfoContainer.appendChild(cityStatePara); 

}

/*
    Get data from randomuser API -------------------------------------------
*/

fetch('https://randomuser.me/api/?results=12')
    .then(res => res.json())
    .then(data => data.results.map(result => {
        let rdmImg = result.picture.large
        let firstName = result.name.first
        let lastName = result.name.last
        let email = result.email
        let city = result.location.city
        let state = result.location.state
        addUserToGallery(rdmImg, firstName, lastName, email, city, state)
    } ))

/*
    Add event listener for card click and display modal
*/

//insert event listener to listen for card click and display it as a modal