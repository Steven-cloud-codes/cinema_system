<script>
export default {
  data() {
    return {
      rows: ["A", "B", "C", "D", "E", "F", "G", "H"],
    };
  },
  methods: {
    output() {
      console.log(this.seats);
    },
  },
  computed: {
    seats() {
      let localSeats = [];
      this.rows.forEach((row) => {
        for (let column = 1; column < 11; column++) {
          let label = row + column;
          localSeats.push(label);
        }
      });
      return localSeats;
    },
  },
};
</script>
<template>
  <div class="grid grid-cols-11 gap-2 p-2">
    <template v-for="(seat, i) in seats" :key="seat">
      <div
        class="w-5 h-8 text-[10px] text-black rounded-lg flex items-center justify-center bg-gray-200"
      >
        {{ seat }}
      </div>

      <!-- spacer column creates aisle -->
      <div v-if="(i + 1) % 10 === 5" class="col-span-1"></div>
    </template>
  </div>
</template>
