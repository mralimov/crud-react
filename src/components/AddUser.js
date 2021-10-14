import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
const AddUser = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label htmlFor='userInput'>Name</Label>
          <Input type='text' placeholder='Enter Name' id='userInput'></Input>
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

export default AddUser;
