import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Hidden, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0, 4),
            backgroundColor: theme.palette.background.default,
        },
        backgroundColor: theme.palette.primary.contrastText,
        // width: '100%',
    },
    main: {
        display: 'flex',

        [theme.breakpoints.up('md')]: {
            borderTopLeftRadius: theme.spacing(1.5),
            borderTopRightRadius: theme.spacing(1.5),
        },
        [theme.breakpoints.down('sm')]: {
            flexFlow: 'column'
        },
        backgroundColor: theme.palette.primary.contrastText,
        // minHeight: `calc(100vh - ${theme.spacing(10)})`,
        // minHeight: `calc(100vh - 50px)`,
        minHeight: `calc(100vh)`,
    },
    left: {
        flex: 1,
        width: 'calc(1vw)',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            overflow: 'auto',
            height: '100vh',
            paddingBottom: '100px',
        },
    },
    divider: {

    },
    right: {
        // minWidth: '362px',
        minWidth: theme.spacing(25.25),
        flex: 0,
    },
}));

function PageLayout(props = {}) {
    const classes = useStyles();

    return (<>
        <Paper elevation={0} className={classes.root}>
            <div className={classes.main}>
                <Hidden smDown={!!props.isSelected}>
                    <div className={classes.left}>
                        {props.leftComponent}
                    </div>
                </Hidden>
                {props.rightComponent && <>
                    <div className={classes.divider}>
                        <Divider orientation="vertical" />
                    </div>
                    <div className={classes.right}>
                        <Hidden smDown={!props.isSelected}>
                            {props.rightComponent}
                        </Hidden>
                    </div>
                </>}
            </div>
        </Paper>
    </>)
};

export default PageLayout;