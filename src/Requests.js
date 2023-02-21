const requests = {
    fetchTrending: `/trending/all/week?api_key=1b356e8624d00220a10ffd36f8434c72`,
    fetchNetflixOriginals: `/discover/movie?api_key=1b356e8624d00220a10ffd36f8434c72&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_watch_monetization_types=free`,
    fetchTopRated: `/movie/top_rated?api_key=1b356e8624d00220a10ffd36f8434c72&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=1b356e8624d00220a10ffd36f8434c72&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=1b356e8624d00220a10ffd36f8434c72&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=1b356e8624d00220a10ffd36f8434c72&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=1b356e8624d00220a10ffd36f8434c72&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=1b356e8624d00220a10ffd36f8434c72&with_genres=99`,
}

export default requests;