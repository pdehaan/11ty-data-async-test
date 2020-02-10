module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("date", timestamp => new Date(timestamp * 1000).toLocaleDateString());

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
