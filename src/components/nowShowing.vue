<script>
import nowShowingCategories from "./nowShowingCategories.vue";
import { movies } from "../data/movies";

export default {
  components: {
    nowShowingCategories,
  },
  data() {
    return {
      moviesToRender: movies,
    };
  },
  methods: {
    renderMovies(movies) {
      this.moviesToRender = movies;
    },
  },
  computed: {},
};
</script>

<template>
  <nowShowingCategories
    class="sticky top-0 backdrop-blur-lg"
    @finalSelectionMoviesSubmisson="renderMovies"
  ></nowShowingCategories>

  <div class="grid grid-cols-5 gap-6 m-3 p-8">
    <div
      v-for="movie in moviesToRender"
      class="w-50 h-80 p-4 rounded-lg text-center bg-gray-200 dark:bg-gray-800"
    >
      <div class="h-60 overflow-hidden rounded-md">
        <img class="w-full h-full object-cover" :src="movie.poster" />
      </div>

      <div class="h-[20%] flex items-center justify-center text-lg font-bold">
        {{ movie.name }}
      </div>
    </div>
  </div>

  <div class="text-3xl" v-show="moviesToRender.length === 0">
    No Movies found
  </div>
</template>
