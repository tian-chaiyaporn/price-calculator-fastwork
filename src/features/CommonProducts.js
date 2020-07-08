import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import { COMMON_PRODUCT_NAME, COMMON_PRODUCT_FEATURES } from "../utils/prices";

const {
  INFORMATION,
  ECOMMERCE,
  SERVICE_LISTING,
  REALTIME_DELIVERY,
  OTHERS,
  WORDPRESS,
  CUSTOM_DESIGN,
  CUSTOM_WEBSITE,
  MOBILE_APPLICATION,
} = COMMON_PRODUCT_NAME;

const TechnologyForm = ({ technology, handleChangeTechnology }) => {
  return (
    <div style={{ marginLeft: "50px" }}>
      <RadioGroup
        row
        aria-label="technology"
        name="technology"
        value={technology}
        onChange={handleChangeTechnology}
      >
        <FormControlLabel
          value={WORDPRESS}
          control={<Radio />}
          label="Wordpress"
        />
        <FormControlLabel
          value={CUSTOM_WEBSITE}
          control={<Radio />}
          label="Custom Website"
        />
        <FormControlLabel
          value={MOBILE_APPLICATION}
          control={<Radio />}
          label="Mobile Application"
        />
      </RadioGroup>
    </div>
  );
};

export default function CommonProductForm({
  setIsCommonProduct,
  setProductHours,
  isCommonProduct,
}) {
  const [product, setProduct] = React.useState("");
  const [technology, setTechnology] = React.useState("");
  const [state, setState] = React.useState({ [CUSTOM_DESIGN]: false });

  const handleChangeTechnology = (event) => {
    if (event.target.value !== "") {
      const currentHours = COMMON_PRODUCT_FEATURES[product].logic(
        event.target.value,
        state[CUSTOM_DESIGN]
      );
      setProductHours(currentHours);
    }
    setTechnology(event.target.value);
  };

  const handleChangeProduct = (event) => {
    if (event.target.value !== OTHERS) {
      const currentHours = COMMON_PRODUCT_FEATURES[event.target.value].logic(
        technology,
        state[CUSTOM_DESIGN]
      );
      setProductHours(currentHours);
      setIsCommonProduct(true);
    }
    if (event.target.value !== REALTIME_DELIVERY) {
      setProductHours({ min: 0, max: 0 });
    }
    if (
      event.target.value === OTHERS &&
      event.target.value !== REALTIME_DELIVERY
    ) {
      setIsCommonProduct(false);
      setState({ ...state, CUSTOM_DESIGN: false });
    }
    setProduct(event.target.value);
    setTechnology("");
  };

  const handleChangeCheckbox = (event) => {
    if (product === OTHERS) {
      return;
    }
    if (product !== "") {
      const currentHours = COMMON_PRODUCT_FEATURES[product].logic(
        technology,
        event.target.checked
      );
      setProductHours(currentHours);
    }
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <h2>Common Products</h2>
      <FormGroup>
        <FormControl component="fieldset">
          <h5>What are you looking for?</h5>
          <RadioGroup
            aria-label="product"
            name="product"
            value={product}
            onChange={handleChangeProduct}
          >
            <FormControlLabel
              value={INFORMATION}
              control={<Radio />}
              label="Information"
            />
            {product === INFORMATION && (
              <TechnologyForm
                technology={technology}
                handleChangeTechnology={handleChangeTechnology}
              />
            )}
            <FormControlLabel
              value={ECOMMERCE}
              control={<Radio />}
              label="E-commerce"
            />
            {product === ECOMMERCE && (
              <TechnologyForm
                technology={technology}
                handleChangeTechnology={handleChangeTechnology}
              />
            )}
            <FormControlLabel
              value={SERVICE_LISTING}
              control={<Radio />}
              label="Service Listing"
            />
            {product === SERVICE_LISTING && (
              <TechnologyForm
                technology={technology}
                handleChangeTechnology={handleChangeTechnology}
              />
            )}
            <FormControlLabel
              value={REALTIME_DELIVERY}
              control={<Radio />}
              label="Realtime Delivery"
            />
            <FormControlLabel
              value={OTHERS}
              control={<Radio />}
              label="Others"
            />
          </RadioGroup>
          {isCommonProduct && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={state[CUSTOM_DESIGN]}
                  onChange={handleChangeCheckbox}
                  name={CUSTOM_DESIGN}
                />
              }
              label="Do you want custom design?"
            />
          )}
        </FormControl>
      </FormGroup>
    </>
  );
}
