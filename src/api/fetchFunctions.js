const TREND_FILMS_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const OPTIONS = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjAwOTdiYTdkMGEwMjdhMWIwZmQ1MzE4ZDEwOWQyNiIsInN1YiI6IjY0NzMyNjgzOWFlNjEzMDBlNTk0ODMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZZFB21DrPYslGFOp2UJX2KSQ02EhM3eeP3-goKJHXAk',
  },
};

export const fetchTrendFims = () => {
  return fetch(`${TREND_FILMS_URL}`, OPTIONS).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
    // console.log(response.json());
  });
};
