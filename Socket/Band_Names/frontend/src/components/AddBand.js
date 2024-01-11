import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const AddBand = ({ add }) => {
  const [bandNameSate, setBandNameSate] = useState('');

  const handleChange = ({ target: { value } }) => setBandNameSate(value);

  const handleSubmit = event => {
    event.preventDefault();

    bandNameSate.trim().length > 0 && add(bandNameSate);
  };

  return (
    <>
      <h3>Add Band</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="New Band Name"
            onChange={handleChange}
            value={bandNameSate}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default AddBand;
