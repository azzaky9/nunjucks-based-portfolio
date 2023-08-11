module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.addPassthroughCopy("styles/global-style.css");
  eleventyConfig.addPassthroughCopy("styles/utils/buttons.css");
  eleventyConfig.addPassthroughCopy("script/main.js");
  eleventyConfig.addPassthroughCopy({
    "node_modules/animejs/lib/anime.js": "script/anime.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js": "script/bootstrap.js",
    "node_modules/bootstrap/dist/css/bootstrap.min.css":
      "styles/utils/bootstrap.css"
  });

  eleventyConfig.addLayoutAlias("default", "src/_includes/layouts/index.njk");

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
