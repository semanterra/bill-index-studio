import * as React from "react";

import { storiesOf } from "@storybook/react";
import { wInfo } from "../../../utils";
// import { text, boolean } from "@storybook/addon-knobs/react";
import ButtonAppBar from './appBar'

(storiesOf("Components/ButtonAppBar", module) as any).add(
  "basic appBar",
  wInfo(`

  ### Notes

  This is a ButtonAppBar!

  ### Usage
  ~~~js
  <ButtonAppBar/>
  ~~~`)(() => (
    <ButtonAppBar/>
  ))
);
