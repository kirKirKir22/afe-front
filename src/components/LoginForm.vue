<template>
  <div class="form-container">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="credentials.email" required />
      </div>
      <div>
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="credentials.password" required />
      </div>
      <button type="submit">Войти</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      credentials: {
        email: "",
        password: "",
      },
      message: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await api.login(this.credentials);
        this.message = "Успешный вход! Токен: " + response.data.token;
        this.credentials = { email: "", password: "" };
      } catch (error) {
        this.message = "Ошибка входа: " + (error.response?.data || "неизвестная ошибка");
      }
    },
  },
};
</script>
