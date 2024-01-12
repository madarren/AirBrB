import React from 'react';
import AnswerButton from '../components/AnswerButton'; // change this to component/Button
import { lightBlue } from '@mui/material/colors';

export default function PlayGamePage ({ token, setToken }) {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Helvetica',
        backgroundColor: lightBlue[50],
        height: '100vh'
      }}>
        <div style={{
          paddingTop: '20px',
          paddingLeft: '43%',
          paddingBottom: '40px',
          textAlign: 'center',
          backgroundColor: lightBlue[100],
        }}>
          <h1>Question Goes Here</h1>
        </div>
        <div class="counter" style= {{
           textAlign: 'right',
           marginRight: '10%',
           marginBottom: '2%'
        }}>
          <h2>Counter</h2>
        </div>
        <div class="timer" style= {{
           textAlign: 'right',
           marginRight: '10%',
        }}>
          <h2>Timer</h2>
        </div>
        <div style={{
            paddingLeft: '25%',
            paddingTop: '20px',
            background: 'grey',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70%',
            height: '340px'
          }}>
            Image goes here
        </div>
        <div style={{
          width: '80%',
          paddingTop: '3%',
          alignItems: center,
          marginLeft: '10%',
        }}>
          <div style={{
            paddingLeft: '2%',
            paddingRight: '2%',
            paddingBottom: '5%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around', // space-betweeen if you want to touch end of page
          //  width: '1300px',
          // paddingLeeft: 60px
          }}>
            <AnswerButton answer = 'Answers go Here'></AnswerButton>
            <AnswerButton answer = 'Answers go Here'></AnswerButton>
            <AnswerButton answer = 'Answers go Here'></AnswerButton>
            <AnswerButton answer = 'Answers go Here'></AnswerButton>
            <AnswerButton answer = 'Answers go Here'></AnswerButton>
            <AnswerButton answer = 'Answers go Here'></AnswerButton>
          </div>
        </div>
      </div>
    </>
  )
}