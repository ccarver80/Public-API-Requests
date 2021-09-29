# Public-API-Requests
Tech Degree project #5: Using Fetch API to use Random User Generator API (https://randomuser.me/) to grab information for 12 random “employees,” and use that data to build a prototype for an Awesome Startup employee directory. 


## View this website [here](https://ccarver80.github.io/Public-API-Requests/)

## About Project 
Team Treehouse provided the basic HTML/CSS file, I was to create a JS file and add link it in the HTML.
My job was to use a 'GET' API request to get 12 random employess from the "randomuser.me" website. 
I was also assigned to build a "Modal" profile when a indvidual profile is clicked. 

I could have made both "addUserToGallery" and "createModal" functions easier by using literal notation and appending the entire HTML content like so:

```javascript 
element.insertAdjacentHTML('beforend', `
        <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${img}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${name}</h3>
                        <p class="modal-text">${email}</p>
                        <p class="modal-text cap">${city}</p>
                        <hr>
                        <p class="modal-text">${phone}</p>
                        <p class="modal-text">${address}</p>
                        <p class="modal-text">${birthday}</p>
                    </div>
                </div>
    `)
```    

But I felt like exercising and practicing appending each individual element. 

### Things I learned in this lesson. 
* How to send and process data from a API request.
* Using git and the Command Line
* Appending elements to the DOM.
* Making better comments
* Building better README's







