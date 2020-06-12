<template>
  <div v-if="showAlert" :class="`alert alert-danger`">
    <i class="fas fa-info-circle"></i>
    {{showAlert.msg}}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["showAlert"]),
  mounted() {
    console.log(this.showAlert);
  }
};
</script>

<style></style>
