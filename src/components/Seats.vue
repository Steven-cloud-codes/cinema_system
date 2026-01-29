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
        this.$emit("selectedSeatsEmission", this.selectedSeats);
      } else {
        this.selectedSeats.push(seat);
        this.$emit("selectedSeatsEmission", this.selectedSeats);
      }
      console.log(this.selectedSeats);
      console.log("vip seats are " + this.vipSeats);
      console.log(this.selectedSeats);
    },
  },
  mounted() {
    this.$emit("vip-seats", this.vipSeats);
  },
  computed: {
    //this is the special indentifier key for booked seats for every movie and times
    key() {
      return `${this.movieId}_${this.datePicked}_${this.timePicked}`;
    },
    takenSeats() {
      const bookings = JSON.parse(localStorage.getItem("bookings")) || {};
      return bookings[this.key] || [];
    },

    //vip seats return
    vipSeats() {
      const vipSeats = []; //empty array

      this.seatLayout.forEach((row) => {
        row.forEach((seat) => {
          if (
            seat &&
            (seat.includes("D") || seat.includes("E"))
          ) //check if the seat is null , else check if the seat includes D or E
          {
            const lastChar = seat.slice(-1); //get the last char of the seat no , to pick the number 3 to 6
            if (["3", "4", "5", "6"].includes(lastChar)) {
              vipSeats.push(seat);
            }
          }
        });
      });

      return vipSeats;
    },

    seatStatus() {
      return (seat) => {
        if (this.takenSeats.includes(seat)) return "booked";
        if (this.selectedSeats.includes(seat)) return "selected";
        if (this.vipSeats.includes(seat)) return "vip-available"; // FIXED: typo
        return "standard-available";
      };
    },

    isVipSeat() {
      return (seat) => {
        return this.vipSeats.includes(seat);
      };
    },

    isSeatAvailable() {
      return (seat) => {
        return !this.takenSeats.includes(seat);
      };
    },

    baseClasses() {
      return (seat) => {
        const status = this.seatStatus(seat);

        return {
          // Booked
          "bg-red-500 cursor-not-allowed opacity-60": status === "booked",

          // Selected (Standard)
          "bg-green-500 cursor-pointer ":
            status === "selected" && !this.isVipSeat(seat),

          // Selected (VIP)
          "bg-gradient-to-br from-green-500 to-emerald-500 cursor-pointer ":
            status === "selected" && this.isVipSeat(seat),

          // Available (VIP)
          "bg-gradient-to-br from-amber-500 to-yellow-500 cursor-pointer  ":
            status === "vip-available",

          // Available (Standard)
          "bg-gray-800 cursor-pointer hover:bg-green-300  ":
            status === "standard-available",
        };
      };
    },

    // VIP-specific enhancements
    vipEnhancements() {
      return (seat) => {
        if (!this.isVipSeat(seat)) return {};

        const isAvailable = this.isSeatAvailable(seat);
        const isSelected = this.seatStatus(seat) === "selected";

        return {
          "border-2 border-yellow-400": true, // Always border for VIP
          "shadow-md": isAvailable,
          "hover:shadow-lg": isAvailable && !isSelected,
        };
      };
    },

    // VIP badge classes
    vipBadgeClasses() {
      return (seat) => {
        if (!this.isVipSeat(seat) || !this.isSeatAvailable(seat)) return [];

        const isSelected = this.seatStatus(seat) === "selected";

        return [
          "absolute -top-1 -right-1 text-[6px] rounded-full w-3 h-3",
          "flex items-center justify-center border",
          isSelected
            ? "bg-yellow-300 text-black border-yellow-500"
            : "bg-yellow-500 text-black border-yellow-600",
        ];
      };
    },
  },
  props: ["movieId", "datePicked", "timePicked", "seatToCancel"],
  props: ["movieId", "datePicked", "timePicked", "seatToCancel"], // CHANGED: seatToCancel

  watch: {
    seatToCancel(newSeat) {
      if (newSeat) {
        // Remove single seat
        this.selectedSeats = this.selectedSeats.filter(
          (seat) => seat !== newSeat,
        );
        this.$emit("selectedSeatsEmission", this.selectedSeats);
      }
    },
  },
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
              'w-6 h-6 sm:w-8 sm:h-8 rounded-md text-white ',
              'flex items-center justify-center text-[10px] sm:text-xs',
              'relative transition-all duration-200',

              // Base classes based on status
              baseClasses(seat),

              // VIP enhancements (additive)
              vipEnhancements(seat),
            ]"
          >
            {{ seat }}

            <!-- VIP badge using computed -->
            <span
              v-if="isVipSeat(seat) && isSeatAvailable(seat)"
              :class="vipBadgeClasses(seat)"
            >
              ⭐
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
