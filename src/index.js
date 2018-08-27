import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Favorite from '@material-ui/icons/Favorite';
import Button from 'components/CustomButtons/Button.jsx';

import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";

import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import Badge from 'components/Badge/Badge.jsx';

import "assets/scss/material-kit-react.css?v=1.2.0";


ReactDOM.render(
  <div>
  <CustomDropdown
    buttonText="Regular"
    dropdownList={[
      "Action",
      "Another action",
      "Something else here",
      {divider: true},
      "Separated link",
      {divider: true},
      "One more separated link",
    ]}
  />
</div>

,
  document.getElementById("root")
);
