import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';


const Field = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <FormLabel>{label}</FormLabel>
      <FormControl {...props} /> 
    </FormGroup>
  )
}

export default Field;