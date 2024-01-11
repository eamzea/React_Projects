import React, { useEffect, useState } from "react";

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };
    window.addEventListener("mousemove", mouseMove);

    console.log("component Mounted");
    return () => {
      console.log("component Unmounted");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <p className="h1">You are Awesome</p>
      <p>
        x: {x}
        y: {y}
      </p>
    </>
  );
};

export default Message;
