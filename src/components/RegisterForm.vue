<template>
  <div class="form-container">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <div>
        <label for="firstName">Имя</label>
        <input type="text" id="firstName" v-model="user.firstName" required />
      </div>
      <div>
        <label for="lastName">Фамилия</label>
        <input type="text" id="lastName" v-model="user.lastName" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" required />
      </div>
      <div>
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="user.password" required minlength="6" />
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      message: "",
    };
  },
  methods: {
    async register() {
      try {
        await api.register(this.user);
        this.message = "Регистрация прошла успешно!";
        this.user = { firstName: "", lastName: "", email: "", password: "" };
      } catch (error) {
        this.message = "Ошибка регистрации: " + (error.response?.data || "неизвестная ошибка");
      }
    },
  },
};
</script>

<style>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
