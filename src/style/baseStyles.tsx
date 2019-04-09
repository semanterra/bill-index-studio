import { colors, Typography } from '@material-ui/core'
import { darken, fade, getContrastRatio, lighten } from '@material-ui/core/styles/colorManipulator'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import createPalette, { dark, light, Palette } from '@material-ui/core/styles/createPalette'
import createTypography, { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { TypographyProps } from '@material-ui/core/Typography'
import { FontFamilyProperty, FontWeightAbsolute } from 'csstype'
import { FC, PropsWithChildren } from 'react'
import * as React from 'react'
import { fw, fwNeuton } from './fontWeights'
import {CSSProperties} from '@material-ui/styles/withStyles'

/******************
 * COMMONS INDEPENDENT OF BASE DECISIONS
 */


/**
 * COLOR
 */
type Color = string

/** DISTANCE */

type Px = number  // pixel
type Ratio = number

/** TYPE */

type Rem = number

/******************

BASE DECISIONS


 main palettes, fonts, font weight mapping


 ******************/

/** Typography */

const pxPerRem:Px = 16  // size of font in pixels at <html> element (base of rem units)

function makeTypoComponent(name: string, outerProps: TypographyProps): FC<TypographyProps> {
    const ret = function (props:PropsWithChildren<TypographyProps>) {
        const { children, ...tprops} = props
        const passedProps = { ...outerProps, ...tprops }
        return (<Typography {...passedProps}>{children}</Typography>)
    }
    ret.displayName = name
    return ret
}


/** Color */

// primary chosen to look white, but not bleed onto adjacent dark background
const lightForeground = colors.indigo['500']
const darkForeground: Color = 'rgba(255, 255, 255, .95)'

function getContrastTextColor(background: Color) {
    return (getContrastRatio(background, lightForeground) < 7) ? darkForeground : lightForeground
}


const lightPalette:Palette = createPalette({
    type: 'light',
    primary: colors.indigo,
    getContrastText: getContrastTextColor,
    text: {
        secondary: lightForeground
    }
})

const darkPalette: Palette = createPalette({
    type: 'dark',
    background: {
        default: colors.indigo['500'],
        paper: colors.indigo['400'],
    },
    text: {
        ...dark.text,
        primary: darkForeground,
    },
    action: {
        ...dark.action,
        active: darkForeground,
    },
    getContrastText: getContrastTextColor,
})


const mainFontFamily: FontFamilyProperty = '"IBM Plex Sans", "Helvetica", "Arial", "sans-serif"'
const altFontFamily: FontFamilyProperty = '"Aleo", "", "Bookman", "serif"'


const fontDefs = {
    plex: {
        fontFamily: '"IBM Plex Sans", "Helvetica", "Arial", "sans-serif"',
        weights:  {
            thin: 100,
            extraLight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
        }

    }
}

const fonts = {
    main: fontDefs.plex
    
}


function buildVariant(fontFamily: FontFamilyProperty, fontWeight:FontWeightAbsolute, fontSize:Rem, lineHeight:Ratio, letterSpacing: Ratio, casing: CSSProperties = {}) {
    return {
        fontFamily,
        fontWeight,
        fontSize,
        lineHeight,
        letterSpacing,
        ...casing,
    }
}

const caseAllCaps: CSSProperties = {
    textTransform: 'uppercase'
};

const variants = {
    h1: buildVariant(mainFontFamily, fonts.main.weights.extraLight, 96, 1, -1.5),
    h2: buildVariant(mainFontFamily, fonts.main.weights.light, 60, 1, -0.5),
    h3: buildVariant(mainFontFamily, fonts.main.weights.light, 48, 1.04, 0),
    h4: buildVariant(mainFontFamily, fonts.main.weights.regular, 34, 1.17, 0.25),
    h5: buildVariant(mainFontFamily, fonts.main.weights.medium, 24, 1.33, 0),
    h6: buildVariant(mainFontFamily, fonts.main.weights.medium, 20, 1.6, 0.15),
    subtitle1: buildVariant(mainFontFamily, fonts.main.weights.regular, 16, 1.75, 0.15),
    subtitle2: buildVariant(mainFontFamily, fonts.main.weights.medium, 14, 1.57, 0.1),
    body1: buildVariant(mainFontFamily, fonts.main.weights.regular, 16, 1.5, 0.15),
    body2: buildVariant(mainFontFamily, fonts.main.weights.regular, 14, 1.43, 0.15),
    button: buildVariant(mainFontFamily, fonts.main.weights.medium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(mainFontFamily, fonts.main.weights.regular, 12, 1.66, 0.4),
    overline: buildVariant(mainFontFamily, fonts.main.weights.regular, 12, 2.66, 1, caseAllCaps),
};


const typographyOptions: TypographyOptions = {
    htmlFontSize: pxPerRem,
    ...variants
}

export const lightTypography = createTypography(lightPalette, typographyOptions)
export const lightTheme = createMuiTheme({palette: lightPalette, typography: lightTypography})

export const darkTypography = createTypography(darkPalette, typographyOptions)
export const darkTheme = createMuiTheme({palette: darkPalette, typography: darkTypography})

/********************
 * COMMONS DEPENDENT ON BASE DECISIONS
 */

/*****************
 * SPECIFIC TO APPLICATION
 */

export const H1 =
    makeTypoComponent('H1', {variant:'h1', gutterBottom: true})
export const H2 =
    makeTypoComponent('H2', {variant:'h2', gutterBottom: true})
export const H3 =
    makeTypoComponent('H3', {variant:'h3', gutterBottom: true})
export const H4 =
    makeTypoComponent('H4', {variant:'h4', gutterBottom: true})
export const H5 =
    makeTypoComponent('H5', {variant:'h5', gutterBottom: true})
export const H6 =
    makeTypoComponent('H6', {variant:'h6', gutterBottom: true})



/** ALL GRIST FROM HERE TO END - bring upward to promote */

const frameBackground = '#000000'
const frameButtonBackground = colors.indigo.A700

// for text, etc.
const frameForeground = light.text.primary

/* This is mostly (but not all!) obsolete. */
export const palette/*: IPalette*/ = {

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

    secondaryButtonBackground: '' + fade(lightForeground,0.8),

    yea: 'green',
    nay: '#DD2C00',

    reverseBackgroundColor: '#303030',
    reverseSelectedBackgroundColor: '#000',
    reverseSelectedColor: '#0000ff',
    reverseColor: '#ddddff',

    // FORMS
    formLabelColor: 'rgba(0,0,0,0.498)',
    floatingLabelColor: 'rgba(0,0,0,0.498)',

    pageTitle: '' + fade(lightForeground!,.6),
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
        color: lightForeground,
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

