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
      //conditional check for sdwhather the movie is selected or not
      if (!this.selectedMovieTypes.includes(movie)) {
        //conditonal if the category is not selected
        this.selectedMovieTypes.push(movie);
      } else {
        //conditonal if the category is  selected
        this.selectedMovieTypes = this.selectedMovieTypes.filter(
          (movieType) => movieType != movie
        );
      }
      console.log(this.finalSelectedMovies);
      console.log(this.selectedMovieTypes);
      //emission of selected movie types
      this.$emit("finalSelectionMoviesSubmisson", this.categorySelectionMovies);
    },
  },
  computed: {
    //changes base on selected movie types
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
  <div
    class="md:flex md:flex-row-reverse mt-4 justify-between items-center px-3 w-full"
  >
    <div class="border p-2 rounded-lg"><input type="text" /></div>
    <div class="flex overflow-x-auto">
      <!--each button start-->
      <button
        v-for="movie in movieTypes"
        :key="movie"
        @click="clicked(movie)"
        class="border px-2 text-sm rounded-2xl m-3 bg-gray-100 dark:bg-black cursor-pointer"
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
  </div>
</template>
