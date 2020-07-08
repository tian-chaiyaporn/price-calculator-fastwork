import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  NON_FUNCTIONAL_FEATURE_NAMES,
  NONFUNCTIONAL_FEATURES,
} from "../utils/prices";

const { DESIGN, IMAGE_OPTIMIZATION, SEO } = NON_FUNCTIONAL_FEATURE_NAMES;

const calculatedHours = (state, featureHours) =>
  NONFUNCTIONAL_FEATURES.filter((feature) => state[feature.name] === true)
    .map((feature) => feature.logic)
    .reduce((val, func) => func(featureHours, val), { min: 0, max: 0 });

export default function NonfunctionalFeatureForm({
  featureHours,
  setNonfunctionalHours,
}) {
  const [state, setState] = React.useState({
    [DESIGN]: false,
    [IMAGE_OPTIMIZATION]: false,
    [SEO]: false,
  });

  const useEffectFunction = (state, setNonfunctionalHours) => {
    const newHours = calculatedHours(state, featureHours);
    setNonfunctionalHours(newHours);
  };

  React.useEffect(useEffectFunction.bind(this, state, setNonfunctionalHours), [
    featureHours,
  ]);

  const handleChange = (event) => {
    const newState = { ...state, [event.target.name]: event.target.checked };
    setState(newState);
    const newHours = calculatedHours(newState, featureHours);
    setNonfunctionalHours(newHours);
  };

  return (
    <>
      <h2>Common Nonfunctional Features</h2>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state[DESIGN]}
              onChange={handleChange}
              name={DESIGN}
            />
          }
          label="Do you want custom design?"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state[IMAGE_OPTIMIZATION]}
              onChange={handleChange}
              name={IMAGE_OPTIMIZATION}
            />
          }
          label="Do you need advanced image optimization? (recommended for image heavy websites)"
        />
        <FormControlLabel
          control={
            <Checkbox checked={state[SEO]} onChange={handleChange} name={SEO} />
          }
          label="Do you need advanced SEO optimization?"
        />
      </FormGroup>
    </>
  );
}
