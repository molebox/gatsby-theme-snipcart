import React from "react";
import { Global, css } from "@emotion/core";

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          scroll-behavior: smooth;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }
      `}
    />
    {children}
  </>
);

export default Layout;
