module.exports = {
  resolve: {
    modules: ["node_modules"],
    alias: {
      public: path.join(__dirname, "./public"),
    },
  },
};
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//     ],
//   },
// };
