To reproduce:

First install dependencies by running `yarn` or `npm` in `main-module`
Then run `yarn build` or `npm run build` in `main-module`


To experiment:

First install dependencies by running `yarn` or `npm` in `other-module`
Then run `yarn build` or `npm run build` in `other-module`

`main-module/webpack.config.js` have a working configuration commented out that sets `entryFileCannotBeJs`