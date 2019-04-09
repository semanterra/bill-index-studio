import React from 'react'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { lightTheme } from '../style/baseStyles'

const theme = lightTheme

export function addTheme(storyFn) {
    return (<ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>)
}
