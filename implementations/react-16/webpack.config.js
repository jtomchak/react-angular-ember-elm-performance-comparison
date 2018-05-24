const path = require("path");

module.exports = {
  mode: "production", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.

  entry: "./js/app.jsx", // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, "./"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: "build.min.js", // string
    // the filename template for entry chunks

    publicPath: "/", // string
    // the url to the output directory resolved relative to the HTML page

    libraryTarget: "umd" // universal module definition
    // the type of the exported library

    /* Advanced output configuration (click to show) */
  }
};
