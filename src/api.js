import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080/api/auth", // Адрес бэка
    headers: {
        "Content-Type": "application/json",
    },
});

// API клиента для Keycloak
export const keycloakClient = axios.create({
    baseURL: "http://localhost:8081/auth", // Keycloak
    headers: {
        "Content-Type": "application/json",
    },
});

export default {
    // Регистрация
    register(user) {
        return apiClient.post("/register", user);
    },
    // Вход
    login(credentials) {
        return apiClient.post("/login", credentials);
    },
    // Сброс пароля
    resetPassword(email) {
        return apiClient.put(`/reset-password/${email}`);
    },
};
