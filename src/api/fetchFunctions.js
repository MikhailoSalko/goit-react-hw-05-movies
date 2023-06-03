const URLS = {
  TREND_FILMS: 'https://api.themoviedb.org/3/trending/movie/week',
  FILM_BY_SEARCH: 'https://api.themoviedb.org/3/search/movie',
};

const OPTIONS = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjAwOTdiYTdkMGEwMjdhMWIwZmQ1MzE4ZDEwOWQyNiIsInN1YiI6IjY0NzMyNjgzOWFlNjEzMDBlNTk0ODMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZZFB21DrPYslGFOp2UJX2KSQ02EhM3eeP3-goKJHXAk',
  },
};

export const fetchTrendFims = () => {
  return fetch(`${URLS.TREND_FILMS}`, OPTIONS).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export const fetchFilmsBySearchQuery = search => {
  return fetch(`${URLS.FILM_BY_SEARCH}?query=${search}}`, OPTIONS).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
};
