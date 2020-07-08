import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import { QUALITY_NAME, QUALTY_RATE } from "../utils/prices";

const { 
  FREELANCE,
  SOLUTION,
  ENTERPRISE,
  LEADING_TECH
 } = QUALITY_NAME;

export default function HostingForm({ setHourlyRate }) {
  const [rate, setRate] = React.useState(FREELANCE);

  const handleChange = (event) => {
    setHourlyRate(QUALTY_RATE[event.target.value])
    setRate(event.target.value);
  };

  return (
    <>
      <h2>Choose your quality</h2>
      <FormGroup>
        <FormControl component="fieldset">
          <h5>What kind of quality are you looking for?</h5>
          <RadioGroup
            aria-label="rate"
            name="rate"
            value={rate}
            onChange={handleChange}
          >
            <FormControlLabel
              value={FREELANCE}
              control={<Radio />}
              label="non-tech independent brands / companies"
            />
            <FormControlLabel
              value={SOLUTION}
              control={<Radio />}
              label="small tech companies and small digital agency"
            />
            <FormControlLabel
              value={ENTERPRISE}
              control={<Radio />}
              label="medium tech companies and medium digital agency (government projects / medical projects / banking projects)"
            />
            <FormControlLabel
              value={LEADING_TECH}
              control={<Radio />}
              label="Leading Tech Companies (Instagram / Lazada / Agoda / Netflix)"
            />
          </RadioGroup>
        </FormControl>
      </FormGroup>
    </>
  );
}
