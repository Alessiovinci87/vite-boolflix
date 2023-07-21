import { reactive } from "vue";

export const store = reactive({
  apiURL: "https://api.themoviedb.org/3/",
  endPoint: {
    movie: "search/movie",
    tv: "search/tv",
  },
  params: {
    api_key: "ab635729d48f14f91da9443d046c4b4d",
    query: "",
    language: "it-IT",
  },
  movieList: [],
  tvList: [],
});