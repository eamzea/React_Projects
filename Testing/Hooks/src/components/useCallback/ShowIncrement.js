import React, { memo } from "react";
import { Button } from "react-bootstrap";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Called");

  return (
    <Button variant="primary" onClick={() => increment(5)}>
      Incrementar
    </Button>
  );
});
