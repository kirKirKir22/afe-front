<template>
  <div class="form-container">
    <h2>Восстановление пароля</h2>
    <form @submit.prevent="resetPassword">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <button type="submit">Сбросить пароль</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      email: "",
      message: "",
    };
  },
  methods: {
    async resetPassword() {
      try {
        await api.resetPassword(this.email);
        this.message = "Пароль успешно сброшен!";
        this.email = "";
      } catch (error) {
        this.message = "Ошибка восстановления пароля: " + (error.response?.data || "неизвестная ошибка");
      }
    },
  },
};
</script>
