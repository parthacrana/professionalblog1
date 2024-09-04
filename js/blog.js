// ***BLOG PAGE FUNCTION TO:****
// getting value/input from the local storage

// creating a new card based on the classes and ids below
let cardsContainer = document.getElementById(`cards-container`);
let singleCardContainer = document.getElementById(`single-card-container`);
let cardTitleContainer = document.getElementById('card-title-container');
let cardTitle = document.getElementById('card-title');
let separator = document.getElementById(`separator`);
let cardContent = document.getElementById(`card-content`);
let authorName = document.getElementById(`author-name`);

function mycoolFunction() {
    // converting JSON into JavaScript object
    let allBlogInfo = JSON.parse(localStorage.getItem("allBlogInfo")) || [];

    cardsContainer.innerHTML = ``;

    //function for calling each blog info and index it.
    allBlogInfo.forEach(function(blogInfo, index) {

    let newCardContainer = document.createElement('div');
    cardsContainer.appendChild(newCardContainer);
    newCardContainer.className += " single-card-container";

    let newCardTitleContainer = document.createElement('div');
    newCardContainer.appendChild(newCardTitleContainer);
    newCardTitleContainer.className += " card-title-container"

    let newCardTitle = document.createElement('h2');
    newCardTitleContainer.appendChild(newCardTitle);
    newCardTitle.textContent = blogInfo.title
    
    let newSeparator = document.createElement('div');
    newCardTitleContainer.appendChild(newSeparator);
    newSeparator.className += " separator"
    
    let newCardContent = document.createElement('div');
    newCardContainer.appendChild(newCardContent);
    newCardContent.className += " card-content"
    
    let newP = document.createElement(`p`);
    newCardContent.appendChild(newP);
    newP.textContent = blogInfo.content

    let newAuthorContainer = document.createElement('div');
    newCardContainer.appendChild(newAuthorContainer);
    newAuthorContainer.className += " author-name";

    let newAuthor = document.createElement('p');
    newAuthorContainer.appendChild(newAuthor);
    newAuthor.textContent = blogInfo.userName

});
}
//calling the function
mycoolFunction();