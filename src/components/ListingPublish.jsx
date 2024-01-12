import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels () {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Live" />
      <FormControlLabel disabled control={<Switch />} label="Publish" />
    </FormGroup>
  );
}
