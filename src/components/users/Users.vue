<template>
  <div>
    <Spinner v-if="loading" />
    <div else class="userGrid">
      <UserItem
        v-for="user in allUsers"
        :key="user.id"
        :user="user"
        :id="user.id"
      />
    </div>
  </div>
</template>

<script>
import UserItem from './UserItem';
import { mapGetters } from 'vuex';
import Spinner from '../layout/Spinner/Spinner';
export default {
  components: { UserItem, Spinner },
  data() {
    return {
      userdata: '',
    };
  },
  methods: {
    // ...mapActions(['setLoading']),
  },
  computed: mapGetters(['allUsers', 'loading']),
  mounted() {
    // this.setLoading();
    // this.getsearchUsers();
  },
};
</script>

<style scoped>
.userGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>
