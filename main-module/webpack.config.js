'use strict'
module.exports = {
  entry: [
    __dirname + '/src/index.ts'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: __dirname + '/src',
        use: [
          // Errors
          require.resolve('ts-loader'),
          // Works
          // {loader: require.resolve('ts-loader'), options: {entryFileCannotBeJs: true}},
        ],
      },
    ],
  },
}
