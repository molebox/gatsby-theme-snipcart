/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Cart, ProductCard } from "gatsby-theme-snipcart";
import Layout from "../components/Layout";
import { useStaticQuery } from "gatsby";
// import Img from "gatsby-image";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 1px 1px 10px 3px hsla(0, 0%, 0%, 0.21);
`;

const Main = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  grid-gap: 2em;
  margin: 3em;

  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // margin: 2em auto;
  // align-items: center;
`;

const Title = styled.h1`
  padding: 1em;
`;

// const ProductCard = styled.div`
//   padding: 1.5em;
//   height: fit-content;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ImageContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   align-self: center;
// `;

// const Image = styled(Img)`
//   max-width: 100%;
//   max-height: 100%;

//   margin: 0 auto;
//   border-radius: 1em;
//   padding: 1em;
// `;

// const Description = styled.h2`
//   color: #d0d4da;
//   font-size: 1.3em;
//   margin: 1em;

//   display: flex;
//   justify-content: flex-start;
//   flex-direction: column;
//   align-items: flex-start;
// `;

// const Price = styled.h3`
//   color: #d0d4da;
//   font-size: 1em;
//   margin: 0.7em;
// `;

const Index = () => {
  const products = useStaticQuery(query);
  const productsList = products.allSanityProduct.edges;

  return (
    <Layout>
      <Container
        sx={{
          backgroundColor: "CAMBRIDGE_BLUE"
        }}
      >
        <Header
          sx={{
            backgroundColor: "PLATINUM",
            fontFamily: "heading",
            fontWeight: "body",
            color: "black",
            letterSpacing: "text"
          }}
        >
          <Title>gatsby-theme-snipcart</Title>
          <Cart />
        </Header>
        <Main>
          {productsList.map(({ node }) => (
            <ProductCard
              key={node.title}
              imageSrc={node.defaultProductVariant.images[0].asset.fluid}
              title={node.defaultProductVariant.title}
              description={node.blurb.en}
              price={node.defaultProductVariant.price}
              priceSymbol="$"
              buyButtonText="Purchase"
              itemId={node.id}
              text="Buy Now"
              image={node.defaultProductVariant.images[0].asset.src}
              itemTitle={node.title}
              itemUrl="https://localhost:8000"
              itemPath="/"
              isStackable={true}
              isTaxIncluded={true}
            />
            // <ProductCard
            //   sx={{
            //     backgroundColor: "white"
            //   }}
            // >
            //   <Description
            //     sx={{
            //       fontFamily: "heading",
            //       fontWeight: "body",
            //       color: "black"
            //     }}
            //   >
            //     {node.blurb.en}
            //     <Price
            //       sx={{
            //         fontFamily: "heading",
            //         fontWeight: "body",
            //         color: "black"
            //       }}
            //     >
            //       ${node.defaultProductVariant.price}
            //     </Price>
            //   </Description>
            //   <ImageContainer>
            //     <Image
            //       fluid={node.defaultProductVariant.images[0].asset.fluid}
            //       alt={node.defaultProductVariant.title}
            //     />
            //   </ImageContainer>
            //   <BuyButton
            //     itemId={node.id}
            //     text="Buy Now"
            //     itemPrice={25.00}
            //     image={node.defaultProductVariant.images[0].asset.src}
            //     itemTitle={node.title}
            //     itemDescription={node.blurb.en}
            //     itemUrl="https://localhost:8001"
            //     itemPath="/#/"
            //     isStackable={true}
            //     isTaxIncluded={true}
            //   />
            // </ProductCard>
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
                  src
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
