import { makeStyles } from '@material-ui/core';
import React from 'react';
import PageLayout from '../../layouts/PageLayout';


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
        <>
            <PageLayout
                leftComponent={(<div>1234</div>)}
                rightComponent={(<div>456</div>)}
            />

        </>
    )

}

export default Employ;