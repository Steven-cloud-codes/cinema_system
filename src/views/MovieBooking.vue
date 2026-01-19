<script>
import { movies } from "../data/movies";
import seats from "../components/Seats.vue";

export default {
  components: {
    seats,
  },
  data() {
    return {
      movieId: Number(this.$route.params.id), // convert to number
      datePickedIndex: null,
      datePicked: null,
      timePicked: null,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    dateClicked(date, index) {
      this.datePicked = date;
      this.datePickedIndex = index;
    },
    timeClicked(time) {
      this.timePicked = time;
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
    selectedTimes() {
      if (this.datePicked === null) return [];
      return this.selectedMovie.showDates[this.datePickedIndex].times;
    },
  },
};
</script>

<template>
  <div class="" v-if="selectedMovie">
    <!--Main small banner + movie name display start-->
    <div class="flex text-center py-4 font-bold rounded-b-lg items-center p-3">
      <button @click="goBack" class="w-8 cursor-pointer">
        <img src="..//assets/arrow_14034409.png" />
      </button>
      <div class="text-[100%] ms-6">{{ selectedMovie.name }}</div>
    </div>
    <!--Main small banner + movie name display end-->

    <!--Banner image display + rating start-->
    <div class="w-full h-80 md:h-[600px] relative">
      <!--Image-->
      <img class="w-full h-full object-cover" :src="selectedMovie.banner" />
      <!--transparent   overlay-->
      <div
        class="h-full w-full absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-white dark:via-gray-900/95 to-transparent"
      ></div>

      <!--rating + movie name-->
      <div
        class="absolute top-60 md:top-30 right-4 flex w-full p-3 items-center md:items-start"
      >
        <div
          class="w-60 hidden md:block h-100 ms-[40px] overflow-hidden rounded-lg"
        >
          <img class="w-full h-full object-cover" :src="selectedMovie.poster" />
        </div>

        <div class="p-4">
          <div class="flex">
            <div class="font-bold text-[130%] md:text-4xl md:text-shadow-lg">
              {{ selectedMovie.name }}
            </div>
            <div
              class="text-white font-bold text-lg px-[5px] py-[5px] rounded-md bg-yellow-400"
            >
              ⭐ {{ selectedMovie.rating }}
            </div>
          </div>
          <div class="hidden lg:flex gap-3 my-3">
            <div
              class="bg-gray-300 px-1 rounded text-black"
              v-for="category in selectedMovie.categories"
            >
              {{ category }}
            </div>
          </div>

          <div class="hidden md:block">
            <div class="hidden md:block text-xl font-bold mt-4">
              Description
            </div>
            <div class="text-lg">{{ selectedMovie.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <!--Banner image display + rating end-->

    <!--Description-->
    <div class="block md:hidden p-3">
      <div class="text-xl font-bold">Description</div>
      <div class="text-gray-400">{{ selectedMovie.description }}</div>
    </div>

    <div class="p-3 text-center">
      <div class="text-lg font-bold mb-3">Dates</div>
      <div class="flex justify-center">
        <div
          @click="dateClicked(date, index)"
          v-for="(date, index) in dateToRender"
          :key="index"
          class="border rounded-md p-3 mx-3 hover:bg-white hover:text-black cursor-pointer"
        >
          {{ date }}
        </div>
      </div>
    </div>

    <div v-if="datePicked !== null" class="mt-4 gap-3 flex-wrap text-center">
      <div class="text-lg font-bold my-2">Times</div>
      <div class="flex justify-center gap-4">
        <div
          @click="timeClicked(time)"
          v-for="(time, i) in selectedTimes"
          :key="i"
          class="border rounded-md px-4 py-2 mb-10 hover:text-black hover:bg-white cursor-pointer"
        >
          {{ time }}
        </div>
      </div>
    </div>
    <seats
      v-if="timePicked !== null"
      :movieId="movieId"
      :datePicked="datePicked"
      :timePicked="timePicked"
    ></seats>
  </div>
</template>
