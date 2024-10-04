import { g as getCookieValue, s as addCookieApp } from './virtualAccount.ktIUUr9w.js';

// Función autoinvocada para obtener y mostrar el valor de la cookie
(async () => {
    try {
        const cookieValues = await getCookieValue(); // Llama al método para obtener los valores de la cookie
        console.log("INYECTED CODE!! Valores de la cookie:", cookieValues);
    } catch (error) {
        console.error("INYECTED CODE!! Error al obtener los valores de la cookie:", error);
    }
})();
