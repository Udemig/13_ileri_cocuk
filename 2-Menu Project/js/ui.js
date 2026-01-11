// Html kısmındaki elemanları javascript kısmına çek
const uiElements = {
  menuArea: document.querySelector(".menu-area"),
  buttons: document.querySelectorAll(".filter-btn"),
  
  // querySelector metodu belirtilen seçiciye sahip birden fazla eleman varsa bunlardan ilk bulduğunu alır.Bu noktada aynı seçiciye sahip birden fazla elemanı almak için querySelector yerine querySelectorAll kullanılır.
};

// Menu elemanlarını render eden fonksiyon
const renderMenu = (menu) => {
  // menu'yü dön ve her bir menü elemanı için bir kart html'i oluştur
  const menuHtml = menu
    .map(
      (menuItem) => `  <div class="card">

      <div class="card-image">
       <img src="${menuItem.img}" alt="menu-image" />
       </div>
           
        <div class="card-info">
          
          <div class="top">
            <h3>${menuItem.title}</h3>
            <p>$${(menuItem.price * 5).toFixed(2)}</p>
          </div>
          
          <p class="desc">
          ${menuItem.desc}
          </p>
        </div>
      </div>`
    )
    .join("");

  // Oluşturulan kartları arayüze ekle.Yani menuArea'nın html'ini belirle
  uiElements.menuArea.innerHTML = menuHtml;
};

export { uiElements, renderMenu };
