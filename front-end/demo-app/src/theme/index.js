import { createTheme } from '@material-ui/core/styles';


const fontWeight = {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemi: 600,
    fontWeightBold: 700,
};

function spacing(factor) {
    const width = window.innerWidth;
    if (width <= 960 || width >= 1440) {
        if (width >= 1920) {
            return 8.5 * factor;
        }
        return 8 * factor;
    } else {
        return ((width / 180) * factor);
    }
}

const
    theme = createTheme({
        appHeaderHeight: `${spacing(10)}px`,
        drawerWidth: `${spacing(28.875)}px`,
        showDrawerBreakPointUp: 'sm',

        fontWeight,
        spacing,
        palette: {
            // type: 'dark',
            type: 'light',
            primary: {
                light: '#757575',
                main: '#1E1E1E',
                dark: '#424242',
                contrastText: '#FFFFFF',
            },
            secondary: {
                light: '#A7D9C5',
                main: '#8CDFBA',
                dark: '#92CEB4',
                50: '#E4F7EF',
                100: '#DBF5E9',
                200: '#CFF2E2',
                300: '#BEEDD8',
                400: '#A9E7CB',
                500: '#8CDFBA',
                600: '#6DC89F',
                700: '#51B688',
                800: '#479874',
                900: '#407E62',
                contrastText: '#000000',
            },
            accent: {
                light: "#409EC3",
                main: "#409EC3",
                dark: "#409EC3",
                50: '#D2E8F1',
                100: '#C3E0EC',
                200: '#AED6E6',
                300: '#94C8DD',
                400: '#70B6D2',
                500: '#409EC3',
                600: '#297FA1',
                700: '#227292',
                800: '#165974',
                900: '#114559',
                contrastText: '#000000'
            },
            tertiary_one: {
                light: '#A7D9C5',
                main: '#A7D9C5',
                dark: '#A7D9C5',
                contrastText: '#FFFFFF',
            },
            tertiary_two: {
                light: '#E7B18D',
                main: '#E7B18D',
                dark: '#E7B18D',
                contrastText: '#FFFFFF',
            },
            tertiary_three: {
                light: '#E1CDE4',
                main: '#E1CDE4',
                dark: '#E1CDE4',
                contrastText: '#FFFFFF',
            },
            tertiary_four: {
                light: '#BADCEA',
                main: '#BADCEA',
                dark: '#BADCEA',
                contrastText: '#000000',
            },
            smoke: {
                light: "#f5f5f5",
                main: '#f0f0f0',
                dark: "#cfcfcf",
                contrastText: '#000000',
            },
            grey: {
                light: '#757575',
                main: '#1E1E1E',
                dark: '#424242',
                50: '#F2F3F4',
                100: '#CACACA',
                200: '#B8B8B8',
                300: '#A0A0A0',
                400: '#808080',
                500: '#565656',
                600: '#424242',
                700: '#1E1E1E',
                800: '#1A1A1A',
                900: '#161616',
                contrastText: '#FFFFFF',
            },
            grey50: '#F2F3F4',
            grey100: '#CACACA',
            grey200: '#B8B8B8',
            grey300: '#A0A0A0',
            grey400: '#808080',
            grey500: '#565656',
            grey600: '#424242',
            grey700: '#1E1E1E',
            grey800: '#1A1A1A',
            grey900: '#161616',
            tertiary_one50: '#EAF6F1',
            tertiary_one100: '#E3F3ED',
            tertiary_one200: '#DAEFE7',
            tertiary_one300: '#CEEAED',
            tertiary_one400: '#BDE3D4',
            tertiary_one500: '#A7D9C5',
            tertiary_one600: '#86C0A9',
            tertiary_one700: '#69AC91',
            tertiary_one800: '#58947C',
            tertiary_one900: '#4D7B69',
            secondary700: '#51B688',
            error: {
                light: '#E32E21',
                main: '#E32E21',
                dark: '#E32E21',
                contrastText: '#FFFFFF',
            },
            warning: {
                light: '#FFC107',
                main: '#FFC107',
                dark: '#FFC107',
                contrastText: '#FFFFFF',
            },
            info: {
                light: '#2196F3',
                main: '#2196F3',
                dark: '#2196F3',
                contrastText: '#FFFFFF',
            },
            success: {
                light: '#4ADB9A',
                main: '#4ADB9A',
                dark: '#4ADB9A',
                contrastText: '#FFFFFF',
            },
            hyperlink: {
                light: '#0085FF',
                main: '#0085FF',
                dark: '#0085FF',
                contrastText: '#FFFFFF',
            },
            background: {
                paper: '#fff',
                dialog: '#fafafa',
                default: '#f2f3f4',
            }
        },
        typography: {
            htmlFontSize: spacing(2),
            fontFamily: 'Sabon "Sofia Pro"',
            fontSize: spacing(1.75),
            fontStyle: 'normal',
            fontWeightRegular: fontWeight.fontWeightRegular,
            fontWeightMedium: fontWeight.fontWeightMedium,
            fontWeightSemi: fontWeight.fontWeightSemi,
            fontWeightBold: fontWeight.fontWeightBold,
            h1: {

                fontWeight: fontWeight.fontWeightBold,
                fontSize: `${spacing(12)}px`,
                lineHeight: `${spacing(16.25)}px`,
                letterSpacing: `${spacing(0.1875)}px`,
            },
            h2: {

                fontWeight: fontWeight.fontWeightBold,
                fontSize: `${spacing(7.5)}px`,
                lineHeight: `${spacing(10.5)}px`,
                letterSpacing: `${spacing(-0.0625)}px`,
            },
            h3: {

                fontWeight: fontWeight.fontWeightBold,
                fontSize: `${spacing(6)}px`,
                lineHeight: `${spacing(8.375)}px`,
            },
            h4: {

                fontWeight: fontWeight.fontWeightBold,
                fontSize: `${spacing(5)}px`,
                lineHeight: `${spacing(7)}px`,
            },
            h5: {

                fontWeight: fontWeight.fontWeightBold,
                fontSize: `${spacing(4)}px`,
                lineHeight: `${spacing(4.25)}px`,
                letterSpacing: `${spacing(0.0225)}px`,
            },
            h6: {

                fontWeight: fontWeight.fontWeightSemi,
                fontSize: `${spacing(3)}px`,
                lineHeight: `${spacing(3.5)}px`,
                letterSpacing: `${spacing(0.01875)}px`,
            },
            titleMobile: {

                fontWeight: fontWeight.fontWeightSemi,
                fontSize: `${spacing(2.5)}px`,
                lineHeight: `${spacing(3)}px`,
                letterSpacing: `${spacing(0.01875)}px`,
            },
            numPad: {

                fontWeight: fontWeight.fontWeightRegular,
                fontSize: `${spacing(3)}px`,
                lineHeight: `${spacing(3)}px`,
            },
            smallHeader: {

                fontWeight: fontWeight.fontWeightSemi,
                fontSize: `${spacing(1.5)}px`,
                lineHeight: `${spacing(3)}px`,
                letterSpacing: `${spacing(0.125)}px`,
            },
            subtitle1: {

                fontWeight: fontWeight.fontWeightSemi,
                fontSize: `${spacing(2)}px`,
                lineHeight: `${spacing(2.6)}px`,
                letterSpacing: `${spacing(0.01875)}px`,
            },
            subtitle2: {

                fontWeight: fontWeight.fontWeightSemi,
                fontSize: `${spacing(1.75)}px`,
                lineHeight: `${spacing(2.275)}px`,
                letterSpacing: `${spacing(0.0125)}px`,
            },
            body1: {

                fontWeight: fontWeight.fontWeightRegular,
                fontSize: `${spacing(2)}px`,
                lineHeight: `${spacing(2.6)}px`,
                letterSpacing: `${spacing(0.0625)}px`,
            },
            body2: {

                fontWeight: fontWeight.fontWeightRegular,
                fontSize: `${spacing(1.75)}px`,
                lineHeight: `${spacing(2.275)}px`,
                letterSpacing: `${spacing(0.03125)}px`,
            },
            button: {

                fontWeight: fontWeight.fontWeightBold,
                fontSize: `${spacing(2)}px`,
                lineHeight: `${spacing(2)}px`,
                letterSpacing: `${spacing(0.0375)}px`,
                textTransform: 'none',
            },
            caption: {

                fontWeight: fontWeight.fontWeightRegular,
                fontSize: `${spacing(1.5)}px`,
                lineHeight: `${spacing(1.95)}px`,
                letterSpacing: `${spacing(0.05)}px`,
            },
            overline: {

                fontWeight: fontWeight.fontWeightSemi,
                fontSize: `${spacing(1.25)}px`,
                lineHeight: `${spacing(1.625)}px`,
                letterSpacing: `${spacing(0.1875)}px`,
            },
        },

    });

export default theme;
