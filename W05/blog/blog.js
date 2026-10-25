
const articlesContainer = document.querySelector('#articles');

articles.forEach((article) => {
  const bookCard = document.createElement('article');
  bookCard.classList.add('book-card');

  bookCard.innerHTML = `
    <div class="book-details">
      <p class="book-category">${article.genre} · Ages ${article.ages}</p>
      <p class="publication">${article.date}</p>

      <h2>${article.title}</h2>

      <div class="rating" aria-label="Rating: ${article.stars.length} out of 5 stars">
        <span aria-hidden="true">${article.stars}</span>
      </div>

      <h3>My Review</h3>
      <p>${article.description}</p>
    </div>

    <figure class="book-cover">
      <img
        src="${article.imgSrc}"
        alt="${article.imgAlt}"
        loading="lazy"
      >
      <figcaption>${article.title}</figcaption>
    </figure>
  `;

  articlesContainer.appendChild(bookCard);
});
