import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, CircularProgress, Typography } from "@material-ui/core";

import { movieResult as movieResultSelector } from "../../redux/selectors";
import { searchMovieById } from "../../redux/actions/Search";

export default ({ match }) => {
  const dispatch = useDispatch();
  const movieResult = useSelector((state) => movieResultSelector(state));

  useEffect(() => {
    const movieId = match.params.id;

    if (!movieResult || (movieResult && movieResult.imdbID !== movieId)) {
      dispatch(searchMovieById({ movieId }));
    }
  });

  if (!movieResult) {
    return <CircularProgress size={50} color="primary" />;
  }

  return (
    <Container>
      <Typography variant="h3">{movieResult.Title}</Typography>
      <img src={movieResult.Poster} alt={movieResult.Poster} />
      <Typography>
        <strong>Actores: </strong>
        {movieResult.Actors}
      </Typography>
      <Typography>
        <strong>Director: </strong>
        {movieResult.Director}
      </Typography>
      <Typography>
        <strong>Paìs: </strong>
        {movieResult.Country}
      </Typography>
      <Typography>
        <strong>Clasificación: </strong>
        {movieResult.Rated}
      </Typography>
      <Typography>
        <strong>Premios: </strong>
        {movieResult.Awards}
      </Typography>
      <Typography>
        <strong>Sinópsis: </strong>
        {movieResult.Plot}
      </Typography>
    </Container>
  );
};
