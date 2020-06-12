<template>
  <div class="card">
    <h3>
      <a :href="repo.html_url">{{ repo.name }}</a>
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    repo: Object,
  },
};
</script>

<style></style>
