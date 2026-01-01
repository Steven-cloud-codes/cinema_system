<script>
import { movies } from "../data/movies";
export default {
  data() {
    return {
      movies,
      finalSelectedMovies: [],
      //move categories
      movieTypes: [
        "Sci-fi",
        "Drama",
        "Action",
        "Thriller",
        "Crime",
        "Adventure",
        "Romance",
      ],
      //movie type selction in array
      selectedMovieTypes: [],
    };
  },

  methods: {
    //selctior function for movies
    clicked(movie) {
      //conditional check for whather the movie is selected or not
      if (!this.selectedMovieTypes.includes(movie)) {
        this.selectedMovieTypes.push(movie);
      } else {
        this.selectedMovieTypes = this.selectedMovieTypes.filter(
          (movieType) => movieType != movie
        );
      }
      console.log(this.finalSelectedMovies);
      console.log(this.selectedMovieTypes);

      this.$emit("finalSelectionMoviesSubmisson", this.categorySelectionMovies);
    },
  },
  computed: {
    categorySelectionMovies() {
      return this.movies.filter((movie) =>
        this.selectedMovieTypes.every((t) => movie.categories.includes(t))
      );
    },
  },
};
</script>

<template>
  <!--Main div for the whole thing-->
  <div class="flex mt-4 justify-between items-center px-3">
    <div class="flex flex-wrap">
      <!--each button start-->
      <button
        v-for="movie in movieTypes"
        :key="movie"
        @click="clicked(movie)"
        class="border rounded-lg px-2 py-2 m-3 bg-gray-100 dark:bg-black cursor-pointer"
        :class="
          this.selectedMovieTypes.includes(movie)
            ? 'bg-gray-600 text-white dark:bg-white dark:text-black'
            : ''
        "
      >
        {{ movie }}
      </button>
      <!--each button end-->
    </div>

    <div class="border p-2 rounded-lg"><input type="text" /></div>
  </div>
</template>
