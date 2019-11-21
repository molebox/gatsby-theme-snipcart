/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { AiOutlineShopping } from "react-icons/ai";

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

const CartBox = styled.div`
  width: 4em;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ({ customCartIcon }) => {
  let Icon = customCartIcon ? (
    customCartIcon
  ) : (
    <CartBox
      sx={{
        backgroundColor: "black"
      }}
    >
      <AiOutlineShopping
        sx={{
          height: "2.7em",
          width: "2.7em",
          color: "white",
          marginBottom: "0.5em"
        }}
      />
    </CartBox>
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
          {/* <span
        sx={{
          color: "black",
          fontWeight: "heading",
          marginTop: "0.7em",
          marginBottom: "0.5em",
          marginLeft: '1em'
        }}
        className="snipcart-total-price"
      ></span> */}
        </Details>
      </CartButton>
    </Container>
  );
};
