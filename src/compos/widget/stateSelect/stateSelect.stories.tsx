import { MuiThemeProvider } from '@material-ui/core'
import { ReactNode } from 'react'
import * as React from "react";

import { storiesOf } from "@storybook/react";
import { ynBaseTheme } from '../../../style/baseStyles'
import { wInfo } from "../../../utils";
// import { text, boolean } from "@storybook/addon-knobs/react";
import {StateSelect} from './stateSelect'

(storiesOf("Components/Widgets/stateSelect", module) as any)
    .addDecorator((story:()=>ReactNode)=>(<MuiThemeProvider theme={ynBaseTheme}>{story()}</MuiThemeProvider>))
    .add(
  "state selector",
  wInfo(`

  ### Notes

  This is StateSelect!

  ### Usage
  ~~~js
  <StateSelect/>
  ~~~`)(() => (
    <StateSelect/>
  ))
);
