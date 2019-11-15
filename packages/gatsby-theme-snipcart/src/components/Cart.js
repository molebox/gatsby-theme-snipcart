/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import CartSvg from "../assets/shopping-cart.svg";

const CartButton = styled.button`
  background: none;
  border: 0;
  color: inherit;
  /* cursor: default; */
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  -webkit-user-select: none; /* for button */
  -moz-user-select: none;
  -ms-user-select: none;
`;

export default ({ iconSrc, height, width }) => {
  const PriceAndCount = (
    <>
      <span
        sx={{
          color: "black",
          fontWeight: 'heading',
          marginTop: "0.7em"
        }}
        className="snipcart-items-count"
      ></span>
      <span
        sx={{
          color: "black",
          fontWeight: 'heading',
          marginTop: "0.7em",
          marginBottom: "0.5em"
        }}
        className="snipcart-total-price"
      ></span>
    </>
  );

  let Icon = iconSrc ? (
    <img
      sx={{
        height: { height },
        width: { width }
      }}
      src={iconSrc}
    />
  ) : (
    <CartSvg
      sx={{
        height: "2em",
        width: "2em"
      }}
    />
  );

  return (
    <CartButton className="snipcart-checkout">
      {Icon}
      {PriceAndCount}
    </CartButton>
  );
};
