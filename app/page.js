"use client"
import React, { useState } from 'react';
import './globals.css';
import Header from './header.js';
import Watch from './watch.js';
import MovieRow from './movie-row.js';
import Footer from './footer.js';
import Data from './data.js';

const App = () => {
  const [movies, setMovies] = useState(Data);

  function handleDeleteMovie(id) {
    const newMovieList = movies.filter(movie => movie.id !== id);
    setMovies(newMovieList);
  }

  function handleUpdateVote(id, newVote) {
    const updatedMovies = movies.map(movie => {
      if (movie.id === id) {
        return { ...movie, vote: newVote };
      }
      return movie;
    });

    setMovies(updatedMovies);
  }

  return (
    <>
      <Header />
      <Watch />
      {movies.map(movie => (
        <MovieRow
          key={movie.id}
          movie={movie}
          onDelete={() => handleDeleteMovie(movie.id)}
          onUpdateVotes={newVote => handleUpdateVote(movie.id, newVote)}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;
































