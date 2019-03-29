import * as React from 'react'
// export { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';

export {React}

export {baseStyles, palette} from '../style/baseStyles' // for re-import


/* BOILERPLATE FOR NEW COMPONENTS

import { React, createStyles, WithStyles, withStyles, YnPureComponent } from '../../ynComponent';

const styles = createStyles({
    root : {
    },
})

interface IProps extends WithStyles<typeof styles> {
}
interface IState {}

class ${NAME}V extends YnPureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props)
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
            </div>
        )
    }
}

export const ${NAME} = withStyles(styles)(StateSelectV);

 */

export class YnImpureComponent<P,S> extends React.Component<P, S> {

    constructor(props: P) {
        super(props)
    }
}
export abstract class YnPureComponent<P,S={}> extends React.PureComponent<P, S> {

    constructor(props: P) {
        super(props)
    }
}


export interface YnDomEvent<T> {
    target: { value: T}
}

// takes a simple onChange handler, returns one to use with browser events, like Material-UI wants
export function eventPeeler<T>(onChange:(value:T)=>void){
    return (event: YnDomEvent<T>) =>onChange(event.target.value)
}

