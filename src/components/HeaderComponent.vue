<template>
  <section id="header" class="d-flex justify-content-between">
    <h1 class="boolflix text-uppercase ms-3 mt-2">
      <img :src="'/public/images/boolflix.png'" alt="" />
    </h1>
    <SearchBarComponent />
  </section>
</template>

<script>
import SearchBarComponent from "./SearchBarComponent.vue";
export default {
  components: { SearchBarComponent },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#header {
  width: 100%;

  background-color: rgba(35, 35, 35, 0.8);
  height: 100px;

  h1 {
    color: $netflixred;
    font-weight: 600;
  }
  select {
    width: 100%;
  }
}
</style>