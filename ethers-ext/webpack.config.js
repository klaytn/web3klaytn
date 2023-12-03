const path = require("path");

module.exports = {
  entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      "querystring": false, // referenced in web3rpc/ApiClient, which is unused.
    },
  },
  output: {
    // Output dist/ethers-ext.bundle.js
    filename: 'ethers-ext.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // Define window.ethers_ext
    library: "ethers_ext",
    libraryTarget: "window",
  },
};
