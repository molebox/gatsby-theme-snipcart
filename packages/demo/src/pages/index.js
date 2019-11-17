/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Cart } from "gatsby-theme-snipcart";
import Layout from "../components/Layout";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Container = styled.div`
  height: 110vh;
  // width: 100%;
  background: #262626;
`;

const Header = styled.header`
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // grid-template-rows: auto 1fr;
  grid-gap: 2em;
  margin: 3em;
`;

const Title = styled.h1`
  color: #011638;
  padding: 1em;
`;

const ProductCard = styled.div`
  padding: 1.5em;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  align-self: center;
`;

const Image = styled(Img)`
  max-width: 100%;
  max-height: 100%;

  margin: 0 auto;
  border-radius: 1em;
  padding: 1em;
`;

const Description = styled.h2`
  color: #d0d4da;
  font-size: 1.3em;
  margin: 1em;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;

const Price = styled.h3`
  color: #d0d4da;
  font-size: 1em;
  margin: 0.7em;
`;

const Index = () => {
  const products = useStaticQuery(query);
  const productsList = products.allSanityProduct.edges;

  return (
    <Layout>
      <Container>
        <Header
          sx={{
            backgroundColor: "lightGrey",
            fontFamily: "heading",
            fontWeight: "body",
            color: "black",
            letterSpacing: "text"
          }}
        >
          <Title>Hungry Bear Snipcart Shop</Title>
          <Cart />
        </Header>
        <Main>
          {productsList.map(({ node }) => (
            <ProductCard
              sx={{
                backgroundColor: "white"
              }}
            >
              <Description
                sx={{
                  fontFamily: "heading",
                  fontWeight: "body",
                  color: "black"
                }}
              >
                {node.blurb.en}
                <Price
                  sx={{
                    fontFamily: "heading",
                    fontWeight: "body",
                    color: "black"
                  }}
                >
                  ${node.defaultProductVariant.price}
                </Price>
              </Description>
              <ImageContainer>
                <Image
                  fluid={node.defaultProductVariant.images[0].asset.fluid}
                  alt={node.defaultProductVariant.title}
                />
              </ImageContainer>
              {/* <BuyButton /> */}
            </ProductCard>
          ))}
        </Main>
      </Container>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query SnipcartSanityQuery {
    allSanityProduct {
      edges {
        node {
          id
          slug {
            current
          }
          title
          blurb {
            en
          }
          defaultProductVariant {
            price
            title
            images {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
