import React, { Component, Fragment } from 'react'
import Link from 'next/link'

class MovieList extends Component {

    render() {

        const movies = this.props.movies

        return (
            <Fragment>
                {
                    movies.map(movie => (
                        <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                                    <a ><img className="card-img-top" src={movie.image} alt="" /></a>
                                </Link>
                                <div className="card-body">
                                    <h4 className="card-title">
                                    <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                                        <a >{movie.name}</a>
                                    </Link>
                                    </h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">{movie.description}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                </div>
                            </div>
                        </div>
                    ))

                }
            </Fragment>
        )
    }
}

export default MovieList;