import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const SmallButton = (props) => {
  return (
    <Button
    sx={{ fontSize: '8pt' }}
    onClick={props.onClick}
    variant="outlined"
    >
    {props.children}
    </Button>
  );
};

export default SmallButton;

SmallButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.optionalNode
};
