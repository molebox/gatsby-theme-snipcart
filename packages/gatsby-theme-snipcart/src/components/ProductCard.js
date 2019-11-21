/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const Card = styled.div`
  width: 380px;
  // position: relative;
  box-shadow: 3px 8px 36px 4px hsla(0, 0%, 0%, 0.35);
  margin: 50px auto;
  background: #fafafa;
  border: solid black 1px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  padding: 50px;
  background: #f0f0f0;
`;

const Image = styled(Img)`
  max-width: 100%;
  max-height: 100%;

  width: 90%;
`;
const Details = styled.div`
  padding: 30px;
`;

const Category = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ccc;
  margin-bottom: 18px;
`;

const Title = styled.h4`
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: #363636;
  transition: 0.3s;

  &:hover {
    color: #fbb72c;
  }
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 18px;
  color: #999;
`;

const PriceContainer = styled.div`
  overflow: hidden;
  border-top: 1px solid #eee;
  padding-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Price = styled.div`
  font-size: 2em;
  font-weight: 600;
  
`;

const AddToCart = styled.div`
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 20px;
    border: 2px solid #494949;
    display: inline-block;
    transition: all 0.4s ease 0s;
    width: 140px;
    height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default ({
  imageSrc,
  category,
  title,
  description,
  price,
  priceSymbol,
  buyButtonText,
  itemId,
  text,
  image,
  itemTitle,
  itemUrl,
  itemPath,
  isStackable,
  isTaxIncluded,
  ...customFieldProps
}) => {
    console.log('PROPS: ', imageSrc);
  return (
    <Card>
      <ImageContainer>
        <Image fluid={imageSrc} alt={title} />
      </ImageContainer>
      <Details>
          {category ? (<Category>{category}</Category>) : null}
        <Title>{title}</Title>
        <Description>{description}</Description>
        <PriceContainer>
            <Price sx={{
                fontFamily: 'heading',
                fontWeight: 'body'
            }}>{priceSymbol}{price}</Price>
          <AddToCart
          sx={{
              fontFamily: 'heading',
              fontWeight: 'bold',
              color: 'black',
              ":hover":{
                  backgroundColor: '#2083D9',
                  fontWeight: 'body',
                  borderColor: 'black',
                  transition: 'all 0.4s ease 0s'
              }
          }}
            className="snipcart-add-item"
            data-item-id={itemId}
            data-item-price={price}
            data-item-image={image}
            data-item-name={itemTitle}
            data-item-description={description}
            data-item-url={itemUrl + itemPath}
            data-item-stackable={isStackable}
            data-item-has-taxes-included={isTaxIncluded}
            {...customFieldProps}
          >
            {buyButtonText}
          </AddToCart>
        </PriceContainer>
      </Details>
    </Card>
  );
};
