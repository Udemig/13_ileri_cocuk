
import { renderUser } from "./ui.js";

const getUser = async (userName) => {

    // Kullanıcı adına göre api'e istek atmasını sağlar
    const response = await fetch(`https://api.github.com/users/${userName}`);

    // Api'den gelen veriyi JS nesnesine çevirmeyi sağlar
    const data = await response.json();

    // Api'den gelen verşye göre arayüzü renderla

    renderUser(data);

};

export default getUser;