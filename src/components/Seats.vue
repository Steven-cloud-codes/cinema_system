<script>
import { seatLayout } from "../data/seatLayout";
export default {
  data() {
    return {
      seatLayout,
    };
  },
  methods: {
    click() {
      console.log(this.seatLayout);
    },
  },
  computed: {},
};
</script>
<template>
  <div
    class="w-full flex flex-col items-center p-4 sm:p-6 border-t-2 border-dashed"
  >
    <!-- SCREEN + LIGHT -->
    <div class="relative w-full flex justify-center mb-6 sm:mb-10">
      <!-- light spread -->
      <div
        class="absolute top-6 sm:top-8 w-[260px] sm:w-[360px] md:w-[440px] h-[140px] sm:h-[200px] md:h-[260px] bg-gradient-to-b from-white/50 via-white/25 to-transparent blur-2xl sm:blur-3xl rounded-t-xl pointer-events-none"
      ></div>

      <!-- screen arc -->
      <svg
        class="relative z-10 w-40 h-6 sm:w-56 sm:h-8 md:w-64 md:h-9"
        viewBox="0 0 240 30"
        fill="none"
        aria-label="Screen"
      >
        <path
          d="M20 22 Q120 4 220 22"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          style="filter: drop-shadow(0px 6px 18px rgba(255, 255, 255, 0.7))"
        />
      </svg>
    </div>

    <!-- seats -->
    <div class="flex flex-col gap-3 sm:gap-4">
      <!-- row -->
      <div
        v-for="(row, rowIndex) in seatLayout"
        :key="rowIndex"
        class="grid grid-cols-10 gap-x-3 sm:gap-x-5 md:gap-x-6 justify-items-center"
      >
        <!-- cell -->
        <div v-for="(seat, seatIndex) in row" :key="seatIndex">
          <!-- AISLE / EMPTY SPACE -->
          <div v-if="seat === null" class="w-6 h-6 sm:w-8 sm:h-8"></div>

          <!-- seat -->
          <div
            v-else
            class="w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-gray-800 text-white flex items-center justify-center text-[10px] sm:text-xs cursor-pointer hover:bg-green-500 transition"
          >
            {{ seat }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
