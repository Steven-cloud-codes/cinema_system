<script>
import NowShowingPopular from "./components/nowShowingPopular.vue";
import nowShowing from "./components/nowShowing.vue";

export default {
  components: { NowShowingPopular, nowShowing },

  data() {
    return {
      isDark: false,
    };
  },

  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;

      document.documentElement.setAttribute(
        "data-theme",
        this.isDark ? "dark" : "light"
      );

      localStorage.setItem("theme", this.isDark ? "dark" : "light");
    },
  },

  mounted() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      this.isDark = true;
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  },
};
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white"
  >
    <!-- Toggle Button -->
    <div class="flex justify-end p-4">
      <button
        @click="toggleTheme"
        class="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition"
      >
        {{ isDark ? " Dark" : "Light" }}
      </button>
    </div>

    <NowShowingPopular />
    <nowShowing />
  </div>
</template>
