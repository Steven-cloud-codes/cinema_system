<script>
import { seatLayout } from "../data/seatLayout";
export default {
  data() {
    return {
      seatLayout,
      selectedSeats: [],
    };
  },
  methods: {
    click() {
      console.log(this.key);
      console.log(this.selectedSeats);
    },
    seatSelect(seat) {
      if (this.takenSeats.includes(seat)) {
        alert("this seat is already taken.");
        return;
      }

      if (this.selectedSeats.includes(seat)) {
        this.selectedSeats = this.selectedSeats.filter(
          (selectedSeat) => selectedSeat !== seat,
        );
      } else {
        this.selectedSeats.push(seat);
      }
      console.log(this.selectedSeats);
    },
    book() {
      //get the key
      const showKey = this.key;

      //if the bookings is set take the item , if not set empty {}
      const allBookings = JSON.parse(localStorage.getItem("bookings")) || {};

      //getting the selected seats from that key , if that key is not selected set empty array
      const existingSeats = allBookings[this.key] || [];

      //updated seats from the previous + slected Seats
      const updatedSeats = [...existingSeats, ...this.selectedSeats];

      //from the all bookings pick the showkey and put the updated seats.
      allBookings[showKey] = updatedSeats;

      //set the data back to the local storage
      localStorage.setItem("bookings", JSON.stringify(allBookings));

      //empty the selectedSeats
      this.selectedSeats = [];

      location.reload();
    },
  },
  computed: {
    key() {
      return `${this.movieId}_${this.datePicked}_${this.timePicked}`;
    },
    takenSeats() {
      const bookings = JSON.parse(localStorage.getItem("bookings")) || {};
      return bookings[this.key] || [];
    },
  },
  props: ["movieId", "datePicked", "timePicked"],
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
            @click="seatSelect(seat)"
            :class="[
              'w-6 h-6 sm:w-8 sm:h-8 rounded-md',
              'flex items-center justify-center text-[10px] sm:text-xs',
              {
                'bg-red-500 cursor-not-allowed': takenSeats.includes(seat),
                'bg-green-500 cursor-pointer': selectedSeats.includes(seat),
                'bg-gray-800 cursor-pointer hover:bg-green-300':
                  !takenSeats.includes(seat) && !selectedSeats.includes(seat),
              },
            ]"
          >
            {{ seat }}
          </div>
        </div>
      </div>
    </div>
    <button class="bg-blue-600 p-3 rounded-lg" @click="book">Book</button>
  </div>
</template>
