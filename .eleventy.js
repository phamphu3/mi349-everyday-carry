module.exports = function(eleventyConfig) {
  // Copy static assets straight through
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");

  // Shortcode for EDC cards
  eleventyConfig.addShortcode("itemCard", function(title, imageUrl, description, url) {
    return `
      <article class="item-card">
        <a href="${url}">
          <img src="${imageUrl}" alt="${title}" class="item-card__image" />
        </a>
        <div class="item-card__body">
          <h2 class="item-card__title">
            <a href="${url}">${title}</a>
          </h2>
          <p class="item-card__text">${description}</p>
        </div>
      </article>
    `;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
