<template>
  <div class="form-container">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="credentials.email" required />
      </div>
      <div class="input-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="credentials.password" required />
      </div>
      <button type="submit">Войти</button>
    </form>
    <p v-if="message" :class="{ success: message.includes('успешный'), error: message.includes('ошибка') }">{{ message }}</p>
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

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

input:focus {
  border-color: #5a9;
  outline: none;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #5a9;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #4a8;
}

p {
  text-align: center;
  margin-top: 15px;
  font-size: 1rem;
}

.success {
  color: #4caf50;
}

.error {
  color: #f44336;
}
</style>
