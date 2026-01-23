<script>
import { movies } from "../data/movies";
export default {
  data() {
    return { movies };
  },
  methods: {
    comfirmBooking() {
      this.$emit("comfirmBooking");
    },
  },
  props: ["selectedMovie", "selectedSeats"],
  computed: {
    totalPrice() {
      return this.selectedMovie.price * this.selectedSeats.length;
    },
  },
};
</script>
<template>
  <div
    class="bg-black text-white md:h-[15vh] rounded-t-xl p-4 lg:absolute lg:fixed lg:right-0 lg:top-0 lg:h-full lg:w-80 lg:rounded-none"
    v-if="selectedSeats.length !== 0"
  >
    <div class="text-lg lg:text-2xl font-bold text-yellow-400">
      {{ selectedMovie.name }}
    </div>

    <div class="hidden lg:flex my-3 gap-2">
      <div
        v-for="(category, index) in selectedMovie.categories"
        :key="category"
        class="text-gray-300 text-sm"
      >
        {{ category
        }}<span v-if="index !== selectedMovie.categories.length - 1">,</span>
      </div>
    </div>

    <div class="md:hidden text-gray-200">
      Selected: {{ selectedSeats.length }} seats • $ {{ totalPrice }}
    </div>

    <!-- Desktop content (hidden on mobile) -->
    <div class="hidden lg:block mt-4">
      <div class="text-gray-300 mb-2">
        Selected {{ selectedSeats.length }} seat(s)
      </div>
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="seat in selectedSeats"
          :key="seat"
          class="bg-gray-800 px-3 py-1.5 rounded text-gray-100"
        >
          {{ seat }}
        </span>
      </div>
      <div class="text-2xl font-bold mb-6 text-yellow-400">
        Total: ${{ totalPrice }}
      </div>
    </div>

    <div class="flex justify-center">
      <button
        @click="comfirmBooking"
        class="w-90 p-2 my-3 rounded-md bg-yellow-500 hover:bg-yellow-400 text-black font-semibold lg:w-full lg:py-3 lg:text-lg lg:font-bold"
      >
        Confirm Booking
      </button>
    </div>
  </div>
</template>
