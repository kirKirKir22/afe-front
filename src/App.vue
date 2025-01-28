<template>
  <div id="app">
    <nav>
      <router-link to="/register">Регистрация</router-link> |
      <router-link to="/login">Вход</router-link> |
      <router-link to="/reset-password">Восстановление пароля</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  margin-bottom: 20px;
}
</style>
