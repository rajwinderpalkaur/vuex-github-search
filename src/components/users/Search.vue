<template>
  <div>
    <form class="form" @submit="onSubmit">
      <input
        type="text"
        name="text"
        placeholder="Search users.."
        v-model="text"
      />
      <input type="submit" value="Search" class="btn btn-dark btn-block" />
    </form>
    <!-- <button
      v-if="users.length > 0"
      class="btn btn-light btn-block"
      onClick="{clearUsers}"
    >
      Clear
    </button> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      text: '',
    };
  },
  methods: {
    ...mapActions(['searchUsers']),
    onSubmit(e) {
      e.preventDefault();
      this.searchUsers(this.text);
    },
  },
};
</script>

<style></style>
