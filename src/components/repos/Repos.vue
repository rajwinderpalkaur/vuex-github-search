<template>
  <div>
    <RepoItem v-for="repo in allRepos" :key="repo.id" :repo="repo" />
  </div>
</template>

<script>
import RepoItem from './RepoItem';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    RepoItem,
  },
  methods: {
    ...mapActions(['getUserRepos']),
  },
  computed: mapGetters(['allRepos', 'loading']),
  mounted() {
    this.getUserRepos(this.$route.params.login);
  },
};
</script>

<style></style>
