import { makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    div: {
        height: theme.spacing(10),
        width: theme.spacing(10),
        backgroundColor: 'red'

    }
}))


function Employ() {
    const classes = useStyles();

    return (
        <div className={classes.div} >
            Employ
        </div>
    )

}

export default Employ;