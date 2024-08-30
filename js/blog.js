const userOpinions = document.getElementById("user-opinions");

// document.body.appendChild(userOpinions);

const data = JSON.parse(localStorage.getItem("data"));

console.log(data);

for (const userOpinion of data) {
  const article = document.createElement("article");
  const articleTitle = document.createElement("div");
  const articleContent = document.createElement("div");
  const articleAuthor = document.createElement("div");

  articleTitle.setAttribute("class", "article__title");
  articleContent.setAttribute("class", "article__content");
  articleAuthor.setAttribute("class", "article__author");

  console.log(userOpinion.title);
  articleTitle.textContent = `${userOpinion.title}`;
  articleContent.textContent = `${userOpinion.content}`;
  articleAuthor.textContent = `${userOpinion.author}`;

  article.appendChild(articleTitle);
  article.appendChild(articleContent);
  article.appendChild(articleAuthor);

  userOpinions.append(article);
}