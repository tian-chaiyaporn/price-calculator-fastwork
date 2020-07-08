import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import { HOSTING_NAME, _HOSTING } from "../utils/prices";

const { HOSTING } = HOSTING_NAME;

export default function HostingForm({ setHostingHours }) {
  const [usersPerMonth, setUsersPerMonth] = React.useState(5000);
  const [state, setState] = React.useState({ [HOSTING]: false });

  const handleChange = (event) => {
    if (state[HOSTING]) {
      const currentHours = _HOSTING.logic(event.target.value);
      setHostingHours(currentHours);
    }
    setUsersPerMonth(event.target.value);
  };

  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (!event.target.checked) {
      setUsersPerMonth(0);
      setHostingHours({ min: 0, max: 0 });
    } else {
      const currentHours = _HOSTING.logic(usersPerMonth);
      setHostingHours(currentHours);
    }
  };

  return (
    <>
      <h2>Hosting</h2>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state[HOSTING]}
              onChange={handleChangeCheckbox}
              name={HOSTING}
            />
          }
          label="Do you need hosting?"
        />
        <FormControl component="fieldset">
          <h5>How many users are you expecting per month?</h5>
          <RadioGroup
            aria-label="users per month"
            name="usersPerMonth"
            value={usersPerMonth}
            onChange={handleChange}
          >
            <FormControlLabel value="5000" control={<Radio />} label="0-5000" />
            <FormControlLabel
              value="10000"
              control={<Radio />}
              label="5,000-10,000"
            />
            <FormControlLabel
              value="100000"
              control={<Radio />}
              label="10,000-100,000"
            />
            <FormControlLabel
              value="1000000"
              control={<Radio />}
              label="100,000-1,000,000"
            />
            <FormControlLabel
              value="10000000"
              control={<Radio />}
              label="1,000,000-10,000,000"
            />
            <FormControlLabel
              value="100000000"
              control={<Radio />}
              label="10,000,000++"
            />
          </RadioGroup>
        </FormControl>
      </FormGroup>
    </>
  );
}
