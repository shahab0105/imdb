export default function updatemovieList(
  state = {
    Search: [
      {
        Title: "Hey Arnold!",
        Year: "1994–2004",
        imdbID: "tt0115200",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZTEwNTNiYjYtMTk4Mi00NWJhLWJhYmQtMmM5YzI0M2ZjMmZhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
      }
    ],
    totalResults: "321",
    Response: "True"
  },
  action
) {
  switch (action.type) {
    case "UPDATE_movieList":
      return action.payload;
    default:
      return state;
  }
}
