import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { FEATURE_NAMES, FUNCTIONAL_FEATURES } from "../utils/prices";

const {
  SET_UP_WEBSITE,
  SET_UP_MOBILE,
  AUTHENTICATION,
  LISTING,
  CHAT_3RD_PARTY,
  CHAT_CUSTOM,
  VIDEO,
  SOCIAL,
  LOCATION_TRACKING,
  ONLINE_PAYMENT,
  SUPPORT_SYSTEM,
  PDPA,
  CALCULATIONS_AND_FORM,
} = FEATURE_NAMES;

const calculatedHours = (state) =>
  FUNCTIONAL_FEATURES.filter((feature) => state[feature.name] === true)
    .map((feature) => feature.logic)
    .reduce((val, func) => func(val), { min: 0, max: 0 });

export default function FeatureForm({ setFeatureHours = () => {} }) {
  const [state, setState] = React.useState({
    [SET_UP_WEBSITE]: true,
    [SET_UP_MOBILE]: false,
    [AUTHENTICATION]: false,
    [LISTING]: false,
    [CHAT_3RD_PARTY]: false,
    [CHAT_CUSTOM]: false,
    [VIDEO]: false,
    [SOCIAL]: false,
    [LOCATION_TRACKING]: false,
    [ONLINE_PAYMENT]: false,
    [SUPPORT_SYSTEM]: false,
    [PDPA]: false,
    [CALCULATIONS_AND_FORM]: false,
  });

  const handleChange = (event) => {
    let newState = { state };
    if (
      event.target.name === SET_UP_WEBSITE &&
      state[SET_UP_MOBILE] &&
      event.target.checked
    ) {
      // setup website and mobile are mutaully exclusive
      newState = {
        ...state,
        [event.target.name]: event.target.checked,
        [SET_UP_MOBILE]: false,
      };
    } else if (
      event.target.name === SET_UP_MOBILE &&
      state[SET_UP_WEBSITE] &&
      event.target.checked
    ) {
      newState = {
        ...state,
        [event.target.name]: event.target.checked,
        [SET_UP_WEBSITE]: false,
      };
    } else if (
      event.target.name === CHAT_3RD_PARTY &&
      state[CHAT_CUSTOM] &&
      event.target.checked
    ) {
      // chat and chat custom are mutaully exclusive
      newState = {
        ...state,
        [event.target.name]: event.target.checked,
        [CHAT_CUSTOM]: false,
      };
    } else if (
      event.target.name === CHAT_CUSTOM &&
      state[CHAT_3RD_PARTY] &&
      event.target.checked
    ) {
      newState = {
        ...state,
        [event.target.name]: event.target.checked,
        [CHAT_3RD_PARTY]: false,
      };
    } else {
      newState = { ...state, [event.target.name]: event.target.checked };
    }
    setState(newState);
    const featureHours = calculatedHours(newState);
    setFeatureHours(featureHours);
  };

  return (
    <>
      <h2>Common Features</h2>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state[SET_UP_WEBSITE]}
              onChange={handleChange}
              name={SET_UP_WEBSITE}
            />
          }
          label="Is a website"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state[SET_UP_MOBILE]}
              onChange={handleChange}
              name={SET_UP_MOBILE}
            />
          }
          label="Is a mobile app"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state[AUTHENTICATION]}
              onChange={handleChange}
              name={AUTHENTICATION}
            />
          }
          label="Has authentication features"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state[LISTING]}
              onChange={handleChange}
              name={LISTING}
            />
          }
          label="Has listing features"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state[CHAT_3RD_PARTY]}
              onChange={handleChange}
              name={CHAT_3RD_PARTY}
            />
          }
          label="Has Chat feature, but willing to pay monthly"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state[CHAT_CUSTOM]}
              onChange={handleChange}
              name={CHAT_CUSTOM}
            />
          }
          label="Has Chat feature, but not willing to pay monthly"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state[VIDEO]}
              onChange={handleChange}
              name={VIDEO}
            />
          }
          label="Has video-related features"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state[SOCIAL]}
              onChange={handleChange}
              name={SOCIAL}
            />
          }
          label="Has social features such as reviews, comments, or user feeds"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state[LOCATION_TRACKING]}
              onChange={handleChange}
              name={LOCATION_TRACKING}
            />
          }
          label="has location tracking"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state[ONLINE_PAYMENT]}
              onChange={handleChange}
              name={ONLINE_PAYMENT}
            />
          }
          label="has online payment integrated"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state[SUPPORT_SYSTEM]}
              onChange={handleChange}
              name={SUPPORT_SYSTEM}
            />
          }
          label="has a support panel"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state[PDPA]}
              onChange={handleChange}
              name={PDPA}
            />
          }
          label="PDPA (required if using Advertising or Tracking)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state[CALCULATIONS_AND_FORM]}
              onChange={handleChange}
              name={CALCULATIONS_AND_FORM}
            />
          }
          label="Forms"
        />
      </FormGroup>
    </>
  );
}
