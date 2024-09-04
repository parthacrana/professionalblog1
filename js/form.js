/*Function to get inputs value from the form and add to the local
storage using a JSON array with blog posts objects */

document.getElementById(`myform`).addEventListener(`submit`, function(event){
  event.preventDefault();
  // declaring variables
  let userName = document.getElementById('username').value;
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;

  // getting existing blog from local storage to be added to the array
  let existingBlogInfo = JSON.parse(localStorage.getItem(`allBlogInfo`));
  if(existingBlogInfo == null) existingBlogInfo = [];

  //creating an object
  let blogInfo = {    
      userName: userName,
      title: title,
      content: content,
  };

  //adding alert to avoid empty fields
  if (userName.trim() === '' || title.trim() === '' || content.trim()  === '') {
      alert('All fields are required. Please add some content to the empty field.');
  } else {
      this.submit();
      localStorage.setItem(`blogInfo`, JSON.stringify(blogInfo));
      existingBlogInfo.push(blogInfo);
      localStorage.setItem(`allBlogInfo`, JSON.stringify(existingBlogInfo));
      location.href="blog.html"
  }
})