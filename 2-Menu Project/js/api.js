import { renderMenu } from "./ui.js";

// Api'dan verileri alan fonksiyon
const getMenu = async () => {
  // Api'a istek at
  const response = await fetch("../db.json");

  // Api'dan gelen json veriyi js nesnesine çevir
  const data = await response.json();

  // Menu elemanlarını bir değişkene aktar
  const menuItems = data.menu;

  // Menu elemanları için birer kart oluşturacak fonksiyon

  renderMenu(menuItems);

  // Filtreleme kısmı için menuItems'i return et
  return menuItems;
};

export default getMenu;
