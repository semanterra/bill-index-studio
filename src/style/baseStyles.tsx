import { colors } from '@material-ui/core'
import { darken, fade, getContrastRatio, lighten } from '@material-ui/core/styles/colorManipulator'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import createPalette, { dark, light } from '@material-ui/core/styles/createPalette'
import createTypography, { TypographyOptions } from '@material-ui/core/styles/createTypography'
import * as React from 'react'
import { fw, fwNeuton } from './fontWeights'

// For 1.1rem or bigger, use lower contrast ratio
const bigTextColor = 'rgba(0,0,0,0.70)'

const primary1Color = colors.indigo['500']
// primary chosen to look white, but not bleed onto adjacent dark background
const darkForeground = 'rgba(255, 255, 255, .95)'

function getContrastText(hue: string) {
    if (getContrastRatio(hue, primary1Color) < 7) {
        return darkForeground
    }
    return light.text.primary
}


const ynPalette = createPalette({
    type: 'light',
    primary: colors.indigo,
    getContrastText,
    text: {
        secondary: colors.indigo['500']
    }
})


const typographyOptions: TypographyOptions = {fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',}
export const typography = createTypography(ynPalette, typographyOptions)
export const ynBaseTheme = createMuiTheme({palette: ynPalette, typography})

const darkPalette = createPalette({
    type: 'dark',
    background: {
        default: colors.indigo['500'],
        paper: colors.indigo['400'],
    },
    text: {
        ...dark.text,
        primary: darkForeground,
    },
    /*
        input: {
            ...dark.input,
            inputText: darkForeground,
        },
    */
    action: {
        ...dark.action,
        active: darkForeground,
    },
    getContrastText,


})

export const darkTypography = createTypography(darkPalette, typography)
export const ynDarkTheme = createMuiTheme({palette: darkPalette, typography: darkTypography})

const frameBackground = primary1Color
const frameButtonBackground = colors.indigo.A700

// for text, etc.
const frameForeground = light.text.primary

/* This is mostly (but not all!) obsolete. */
export const palette/*: IPalette*/ = {

    /*
        defaults from mui beta, add as neeted:
            use in place of "fade": tinyColor(colors.darkBlack).setAlpha(0.54),

             palette: {
             primary1Color     : _colors.cyan500,
             primary2Color     : _colors.cyan700,
             primary3Color     : _colors.grey400,
             accent1Color      : _colors.pinkA200,
             accent2Color      : _colors.grey100,
             accent3Color      : _colors.grey500,
             textColor         : _colors.darkBlack,
             secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
             alternateTextColor: _colors.white,
             canvasColor       : _colors.white,
             borderColor       : _colors.grey300,
             disabledColor     : (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
             pickerHeaderColor : _colors.cyan500,
             clockCircleColor  : (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
             shadowColor       : _colors.fullBlack
         }
     */
    canvasColor: '#fff',
    primary1Color: colors.cyan['500'],

    accent2Color: colors.grey['100'],
    accent3Color: colors.grey['500'],

    // add any local custom colors here.
    frameBackground,
    frameButtonBackground,
    frameForeground,
    frameDisabledForeground: '' + fade(frameForeground,0.54),
    frameDisabledBackground: '' + lighten(frameBackground, .1),
    // for popups, other emphatic stuff
    frameBackgroundKicker: '' + lighten(frameBackground,.1),
    // for hovers,
    frameForegroundKicker: '' + darken(frameForeground,.1),

    // This is the light grey that's the default for toolbars, etc.
    shade: colors.grey['200'],
    oddTableRow: colors.grey['200'],
    hoverBackground: '#e2e5f5',

    secondaryButtonBackground: '' + fade(primary1Color,0.8),

    yea: 'green',
    nay: '#DD2C00',

    reverseBackgroundColor: '#303030',
    reverseSelectedBackgroundColor: '#000',
    reverseSelectedColor: '#0000ff',
    reverseColor: '#ddddff',

    // FORMS
    formLabelColor: 'rgba(0,0,0,0.498)',
    floatingLabelColor: 'rgba(0,0,0,0.498)',

    pageTitle: '' + fade(primary1Color!,.6),
    modalHeader: '#F8E71C',

    disabledButtonBackground: colors.grey['700'],
    disabledButtonLabel: colors.grey['200'],
    textColor: 'rgba(0, 0, 0, 0.87)',
}


export const baseStyles = {

    // This is for putting multiple items centered on one row
    hAlign_center: {display: 'flex', justifyContent: 'center', width: '100%'},

    // Center with items stacked vertically
    hAlign_centerNoFlow: {display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'},
    hAlign_justify: {display: 'flex', justifyContent: 'space-between', width: '100%'},
    hAlign_space: {display: 'flex', justifyContent: 'space-around'},
    hAlign_spaceWrap: {display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'},
    hAlign_justifyWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%'
    },
    hAlign_left: {display: 'flex'},
    hAlign_leftWrap: {display: 'flex', flexWrap: 'wrap'},
    hAlign_leftWrapVertCenter: {display: 'flex', flexWrap: 'wrap', alignItems: 'center'},
    hAlign_right: {display: 'flex', justifyContent: 'flex-end'},
    hAlign_fullWidth: {width: '100%'},

    vAlign_justify: {
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
    },
    vAlign_fullHeight: {height: '100%'},
    vAlign_center: {height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'},

    flowAlign_spaced: {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'},

    bothAlign_centerCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bothAlign_full: {
        width: '100%', height: '100%'
    },

    form: {
        paddingLeft: 32,
        paddingRight: 32,
        paddingBottom: 16,
        width: '100%',
        boxSizing: 'border-box',

    },
    table_thead: {
        // ...(sizes.caption),
        display: 'block',
        color: colors.grey['500'],
        borderBottomWidth: 1,
        borderBottomColor: colors.grey['300'],
        borderBottomStyle: 'solid',
        boxSizing: 'border-box',
    },

    table_theadRow: {
        display: 'table-row', height: 56, verticalAlign: 'center'
    }
    ,
    table_tr: {
        display: 'table-row',
        height: 48,
        boxSizing: 'border-box',
    }
    ,
    table_trFlex: {
        display: 'flex',
        height: 48,
        boxSizing: 'border-box',
    },

    mapBoxTitle: {
        margin: 'auto',
        textAlign: 'center',
        borderBottom: '1 grey',
        fontWeight: fw._700,
    },

    textAnchor: {
        color: primary1Color,
        textDecoration: 'underline',
        cursor: 'pointer',
    },

    abovePaper: {
        fontFamily: 'Neuton, serif',
        fontWeight: fwNeuton.bold,
        fontSize: 20,
        color: palette.pageTitle,
        marginBottom: 8,
    },

    modalLabel: {
        fontFamily: 'Neuton, serif',
        fontWeight: fwNeuton.bold,
        fontSize: 20,
        color: palette.pageTitle,
    },

}

