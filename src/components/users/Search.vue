<template>
  <div>
    <form class="form" @submit="onSubmit">
      <input type="text" name="text" placeholder="Search users.." v-model="text" />
      <input type="submit" value="Search" class="btn btn-dark btn-block" />
    </form>
    <!-- <button v-if="users.length > 0" class="btn btn-light btn-block" onclick="{clearUsers}">Clear</button> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    ...mapActions(["searchUsers", "setAlert"]),
    onSubmit(e) {
      e.preventDefault();
      if (this.text === "") {
        this.setAlert("Please Enter Something");
      } else {
        this.searchUsers(this.text);
        this.text = "";
      }
    }
  }
};
</script>

<style></style>
