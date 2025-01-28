import { createRouter, createWebHistory } from "vue-router";
import RegisterForm from "./components/RegisterForm.vue";
import LoginForm from "./components/LoginForm.vue";
import ResetPassword from "./components/ResetPassword.vue";

const routes = [
    { path: "/", redirect: "/register" },
    { path: "/register", component: RegisterForm },
    { path: "/login", component: LoginForm },
    { path: "/reset-password", component: ResetPassword },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
