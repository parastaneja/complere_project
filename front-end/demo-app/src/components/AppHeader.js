
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
// import { Typography } from 'components/ui';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Hidden, Typography, useMediaQuery } from '@material-ui/core';
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// import Logo from 'assets/images/trlogo.svg';
// import SearchIcon from '@material-ui/icons/Search';
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import OptionMenu from './OptionMenu';
// import { useHistory } from 'react-router-dom';
// import Logout from './Logout';
// import MfaToggle from 'containers/Settings/MfaToggle';

const useStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up(theme.showDrawerBreakPointUp)]: {
            width: `calc(100%)`,
            backgroundColor: theme.palette.background.default,
            // backgroundColor: theme.palette.primary.main,
            borderRadius: 0,
        },
        [theme.breakpoints.down('md')]: {
            backgroundColor: theme.palette.secondary.default,
        },
        // height: appHeaderHight,
        height: theme.appHeaderHeight,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        boxShadow: '0 0 0',
        backgroundColor: theme.palette.primary.main,
        borderBottomRightRadius: theme.spacing(1.875),
        borderBottomLeftRadius: theme.spacing(1.875),
    },
    menuButton: {
        [theme.breakpoints.up(theme.showDrawerBreakPointUp)]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: {
        [theme.breakpoints.up(theme.showDrawerBreakPointUp)]: {
            borderRadius: 0,
            width: theme.drawerWidth,
        },
        backgroundColor: theme.palette.primary.main,
        width: 'auto',
        height: theme.appHeaderHeight,
        borderBottomLeftRadius: theme.spacing(1.875),
    },
    rightDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        width: '40%',
        justifyContent: 'flex-end',
    },
    inputField: {
        width: '80%'
    },
    titleMainDiv: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing(0, 2),
        [theme.breakpoints.up(theme.showDrawerBreakPointUp)]: {
            padding: theme.spacing(0, 5),
        },
    },
    titleTxt: {
        // color: theme.palette.primary.main,
    },
    notificationIcon: {
        [theme.breakpoints.up(theme.showDrawerBreakPointUp)]: {
            // marginLeft: theme.spacing(3),
            marginRight: theme.spacing(2),
            color: theme.palette.primary.main,
        },
        color: theme.palette.primary.contrastText,
    },
    searchIcon: {
        [theme.breakpoints.up(theme.showDrawerBreakPointUp)]: {

            marginRight: theme.spacing(2),
            color: theme.palette.primary.main,
        },
        color: theme.palette.primary.contrastText,
    },
    iconImg: {
        [theme.breakpoints.up(theme.showDrawerBreakPointUp)]: {
            marginLeft: theme.spacing(1.5),

            height: theme.spacing(5.25),

            width: theme.spacing(14.875)
        },


        height: theme.spacing(3.875),

        width: theme.spacing(11.25)
    }

}));


function AppHeader(props) {
    const classes = useStyles();
    const theme = useTheme();
    // const OptionMenuRef = createRef();
    // const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const [pageName, setPageName] = useState("Employ");

    // useEffect(() => {
    //     return history.listen((location) => {
    //         getPageName(location);
    //     });
    // }, [history, pageName]);

    // useEffect(() => {
    //     const currentLocation = history.location;
    //     getPageName(currentLocation);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // const getPageName = (location) => {
    //     const currentPage = location.pathname;
    //     const pageName = currentPage.split("/");
    //     setPageName(pageName[1]);
    // };
    // const onMenuOpen = (event) => {

    //   OptionMenuRef.current.handleClick(event);
    // };

    // const onFAQsMenuHandler = (item) => {

    //   OptionMenuRef.current.handleClose();
    // };

    // const onChatMenuHandler = (item) => {

    //   OptionMenuRef.current.handleClose();
    // };

    // const onEmailMenuHandler = (item) => {

    //   OptionMenuRef.current.handleClose();
    // };

    const capitalizeFirstLatter = (string) => {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    };

    const showDrawer = useMediaQuery(theme.breakpoints.up(theme.showDrawerBreakPointUp));

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    {!showDrawer && <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={props.menuOpen}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>}
                    <Hidden mdUp >
                        <Typography variant="h6" noWrap>
                            {/* <img src={Logo} className={classes.iconImg} alt="Truly" /> */}
                        </Typography>
                    </Hidden>

                </Toolbar>
                <div className={classes.titleMainDiv}>
                    <div className={classes.title}>
                        {showDrawer && <Typography color="grey700" variant="h4">
                            {capitalizeFirstLatter(pageName)}
                        </Typography>}
                    </div>
                    <div className={classes.rightDiv}>
                        {/* <MfaToggle />
                        <Logout /> */}
                        {/* <div className={classes.inputFields} >
              <IconButton className={classes.searchIcon} aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
            </div>
            <IconButton onClick={onMenuOpen} className={classes.notificationIcon}>
              <HelpOutlineIcon />
            </IconButton>
            <IconButton className={classes.notificationIcon}>
              <NotificationsNoneIcon />
            </IconButton>
            <OptionMenu
              ref={OptionMenuRef}
              optionMenus={[
                { label: 'FAQs', onClick: onFAQsMenuHandler },
                { label: 'Chat', onClick: onChatMenuHandler },
                { label: 'Email', onClick: onEmailMenuHandler },
              ]}
            /> */}
                    </div>
                </div>
            </AppBar>
        </div>
    );
}

AppHeader.defaultProps = {
    menuOpen: () => { },
}
AppHeader.propTypes = {
    menuOpen: PropTypes.func,
    selectedMenu: PropTypes.any
};

export default memo(AppHeader);
