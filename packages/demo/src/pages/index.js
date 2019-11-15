/** @jsx jsx */

import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { BuyButton, Cart } from "gatsby-theme-snipcart";
import Layout from "../components/Layout";

const Container = styled.div`
  height: 95vh;
  width: 100vw;
  background: #d0d4da;
`;

const Header = styled.header`
  height: 5vh;
  width: 100vw;
  background: #b10f2e;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1.5em;
`;

const Main = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h1`
  color: #011638;
  padding: 1em;
`;

const ProductCard = styled.div`
  background: #011638;
  width: 400px;
  height: 600px;
  padding: 1.5em;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  align-self: center;

  border: 1px solid white;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;

  margin: 0 auto;
  border-radius: 1em;
  padding: 1em;
`;

const Description = styled.h2`
  color: #d0d4da;
  font-size: 1.8em;
`;

const Price = styled.h3`
  color: #d0d4da;
  font-size: 1.5em;
`;

const Index = () => {
  return (
    <Layout>
      <Container>
        <Header>
          <Title>Hungry Bear Snipcart Shop</Title>
          <Cart />
        </Header>
        <Main>
          <ProductCard>
            <ImageContainer>
              <Image />
            </ImageContainer>
            <Description>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper chantey doubloon starboard grog black jack gangway
              rutters.
            </Description>
            <Price>$25</Price>
            <BuyButton />
          </ProductCard>
        </Main>
      </Container>
    </Layout>
  );
};

export default Index;
