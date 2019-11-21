/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { TiShoppingCart } from "react-icons/ti";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

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

export default ({ customCartIcon }) => {
  let Icon = customCartIcon ? (
    customCartIcon
  ) : (
    <TiShoppingCart
      sx={{
        height: "2em",
        width: "2em"
      }}
    />
  );

  return (
    <Container>
    <CartButton className="snipcart-checkout">
      {Icon}
      <Details>
      <span
        sx={{
          color: "black",
          fontWeight: "heading",
          marginTop: "0.7em"
        }}
        className="snipcart-items-count"
      ></span>
      <span
        sx={{
          color: "black",
          fontWeight: "heading",
          marginTop: "0.7em",
          marginBottom: "0.5em"
        }}
        className="snipcart-total-price"
      ></span>
      </Details>
    </CartButton>
    </Container>

  );
};
