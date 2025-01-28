<template>
  <div class="form-container">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <div>
        <label for="fullName">Полное имя</label>
        <input type="text" id="fullName" v-model="user.fullName" required/>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" required/>
      </div>
      <div>
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="user.password" required/>
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
        fullName: "",
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
        this.user = {fullName: "", email: "", password: ""};
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
