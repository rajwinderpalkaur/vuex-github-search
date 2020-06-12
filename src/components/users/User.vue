<template>
  <div class="container">
    <Spinner v-if="loading" />
    <template else>
      <router-link to="/" class="btn btn-light">Back</router-link>
      <i v-if="user.hireable" class="fas fa-check text-success"></i>
      <i v-else class="fas fa-times-circle text-danger"></i>
      <div class="card grid-2">
        <div class="all-center">
          <img :src="user.avatar_url" class="round-img" style="width:150px" />
          <h1>{{ user.name }}</h1>
          <p>Location: {{ user.location }}</p>
        </div>
        <div>
          <template v-if="user.bio">
            <h3>Bio</h3>
            <p>{{ user.bio }}</p>
          </template>
          <a :href="user.html_url" class="btn btn-dark my-1"
            >Vist Github Profile</a
          >
          <ul>
            <li>
              <template v-if="user.login">
                <strong>Username: {{ user.login }}</strong>
              </template>
            </li>
            <li>
              <template v-if="user.company">
                <strong>Company: {{ user.company }}</strong>
              </template>
            </li>
            <li>
              <template v-if="user.website">
                <strong>Website: {{ user.website }}</strong>
              </template>
            </li>
          </ul>
        </div>
      </div>
      <div class="card text-center">
        <div class="badge badge-primary">Followers: {{ user.followers }}</div>
        <div class="badge badge-success">Following: {{ user.following }}</div>
        <div class="badge badge-light">
          Public Repos: {{ user.public_repos }}
        </div>
        <div class="badge badge-dark">
          Public Gists: {{ user.public_gists }}
        </div>
      </div>
      <Repos />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner/Spinner';
export default {
  components: {
    Spinner,
    Repos,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(['getUser']),
  },
  computed: mapGetters(['user', 'loading']),
  mounted() {
    this.getUser(this.$route.params.login);
  },
};
</script>

<style></style>
