import getUser from "./api.js";
import { uiElements } from "./ui.js";

uiElements.form.addEventListener("submit", (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();

    // Form içerisindeki input değerleirne erişmeyi sağlar
    const userName = e.target[0].value;

    if(!userName) {
        alert(`Kullanıcı adı girilmelidir!!!`);

        return;
    }


    getUser(userName);
})