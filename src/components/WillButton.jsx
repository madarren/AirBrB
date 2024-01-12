import React from 'react';
import { Button } from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import PropTypes from 'prop-types';

const AnswerButton = (props) => {
  return (
    <Button
    sx={{ fontSize: '14pt',
    width: '200px',
    height: '100px',
    backgroundColor: blue[500],
    flex: '0 1 30%',    // not sure what this does
    margin: '5px',
    color: 'white',
    paddingTop: '40px',
    paddingLeft: '130px',
    borderRadius: '1em'
    }}
    onClick={props.onClick}
    variant="contained"
    >
    {props.children}
    </Button>
  );
};

export default AnswerButton;

AnswerButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.optionalNode
};