module.exports = {
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			}
		]
	},
	entry: {
		index: "./index.js"
	},
	output: {
		path: "/",
		filename: "[name]_build.js"
	}
};