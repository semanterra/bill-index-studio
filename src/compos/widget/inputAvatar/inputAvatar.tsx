import Typography from '@material-ui/core/Typography'
import { ChangeEvent } from 'react'
import * as React from 'react';
// import PropTypes from 'prop-types';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { Consumer } from '../../../util/functional'
// import Typography from '@material-ui/core/Typography';

const styles = createStyles({
    root : {
        display     : 'inline-block',
        background  : 'pink',
        borderRadius: '50%',
        height      : 56, width: 56,

    },
    input: {
        width  : 40, font: 'inherit', background: 'inherit', border: 'inherit',
        display: 'block',
        margin : '0 auto',
        textAlign: 'center',
        lineHeight: '56px',
    }
})

interface IProps extends  WithStyles<typeof styles> {
    value: string
    onChange: Consumer<string>
}


function InputAvatar(props: IProps) {
    const { classes } = props;
    function onChangeEvent(e:ChangeEvent<any>) {
        props.onChange(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div className={classes.root}>
            <Typography variant="title" color="inherit">
                <input type="text" className={classes.input} value={props.value} onChange={onChangeEvent}/>
            </Typography>
        </div>
    );
}

export default withStyles(styles)(InputAvatar);
