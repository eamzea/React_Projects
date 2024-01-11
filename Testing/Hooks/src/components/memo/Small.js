import React, { memo } from "react";

const Small = memo(({ value }) => {
  console.log("Called");

  return <small>{value}</small>;
});

export default Small;
