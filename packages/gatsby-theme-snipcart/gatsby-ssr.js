import React from "react";

export function onRenderBody({ setHeadComponents, setPostBodyComponents }, pluginOptions) {
    let snipcart;
    if (pluginOptions && pluginOptions.snipCart_API_KEY) {
        snipcart = <div hidden id="snipcart" data-api-key={pluginOptions.snipCart_API_KEY}></div>;
    } else {
        snipcart = null;
        console.log('Invalid or no API_KEY provided. Check your key or make sure you passed it to the theme options.')
    }
    setHeadComponents([
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.css" />
  ]);
    setPostBodyComponents([
        {snipcart},
        <script src="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.js"></script>
    ]);
}