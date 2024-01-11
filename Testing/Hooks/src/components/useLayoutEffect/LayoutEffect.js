import React, { useLayoutEffect, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Button } from "react-bootstrap";
import { useCounterQuote } from "../../hooks/useCounterQuote";
import "./LayoutEffect.css";

const Layout = () => {
  const { counter, increment } = useCounterQuote(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const paragraphTag = useRef();

  useLayoutEffect(() => {
    console.log(paragraphTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <p className="h1">Layout Effect</p>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={paragraphTag}>
          {quote}
        </p>
      </blockquote>

      <Button variant="primary" onClick={increment}>
        Siguiente quote
      </Button>
    </div>
  );
};

export default Layout;
