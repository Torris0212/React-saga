import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const NewUserForm = ({onSubmit}) => {
  const initialUserName = { firstName: '', lastName: '' };
  const [userName, setUserName] = useState(initialUserName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      firstName: userName.firstName,
      lastName: userName.lastName
    });
    setUserName(initialUserName);
  }

  const handleFirstNameChange = (e) => {
    setUserName(prevState => {return {...prevState, firstName: e.target.value}})
  }

  const handleLastNameChange = (e) => {
    setUserName(prevState => {return {...prevState, lastName: e.target.value}})
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>
          First Name
        </Label>
        <Input required placeholder='first name' onChange={handleFirstNameChange} value={userName.firstName} />
      </FormGroup>
      <FormGroup>
        <Label>
          Last Name
        </Label>
        <Input required placeholder='last name' onChange={handleLastNameChange} value={userName.lastName} />
      </FormGroup>
      <FormGroup>
        <Button block outline type='submit' color='primary'>
          Create
        </Button>
      </FormGroup>
    </Form>
  )
}

export default NewUserForm;