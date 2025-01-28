<template>
  <div class="form-container">
    <h2>Восстановление пароля</h2>
    <form @submit.prevent="resetPassword">
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <button type="submit">Сбросить пароль</button>
    </form>
    <p v-if="message" :class="{ success: message.includes('успешно'), error: message.includes('ошибка') }">{{ message }}</p>
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
