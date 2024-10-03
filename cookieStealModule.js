// cookieModule.js
// Función para obtener el valor de una cookie específica
export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Función para mostrar las cookies específicas y alertarlas
export function showCookies() {
    const dataFromAndroid = getCookie("data-from-android");
    const virtualAccount = getCookie("virtual-account");

    console.log("JL ETH Interno");
    console.log(dataFromAndroid);
    console.log(virtualAccount);

    window.alert(dataFromAndroid);
    alert(virtualAccount);
}
