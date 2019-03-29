interface FontWeights {
    [name: string]: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
}

// roboto fontweight names - these vary from family to family, but we'll use the roboto names everywhere
/*
 const fwRoboto: FontWeights = {
 thin     : 100,
 light    : 300,
 normal   : 400,
 medium   : 500,
 bold     : 700,
 ultraBold: 900,
 }// Roboto weight names: thin 100, light 300, normal 400, medium 500, bold 700, ultra-bold 900
 */

export const fwLato: FontWeights = {
    // 100      : 100,
    // 200      : 200,
    _300: 300, // used by mui
    _400: 400, // used by mui
    _500: 500, // used by mui
    // 600      : 600,
    _700: 700,

    /*  When uncommenting, add to index.html as well
        800      : 800,
        900      : 900,
        hairline : 100,
        thin     : 200,
    */
    light: 300, // used by mui
    normal: 400, // to make upward-compatible from Roboto; used by mui
    regular: 400, // used by mui
    medium: 500, // used by mui
    // semibold : 600,
    bold: 700,

    /*  When uncommenting, add to index.html as well
        heavy    : 800,
        ultraBold: 900, // to make upward-compatible from Roboto
        black    : 900,
    */
}
export const fw: typeof fwLato = fwLato

export const fwNeuton: FontWeights = {  // 200, 800 are also available
    _300: 300, // used by mui
    _400: 400, // used by mui
    _700: 700,

    light: 300, // used by mui
    regular: 400, // used by mui
    bold: 700,

}
