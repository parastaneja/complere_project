import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    content: {
        [theme.breakpoints.up(theme.showDrawerBreakPointUp)]: {
            marginLeft: theme.drawerWidth,
            width: `calc(100% - ${theme.drawerWidth})`,
        },
        paddingTop: theme.appHeaderHeight,
        height: `calc(100vh - ${theme.appHeaderHeight})`,
    },
    toolbar: theme.mixins.toolbar,
}));

function BaseLayout(props = {}) {
    const classes = useStyles();
    return (<main className={classes.content}>
        {props.children}
    </main>)
};

export default BaseLayout;