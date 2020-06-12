<template>
  <div class="container">
    <Search />
    <Users />
  </div>
</template>

<script>
import Users from "../users/Users";
import Search from "../users/Search";
export default {
  components: {
    Users,
    Search
  }
};
</script>

<style></style>
