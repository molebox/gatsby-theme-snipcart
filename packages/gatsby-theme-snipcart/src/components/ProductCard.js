/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  background: #f1f1f1;
  margin-bottom: 2rem;
  padding: 2rem;
  -webkit-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
  border-radius: 0.4em;

  width: 800px;

  & > div {
    padding: 1rem;
  }

  & h4 {
    margin-bottom: 2rem;
  }

  @media (max-width: 700px) {
    display: block;
  }
`;

const Image = styled(Img)`
  max-width: 100%;
  max-height: 100%;
  width: 80%;
  border-radius: 0.4em;
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  -webkit-animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
  animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

  & > div > h4 {
    font-size: 1.5em;
    @media (max-width: 700px) {
      font-size: 1.5rem;
    }
  }

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Button = styled.button`
  padding: 10px;
  display: inline-block;
  outline: 0;
  border: 0;
  margin: -1px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
  cursor: pointer;
`;

// const PreviewButton = styled.button`
// 	background: transparent;
// 	border: none;
// 	padding: 0;
// 	margin: 0;
// 	text-decoration: none;
// 	width: 100%;

// 	&:focus {
// 		outline: 0;
// 	}

// 	-webkit-animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
// 	animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

// 	@-webkit-keyframes fade-in {
// 		0% {
// 			opacity: 0;
// 		}
// 		100% {
// 			opacity: 1;
// 		}
// 	}
// 	@keyframes fade-in {
// 		0% {
// 			opacity: 0;
// 		}
// 		100% {
// 			opacity: 1;
// 		}
// 	}
// `;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;

  -webkit-animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
  animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

  & > h3 {
    font-size: 1em;
    @media (max-width: 700px) {
      font-size: 0.7em;
    }
  }

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

// const Card = styled.div`
//   width: 380px;
//   // position: relative;
//   margin: 50px auto;
//   border: solid black 1px;
//   box-shadow: 1px 5px 15px 6px hsla(0, 0%, 0%, 0.21)
// `;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  padding: 50px;
`;

// const Image = styled(Img)`
//   max-width: 100%;
//   max-height: 100%;

//   width: 90%;
// `;
// const Details = styled.div`
//   padding: 30px;

//   position: relative;
//   height: 70%;
//   width: 100%;
//   background: #e0efe3;

//   &::before {
//     content: "";
//     display: block;
//     position: absolute;
//     border-radius: 100% 50%;
//     width: 340px;
//     height: 80px;
//     background-color: white;
//     right: -5px;
//     top: 40px;
//   }

//   &::after {
//     content: "";
//     display: block;
//     position: absolute;
//     border-radius: 100% 50%;
//     width: 300px;
//     height: 70px;
//     background-color: #e0efe3;
//     left: 0;
//     top: 27px;
//   }
// `;

// const Category = styled.span`
//   display: block;
//   font-size: 12px;
//   font-weight: 700;
//   text-transform: uppercase;
//   color: #ccc;
//   margin-bottom: 18px;
// `;

// const Title = styled.h4`
//   font-weight: 500;
//   display: block;
//   margin-bottom: 18px;
//   text-transform: uppercase;
//   color: #363636;
//   transition: 0.3s;

//   &:hover {
//     color: #fbb72c;
//   }
// `;

// const Description = styled.p`
//   font-size: 15px;
//   line-height: 22px;
//   margin-bottom: 18px;
//   color: #999;
// `;

// const PriceContainer = styled.div`
//   overflow: hidden;
//   border-top: 1px solid #eee;
//   padding-top: 20px;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
// `;

// const Price = styled.div`
//   font-size: 2em;
//   font-weight: 600;

// `;

// const AddToCart = styled.div`
//     text-transform: uppercase;
//     text-decoration: none;
//     background: #ffffff;
//     padding: 20px;
//     border: 2px solid #494949;
//     display: inline-block;
//     transition: all 0.4s ease 0s;
//     width: 140px;
//     height: 50px;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

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
  return (
    <Card>
      <ImageContainer>
        <Image className="img" fluid={imageSrc} alt={title} />
      </ImageContainer>
      <Description>
        <div>
          <h4
            sx={{
              color: "text",
              fontFamily: "heading",
              fontWeight: "heading",
              lineHeight: "body",
              letterSpacing: "body",
              borderBottom: "solid 0.1em",
              borderColor: "text",
              padding: "0.5em"
            }}
          >
            {itemTitle}
          </h4>
          <h3
            sx={{
              color: "text",
              fontFamily: "body",
              fontWeight: "heading",
              lineHeight: "body",
              letterSpacing: "body"
            }}
          >
            {description}
          </h3>
        </div>
      </Description>
      <PriceContainer>
        <h3
          sx={{
            color: "text",
            fontFamily: "body",
            fontWeight: "bold",
            fontSize: "1.2rem",
            lineHeight: "body",
            letterSpacing: "body"
          }}
        >
          Price: {priceSymbol}
          {price}
        </h3>
      </PriceContainer>
      <Button
        sx={{
          backgroundColor: "TERRA_COTTA",
          ":hover": {
            backgroundColor: "CADET_BLUE",
            transition: "all .4s ease-in-out"
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
        {text}
      </Button>
    </Card>
    // <Card sx={{
    //     backgroundColor: 'TERRA_COTTA'
    // }}>
    //   <ImageContainer >
    //     <Image fluid={imageSrc} alt={title} />
    //   </ImageContainer>
    //   <Details>
    //       {category ? (<Category>{category}</Category>) : null}
    //     <Title>{title}</Title>
    //     <Description>{description}</Description>
    //     <PriceContainer>
    //         <Price sx={{
    //             fontFamily: 'heading',
    //             fontWeight: 'body'
    //         }}>{priceSymbol}{price}</Price>
    //       <AddToCart
    //       sx={{
    //           fontFamily: 'heading',
    //           fontWeight: 'bold',
    //           color: 'black',
    //           ":hover":{
    //               backgroundColor: '#2083D9',
    //               fontWeight: 'body',
    //               borderColor: 'black',
    //               transition: 'all 0.4s ease 0s'
    //           }
    //       }}
    //         className="snipcart-add-item"
    //         data-item-id={itemId}
    //         data-item-price={price}
    //         data-item-image={image}
    //         data-item-name={itemTitle}
    //         data-item-description={description}
    //         data-item-url={itemUrl + itemPath}
    //         data-item-stackable={isStackable}
    //         data-item-has-taxes-included={isTaxIncluded}
    //         {...customFieldProps}
    //       >
    //         {buyButtonText}
    //       </AddToCart>
    //     </PriceContainer>
    //   </Details>
    // </Card>
  );
};
