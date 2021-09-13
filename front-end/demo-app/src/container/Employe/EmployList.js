import { Button } from '@material-ui/core';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { setEmployAction } from '../../store/Employ/employAction';
import { employState } from '../../store/Employ/emplySelector';



function EmployList(props = {}) {

    const { employ, setEmployData } = props;

    const onPressSetEmploy = () => {
        setEmployData && setEmployData({ data: "1234" })
    };

    console.log("employ", employ);

    return (
        <Button onClick={onPressSetEmploy} >Set Data</Button>
    )

}

const mapStateToProps = createStructuredSelector({
    employ: employState(),

});

function mapDispatchToProps(dispatch) {
    return {
        setEmployData: (data) => dispatch(setEmployAction(data)),
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(EmployList);