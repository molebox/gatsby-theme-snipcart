/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const Button = styled.button`
     display:inline-block;
     padding:0.35em 1.2em;
     margin:0 0.3em 0.3em 0;
     border-radius:0.12em;
     box-sizing: border-box;
     text-align:center;
     transition: all 0.2s;

    @media all and (max-width:30em){
         & {
          display:block;
          margin:0.4em auto;
         }
`;

/**
 * A buy button for snipcart, will open a secure cart to complete purchase
 *
 * @param {string} itemId - The unique ID of the product.
 * @param {string} text - The text to be shown in the button.
 * @param {number} itemPrice - The price of the product. Note that you must use a . as decimal separator.
 * @param {image} image - The URL of the product image.
 * @param {string} itemTitle - The title of the product.
 * @param {string} itemDescription - The short description of the product.
 * @param {string} itemUrl - The URL of the product, this must be the URL where the buy button will be located.
 * @param {string} itemPath - The path/page of the product. Added to the itemUrl
 * @param {boolean} isStackable - When you set this attribute to false, adding the same product to the cart will result in two distinct items in the cart, instead of simply increasing the quantity.
 * @param {*} customFieldProps - Used for adding custom fields to the cart -
 * @example See README for more detailed options. Here are a few:
 *
 *  'For a dropdown select of options'
 *  data-item-custom1-name="Frame color"
 *  data-item-custom1-options="Black|Brown|Gold">
 *
 *  'The same but with price differences between the options'
 *  data-item-custom1-name="Frame color"
 *  data-item-custom1-options="Black|Brown[+100.00]|Gold[+300.00]">
 *
 *  'For a standard textbox'
 *  data-item-custom1-name="Gift note">
 *
 *  'For categories'
 *  data-item-categories="cat1, cat2, cat3"
 *
 */
const BuyButton = ({
  itemId,
  text,
  itemPrice,
  image,
  itemTitle,
  itemDescription,
  itemUrl,
  itemPath,
  isStackable,
  ...customFieldProps
}) => {
  return (
    <Button
      sx={{
        fontFamily: "body",
        fontWeight: "heading",
        border: "0.1em solid",
        borderColor: "black",
        color: "white",
        ":hover": {
          color: "lightGrey",
          backgroundColor: "black"
        }
      }}
      className="snipcart-add-item"
      data-item-id={itemId}
      data-item-price={itemPrice}
      data-item-image={image}
      data-item-name={itemTitle}
      data-item-description={itemDescription}
      data-item-url={itemUrl + itemPath}
      data-item-stackabl={isStackable}
      {...customFieldProps}
    >
      {text}
    </Button>
  );
};

export default BuyButton;
