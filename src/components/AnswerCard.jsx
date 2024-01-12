import React from 'react';
import { Card } from '@mui/material';
import { blue } from '@mui/material/colors';

export default function AnswerCard (props) {
  return (
    <Card sx = {{
      width: '200px',
      backgroundColor: blue[500],
      flex: '0 1 30%',
      margin: '5px',
      height: '100px',
    }}>
    <div style = {{
      color: 'white',
      paddingTop: '40px',
      paddingLeft: '130px'
    }}>
      {props.answer}
    </div>
    </Card>
  )
}