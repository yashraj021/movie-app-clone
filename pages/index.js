import styles from '../styles/Home.module.css';
import SideMenu from '../components/side-menu';
import Carousel from '../components/carousel';
import MovieList from '../components/movie-list';
import { getMovies } from '../actions/index';
import { useEffect, useState } from 'react';

const Home = ({ movies, images }) => {

  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu />
            </div>
            <div className="col-lg-9">
              <Carousel images={images}/>
              <div className="row">
                <MovieList movies={movies} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const movies = await getMovies();
  const images = movies.map(movie => {
    return {
      id: `movie-${movie.id}`,
      url: movie.image,
      name: movie.name
    }
  })

  return { movies, images }
}

export default Home;
