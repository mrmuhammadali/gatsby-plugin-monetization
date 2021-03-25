# gatsby-plugin-monetization

> A [Gatsby](https://github.com/gatsbyjs/gatsby) plugin for [react-monetize](https://github.com/guidovizoso/react-monetize) to speed up your integration with Web Monetization API

## Install

`yarn add gatsby-plugin-monetization`

Or

`npm install --save gatsby-plugin-monetization`

## How to use

You can read how to get your payment pointer on [official website of Web Monetization API](https://webmonetization.org/docs/receiving).

```js
import { useContent, useStatus } from 'gatsby-plugin-monetization';

function MyComponent() {
    // ...
    const { state, events } = useStatus();
    const { isMonetized } = useContent();
    // ...
}
```

`./gatsby-config.js`

```js
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-monetization`,
            options: {
                // [required]
                paymentPointer: 'your-payment-pointer',
            },
        },
    ],
};
```

## Examples

To setup playground locally, run following commands (without -) in sequence:

```sh
- git clone git@github.com:mrmuhammadali/gatsby-plugin-monetization.git
- cd gatsby-plugin-monetization/examples
- yarn install
- yarn start
```


## Author

👤 **Muhammad Ali <hi@muhammadali.dev>**

-   Twitter: [@muhammadali_io](https://twitter.com/muhammadali_io)
-   Github: [@mrmuhammadali](https://github.com/mrmuhammadali)

## [react-monetize](https://github.com/guidovizoso/react-monetize) Author

👤 **Guido Vizoso <guido.vizoso9@gmail.com>**

-   Twitter: [@guido_vizoso](https://twitter.com/guido_vizoso)
-   Github: [@guidovizoso](https://github.com/guidovizoso)

## Show your support

Give a ⭐️ if this project helped you!

## License

MIT
