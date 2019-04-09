import { blue } from '@material-ui/core/colors'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { ThemeProvider } from '@material-ui/styles'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { addTheme } from '../../storybook/decorators'
import { ReadOnlyField } from './readOnlyField'

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});


storiesOf('Bill-Index-Studio/Widget', module)
    .addDecorator(addTheme)
    .add('ReadOnlyField', () => <ReadOnlyField/>);
