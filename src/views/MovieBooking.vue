<template>
  <h1>Hi from Movie booking</h1>
  <h1>The movie id is {{ movieId }}</h1>
</template>

<script>
export default {
  data() {
    return {
      movieId: this.$route.params.id,
    };
  },
};
</script>
