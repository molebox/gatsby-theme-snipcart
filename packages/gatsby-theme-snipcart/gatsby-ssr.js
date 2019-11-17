// import React from "react";
const React = require("react")

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }, pluginOptions) => {
    console.log('.................HELLO.................');
    console.log({pluginOptions});
    // let snipcart;
    // if (pluginOptions && pluginOptions.SNIPCART_API_KEY) {
    //     snipcart = <div hidden id="snipcart" data-api-key={pluginOptions.SNIPCART_API_KEY}></div>;
    // } else {
    //     snipcart = null;
    //     console.log('Invalid or no API_KEY provided. Check your key or make sure you passed it to the theme options.')
    // }
    setHeadComponents([
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.css" />,
  ]);
    setPostBodyComponents([
        <div hidden id="snipcart" data-api-key={pluginOptions.SNIPCART_API_KEY}></div>,
        <script src="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.js"></script>,
    ]);
}