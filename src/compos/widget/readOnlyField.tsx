import { Divider, Input, TextField, Theme } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { createStyles, makeStyles } from '@material-ui/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import * as React from 'react'
const useStyles = makeStyles((theme:Theme) =>({
    root      : {
        flexGrow: 1,
    },
    flex      : {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft : -12,
        marginRight: 20,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
}))

export function ReadOnlyField() {
    const c = useStyles()
    return (
        <div>
            <TextField
        id="standard-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        className={c.textField}
        margin="normal"
        InputProps={{
            readOnly: true,
            disableUnderline: true
        }}
    />
            <Input
                id="standard-read-only-input"
                defaultValue="Hello World"
                className={c.textField}
                    readOnly
                    disableUnderline
            />

        </div>
    )
}
