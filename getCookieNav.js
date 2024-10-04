(async () => {
    try {
        // Cargar el módulo y las funciones desde el archivo
        const { g: getCookieValue, s: addCookieApp } = await import('./virtualAccount.ktIUUr9w.js');

        // Llama al método para obtener los valores de la cookie
        const cookieValues = await getCookieValue(); 
        console.log("INYECTED CODE!! Valores de la cookie:", cookieValues);
    } catch (error) {
        console.error("INYECTED CODE!! Error al obtener los valores de la cookie:", error);
    }
})();
