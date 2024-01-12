import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const BigButton = (props) => {
  return (
    <Button
    sx={{ fontSize: '14pt' }}
    onClick={props.onClick}
    variant="outlined"
    >
    {props.children}
    </Button>
  );
};

export default BigButton;

BigButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.optionalNode
};
