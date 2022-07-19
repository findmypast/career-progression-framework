module.exports = (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy("./src/css");
	eleventyConfig.addPassthroughCopy("./src/assets");
	eleventyConfig.addWatchTarget("./src/css");
	eleventyConfig.addFilter("sortByLevel", (values) => {
		// eleventy does not recommend that the callback parameter be mutated
		return values.slice().sort((a, b) => {
			return a.data.level - b.data.level;
		});
	});
	eleventyConfig.addFilter("toUpperCase", function (text) {
		return text[0].toUpperCase() + text.slice(1, text.length);
	});
	eleventyConfig.addFilter("omitAll", (values) => {
		const { all: _withoutAll, ...rest } = values;
		return rest;
	});
	return {
		templateFormats: ["md", "njk", "html"],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		dir: {
			input: "src",
			output: "public"
		}
	};
};
