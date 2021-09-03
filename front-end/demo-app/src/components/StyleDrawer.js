
import React, { memo } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink, } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HistoryIcon from '@material-ui/icons/History';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import AppHeader from './AppHeader';
// import Logout from 'components/Logout';
// import intl from './intl/StyledDrawerIntl';
import { useMediaQuery } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
// import SelectEntity from 'containers/Common/SelectEntity';
// import { getAccessToken, getEntityId } from '../utils/auth';
// import { styledSnackbar } from 'containers/Common/Snackbar';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import combineClx from '../utils/CombineClx';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('lg')]: {
            width: theme.drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('lg')]: {
            width: `calc(100%)`,
        },
        height: theme.appHeaderHeight,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    // necessary for content to be below app bar
    // toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: theme.drawerWidth,
        marginTop: theme.appHeaderHeight,
        backgroundColor: theme.palette.primary.main,
        // height: `calc(100% - 80px)`,
        // height: `calc(100% - ${theme.appHeaderHeight})`,
        height: `calc(100vh - ${theme.appHeaderHeight})`,
        border: 0,
    },
    options: {
        display: 'flex',
        flex: 1,
    },
    list: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        padding: 0,
    },
    listItem: {
        display: 'flex',

    },
    setting: {
        display: 'flex',
        marginTop: 'auto',
    },
    menuIcon: {

        fontSize: theme.spacing(3.125),

        marginLeft: theme.spacing(2.25)
    },
    listName: {
        marginLeft: theme.spacing(3),
        '& span:hover': {
            fontWeight: 'bold !important',
        }


    },
    listNameBottom: {
        marginLeft: theme.spacing(1),
        '& span:hover': {
            fontWeight: 'bold !important',
        }
    },
    entitySelect: {
        margin: theme.spacing(4, 3, 8, 0)
    },
    ListItemDiv: {
        // borderRadius: '0px 8px 8px 0px !important',
        borderRadius: `${theme.spacing(0, 1, 8, 0)} !important`,
        paddingLeft: theme.spacing(2)
    },
    selectedMenuClass: {
        fontWeight: 'bold'
    }
}));

const menus = [
    {
        label: "Employ",
        path: '/employ',

    },



];

function StyledDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selectedMenu, setSelectedMenu] = React.useState({});

    // eslint-disable-next-line no-unused-vars
    // const [entityId, setEntityId] = useState(getEntityId());
    // eslint-disable-next-line no-unused-vars
    // const [accessToken, setAccessToken] = useState(getAccessToken());

    const handleStyledDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // const onEntityCloseCallBack = () => {
    //     setEntityId(getEntityId());
    //     setAccessToken(getAccessToken());
    // }
    const optionIcons = (index) => {
        let checkSelectedMenu = selectedMenu && selectedMenu.path ? selectedMenu.path.substring(1) : ""
        if (index === 0) {
            return checkSelectedMenu === "dashboard" ? <DashboardIcon className={classes.menuIcon} /> : <DashboardOutlinedIcon className={classes.menuIcon} />;
        }
        if (index === 1) {
            return checkSelectedMenu === "accounts" ? <TrendingUpIcon className={classes.menuIcon} /> : <TrendingUpIcon className={classes.menuIcon} />;
        }
        if (index === 2) {
            return checkSelectedMenu === "contacts" ? <PersonIcon className={classes.menuIcon} /> : <PersonOutlineIcon className={classes.menuIcon} />;
        }
        if (index === 3) {
            return <HistoryIcon className={classes.menuIcon} />;
        }
        if (index === 4) {
            return <PlaylistAddIcon className={classes.menuIcon} />;
        }
        if (index === 5) {
            return checkSelectedMenu === "teamMember" ? <PeopleIcon className={classes.menuIcon} /> : <GroupOutlinedIcon className={classes.menuIcon} />;
        }
        return checkSelectedMenu === "Settings" ? <SettingsIcon className={classes.menuIcon} /> : <SettingsOutlinedIcon className={classes.menuIcon} />;
    };

    const onOptionPress = (match) => {
        if (!match && match !== undefined) {
            handleStyledDrawerToggle()
        }

    }
    const drawerList = (match) => {
        return (
            <div className={classes.options}>
                <List className={classes.list}>
                    {menus.map((m, index) => (
                        <NavLink
                            className={index === 5 ? classes.setting : classes.listItem}
                            key={index}
                            activeStyle={{
                                fontWeight: 'bold !important',
                                color: theme.palette.primary.main,
                                backgroundImage:
                                    'linear-gradient(97.05deg, #F3D1B3 2.81%, #A5D8C5 99.34%)',
                            }}
                            style={{
                                color: theme.palette.primary.contrastText,
                                textDecoration: 'none',
                                marginRight: index < 5 ? theme.spacing(3) : 0,
                                marginLeft: index > 4 ? theme.spacing(2.5) : 0,
                                marginBottom: index === 6 ? theme.spacing(4) : 0,
                                // paddingLeft: index > 14== ? theme.spacing(5) : 0,
                                borderRadius: index < 5 ? theme.spacing(0, 1, 1, 0) : theme.spacing(1, 0, 0, 1),
                            }}
                            to={(index === 1 || index === 2 || index === 3) && m.path}
                            isActive={(match, location) => {
                                if (match && match.url === m.path) {
                                    setSelectedMenu(m);
                                    // !selectedMenu.path && setSelectedMenu(m);
                                    return true;
                                }
                                return false;
                            }}
                        >
                            <ListItem disableGutters className={classes.ListItemDiv} onClick={() => {
                                onOptionPress(match);
                                // setSelectedMenu(m);

                                // if (index !== 1 && index !== 2 && !index === 3) {
                                //     styledSnackbar.info("Coming soon..")
                                // }

                            }} button href=""
                            >
                                {optionIcons(index)}
                                {/* <ListItemText className={index > 4 ? classes.listNameBottom : classes.listName} primary={m.label} /> */}
                                <ListItemText className={combineClx((index > 4 ? classes.listNameBottom : classes.listName), (selectedMenu.path === m.path && classes.selectedMenuClass))} primary={<span style={selectedMenu.path === m.path ? { fontWeight: 'bold' } : {}}>{m.label}</span>} />
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </div>
        )
    }


    const container = window !== undefined ? () => window.document.body : undefined;
    const showDrawer = useMediaQuery(theme.breakpoints.up(theme.showDrawerBreakPointUp));
    return (
        <div className={classes.root}>
            <AppHeader menuOpen={handleStyledDrawerToggle} selectedMenu={selectedMenu} />

            <nav className={classes.drawer} aria-label="mailbox folders">

                {/* Drawer for mobile  View */}
                {!showDrawer && <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleStyledDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {/* <div className={classes.entitySelect}>
                        <SelectEntity onCloseCallBack={onEntityCloseCallBack} />
                    </div> */}

                    {drawerList(showDrawer)}

                </Drawer>}

                {/* Drawer for web  View */}
                {showDrawer && <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    {/* <div className={classes.entitySelect}>
                        <SelectEntity onCloseCallBack={onEntityCloseCallBack} />
                    </div> */}

                    {drawerList(showDrawer)}

                </Drawer>}
            </nav>
        </div >
    );
}

StyledDrawer.propTypes = {};

export default memo(StyledDrawer);
