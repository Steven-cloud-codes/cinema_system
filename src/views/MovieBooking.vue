<script>
import { movies } from "../data/movies";

export default {
  data() {
    return {
      movieId: Number(this.$route.params.id), // convert to number
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },

  computed: {
    selectedMovie() {
      return movies.find((movie) => movie.id === this.movieId);
    },
    dateToRender() {
      if (!this.selectedMovie) return [];
      return this.selectedMovie.showDates.map((d) => d.date.split("-")[2]);
    },
  },
};
</script>

<template>
  <div v-if="selectedMovie">
    <!--Main small banner + movie name display start-->
    <div class="flex text-center py-4 font-bold rounded-b-lg items-center p-3">
      <button @click="goBack" class="w-8">
        <img src="..//assets/arrow_14034409.png" />
      </button>
      <div class="text-[100%] ms-6">{{ selectedMovie.name }}</div>
    </div>
    <!--Main small banner + movie name display end-->

    <!--Banner image display + rating start-->
    <div class="w-full h-80 relative">
      <!--Image-->
      <img class="w-full h-full object-cover" :src="selectedMovie.banner" />
      <!--transparent overlay-->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"
      ></div>
      <!--rating + movie name-->
      <div class="absolute top-60 right-4 flex w-full p-3 items-center">
        <div class="font-bold text-[130%] mx-3">
          {{ selectedMovie.name }}
        </div>
        <div
          class="text-white font-bold text-lg px-[5px] py-[5px] rounded-md bg-yellow-400"
        >
          ⭐ {{ selectedMovie.rating }}
        </div>
      </div>
    </div>
    <!--Banner image display + rating end-->

    <!--Description-->
    <div class="p-3">
      <div class="text-xl font-bold">Description</div>
      <div class="text-gray-400">{{ selectedMovie.description }}</div>
    </div>

    <div class="p-3 text-center">
      <div class="text-lg font-bold mb-3">Dates</div>
      <div class="flex justify-center">
        <div
          v-for="date in dateToRender"
          class="border rounded-md p-3 mx-3 hover:bg-white hover:text-black"
          :key="idx"
        >
          {{ date }}
        </div>
      </div>
    </div>
  </div>
</template>
