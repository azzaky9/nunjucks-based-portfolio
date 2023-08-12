module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.addPassthroughCopy("styles/global-style.css");
  eleventyConfig.addPassthroughCopy("styles/utils/buttons.css");
  eleventyConfig.addPassthroughCopy("styles/utils/media-query.css");
  eleventyConfig.addPassthroughCopy("script/main.js");
  eleventyConfig.addPassthroughCopy({
    "node_modules/animejs/lib/anime.js": "script/anime.js"
  });

  eleventyConfig.addCollection("datas", (collection) => {
    return collection.getFilteredByGlob("_data/data.json");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes"
    },
    templateFormats: ["html", "njk", "md"],
    markdownTemplateEngines: "njk",
    htmlTemplateEngines: "njk",
    dataTemplateEngines: "njk"
  };
};
