import { MuiThemeProvider } from '@material-ui/core'
import { ReactNode } from 'react'
import * as React from "react";

import { storiesOf } from "@storybook/react";
import { lightTheme } from '../../../style/baseStyles'
import { wInfo } from "../../../utils";
// import { text, boolean } from "@storybook/addon-knobs/react";
import {MultiSelect} from './multiSelect'

(storiesOf("Components/Widgets/multiSelect", module) as any)
    .addDecorator((story:()=>ReactNode)=>(<MuiThemeProvider theme={lightTheme}>{story()}</MuiThemeProvider>))
    .add(
  "state selector",
  wInfo(`

  ### Notes

  This is MultiSelect!

  ### Usage
  ~~~js
  <MultiSelect/>
  ~~~`)(() => (
    <MultiSelect/>
  ))
);
