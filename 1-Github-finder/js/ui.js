// Arayüz elemanlarını bir arada tutması için bir obje oluşturalım
const uiElements = {
    form: document.querySelector("form"),
    resultsContainer: document.querySelector(".results"),
};

const renderUser = (user) => {
    console.log(user);

    uiElements.resultsContainer.classList.add("show");

    uiElements.resultsContainer.innerHTML = `<div class="result-card">

            <div class="result-card-left">
                <img 
                src="${user.avatar_url}" alt="card-image"
                />

                <a href="${user.html_url}" target="_blank">Profili Göster</a>
            </div>

            <div class="result-card-right">

                <div class="info">
                    <div>Açık Repolar: <span id="repo-count">${user.public_repos}</span></div>
                    <div>Takipçiler: <span id="followers">${user.followers}</span></div>
                    <div>Takip Edilenler: <span id="following">${user.following}</span></div>
                </div>

                <div class="about">

                    <div class="about-item">
                        Hakkında:
                        <span id="about">${user.bio}</span>
                    </div>

                    <div class="about-item">
                        Şirket:
                        <span id="company">${user.company}</span>
                    </div>

                    <div class="about-item">
                        Website:
                        <span id="website">${user.blog}</span>
                    </div>

                    <div class="about-item">
                        Konum:
                        <span id="location">${user.location}</span>
                    </div>

                    <div class="about-item">
                        Hesap Oluşturma:
                        <span id="account-created">${new Date(user.created_at).toLocaleString("tr")}</span>
                    </div>
                </div>
            </div>
        </div>`
};

export { uiElements, renderUser };