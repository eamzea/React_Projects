import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Button } from "react-bootstrap";
import { useCounterQuote } from "../../hooks/useCounterQuote";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounterQuote(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <p className="h1">Breaking Bad Quotes</p>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <Button variant="primary" onClick={increment}>
        Siguiente quote
      </Button>
    </div>
  );
};

export default MultipleCustomHooks;
