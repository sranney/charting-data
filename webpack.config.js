const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: "./client/src/index.js",
	output: {
		path: path.resolve(__dirname, "client/dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: ["babel-loader"]
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: "file-loader",
				options: {
					outputPath: "/src/images"
				}
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "babel-loader"
					},
					{
						loader: "react-svg-loader",
						options: {
							jsx: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "client/src/index.html"
		}),
		new BundleAnalyzerPlugin()
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()]
	}
};
