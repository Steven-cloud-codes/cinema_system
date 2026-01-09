<script>
import nowShowingPopular from "../components/nowShowing/nowShowingPopular.vue";
import nowShowingCategories from "../components/nowShowing/nowShowingCategories.vue";
import { movies } from "../data/movies";

export default {
  components: {
    nowShowingCategories,
    nowShowingPopular,
  },
  data() {
    return {
      moviesToRender: movies,
      message: "hi",
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
  <nowShowingPopular></nowShowingPopular>
  <nowShowingCategories
    class="sticky top-0 backdrop-blur-lg"
    @finalSelectionMoviesSubmisson="renderMovies"
  ></nowShowingCategories>

  <div
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-5 p-8"
  >
    <div
      v-for="movie in moviesToRender"
      :key="movie.id"
      class="w-40 h-60 md:w-50 md:h-80 p-4 rounded-lg text-centedr bg-gray-200 dark:bg-gray-800 dark:border cursor-pointer"
    >
      <router-link :to="{ name: 'MovieBooking', params: { id: movie.id } }">
        <div class="h-3/4 overflow-hidden rounded-md">
          <img class="w-full h-full object-cover" :src="movie.poster" />
        </div>

        <div
          class="h-1/4 flex items-center justify-center text-[100%] font-bold"
        >
          {{ movie.name }}
        </div></router-link
      >
    </div>
  </div>

  <div class="text-3xl" v-show="moviesToRender.length === 0">
    No Movies found
  </div>
</template>
