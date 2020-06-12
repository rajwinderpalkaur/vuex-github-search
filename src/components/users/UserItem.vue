<template>
  <div class="card text-center">
    <img :src="user.avatar_url" alt class="round-img" style="width:60px" />
    <h3>{{ user.login }}</h3>
    <div>
      <router-link :to="`user/${user.login}`" class="btn btn-dark btn-sm my-1">More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
    id: Number
  }
};
</script>

<style></style>
