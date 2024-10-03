
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const dataFromAndroid = getCookie("data-from-android");
const virtualAccount = getCookie("virtual-account");

console.log(dataFromAndroid);
console.log(virtualAccount);

window.alert(dataFromAndroid)
window.alert(virtualAccount)
