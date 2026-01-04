<script>
import { movies } from "../data/movies";

export default {
  data() {
    return {
      movies,
    };
  },

  computed: {
    //Popular Movies base on data changes
    popularMovies() {
      return this.movies.filter((movie) => movie.rating > 8.5);
    },
  },
};
</script>

<template>
  <!--Titles divs start-->
  <div class="px-5">
    <div class="text-lg md:text-3xl font-bold text-black dark:text-white">
      Now Showing
    </div>

    <div class="text-md md:text-2xl mt-3 font-semibold text-red-500">
      Popular
    </div>
  </div>
  <!--Titles divs end-->

  <div class="mx-5 flex gap-4 overflow-x-auto snap-x snap-mandatory mt-4">
    <div
      v-for="movie in popularMovies"
      :key="movie.id"
      class="shrink-0 snap-center w-60 md:w-80 rounded-lg bg-gray-100 dark:bg-gray-800 cursor-pointer"
    >
      <div class="h-40 md:h-60 overflow-hidden rounded-lg">
        <img
          class="w-full h-full object-cover"
          :src="movie.poster"
          :alt="movie.name"
        />
      </div>

      <div class="p-3 text-lg text-black dark:text-white">
        {{ movie.name }}
      </div>
    </div>
  </div>
</template>
