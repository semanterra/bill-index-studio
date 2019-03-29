import * as React from "react";

import { storiesOf } from "@storybook/react";
import { wInfo } from "../../../utils";
// import { text, boolean } from "@storybook/addon-knobs/react";
import InputAvatar from './inputAvatar'

interface IState { val: string }
interface IProps {}
class AvatarStateHolder extends React.Component<IProps,IState> {
    constructor(props:IProps) {
        super(props)
        this.state = {
            val: 'xx',
        }
    }
    onChange= (t:string)=>
        this.setState({val:t})


    render() {
        return (<InputAvatar value={this.state.val} onChange={this.onChange}/>)
    }
}


(storiesOf("Components/InputAvatar", module) as any).add(
  "basic appBar",
  wInfo(`

  ### Usage
  ~~~js
  <InputAvatar/>
  ~~~`)(() => {
      let val = 'xx'
      function onChange(t:string) {
          val = t
      }
      return (<AvatarStateHolder/>)
  })
);
