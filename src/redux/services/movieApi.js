import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
    reducerPath: "movie",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/api/"}),
    endpoints: (builder) => ({
        getMovies: builder.query({query: () => "movies"}),
        getMovie: builder.query({query: (movieId) => `movie?movieId=` + movieId}),
        getReviews: builder.query({query: (movieId) => "reviews?movieId=" + movieId}),
        getMoviesFromCinema: builder.query({query: (id) => "movies?cinemaId=" + id}),
        getCinemas: builder.query({query: () => "cinemas"})
    }),
});

export const {useGetMoviesQuery, useGetMovieQuery, useGetReviewsQuery, useGetMoviesFromCinemaQuery, useGetCinemasQuery} = movieApi;
