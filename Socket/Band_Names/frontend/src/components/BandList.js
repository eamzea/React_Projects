import React, { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

const BandList = ({ data, vote, deleteFn, changeName }) => {
  const [bands, setBands] = useState(data);

  useEffect(() => {
    setBands(data);
  }, [data]);

  const handleChange = ({ target: { value } }, id) => {
    const newName = value;
    setBands(bands =>
      bands.map(band => {
        if (band.id === id) {
          band.name = newName;
        }
        return band;
      })
    );
  };

  const handleBlur = (name, id) => changeName(name, id);

  const createRows = () =>
    bands.map(band => (
      <tr key={band.id}>
        <td>
          <Button variant="primary" onClick={() => vote(band.id)}>
            + 1
          </Button>
        </td>
        <td>
          <Form.Control
            type="text"
            placeholder="New Band Name"
            value={band.name}
            onChange={event => handleChange(event, band.id)}
            onBlur={() => handleBlur(band.name, band.id)}
          />
        </td>
        <td>
          <h3>{band.votes}</h3>
        </td>
        <td>
          <Button variant="danger" onClick={() => deleteFn(band.id)}>
            Delete
          </Button>
        </td>
      </tr>
    ));

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Votes</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{createRows()}</tbody>
    </Table>
  );
};

export default BandList;
