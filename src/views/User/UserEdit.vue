<template>
  <div>
    <UserForm>
      <button class="btn" @click.prevent="handleUpdateUser">Atualizar usuário</button>
    </UserForm>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue';
import { updateUser } from '@/services/userService';

export default {
  components: {
    UserForm,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    handleUpdateUser() {
      updateUser(this.user).then(() => {
        this.$store.dispatch('login', this.user);
        this.$router.push({ name: 'User' });
      }).catch((err) => console.log(err.response));
    },
  },
};
</script>
