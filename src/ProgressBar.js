import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({value, max}) => {
    return(
        <div >
            <progress value={value} max={max} style={{width: '100%', height:"30px"}} />
            <span>{value/max * 100}%</span>
        </div>
    );

};

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number
}

ProgressBar.defaultProps = {
    max: 100
}

export default ProgressBar;