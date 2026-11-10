
document.addEventListener("DOMContentLoaded", () => {

    // MOBILE MENU
    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
            menuBtn.textContent =
                nav.classList.contains("active") ? "✕" : "☰";
        });
    }

    // MASTERS DATA
    const servicesData = {

        manicure: {
            title: "Наши мастера маникюра",
            description: "Искусство красивых и ухоженных ногтей.",
            masters: [
                {
                    name: "Анна",
                    role: "TOP NAIL MASTER",
                    experience: "5 лет опыта",
                    price: "от 1500 сом",
                    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600",
                    works: [
                        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600",
                        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600",
                        "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600"
                    ]
                },
                {
                    name: "Мария",
                    role: "NAIL MASTER",
                    experience: "3 года опыта",
                    price: "от 1200сом",
                    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
                    works: [
                        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600",
                        "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600",
                        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600"
                    ]
                }
            ]
        },

        cosmetology: {
            title: "Наши косметологи",
            description: "Профессиональный уход за твоей кожей.",
            masters: [
                {
                    name: "Елена",
                    role: "COSMETOLOGIST",
                    experience: "7 лет опыта",
                    price: "от 2000 сом",
                    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600",
                    works: [
                        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600",
                        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
                        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600"
                    ]
                }
            ]
        },

        brows: {
            title: "Наши brow-мастера",
            description: "Естественная красота и выразительный взгляд.",
            masters: [
                {
                    name: "София",
                    role: "BROW MASTER",
                    experience: "4 года опыта",
                    price: "от 1500 сом",
                    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
                    works: [
                        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
                        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600"
                    ]
                }
            ]
        }
    };

    // OPEN SERVICE
    const buttons = document.querySelectorAll(".service-link");
    const details = document.getElementById("serviceDetails");
    const content = document.getElementById("serviceContent");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const service = servicesData[button.dataset.service];

            if (!service || !details || !content) {
                console.error("Не найдена услуга или блок мастеров");
                return;
            }

            const mastersHTML = service.masters.map(master => `

                <article class="master-card">

                    <div class="master-profile">

                        <img
                            class="master-photo"
                            src="${master.photo}"
                            alt="${master.name}"
                        >

                        <div class="master-info">

                            <span class="master-role">
                                ${master.role}
                            </span>

                            <h3>${master.name}</h3>

                            <p>${service.description}</p>

                            <div class="master-meta">
                                ${master.experience}
                            </div>

                            <div class="master-price">
                                ${master.price}
                            </div>

                            <a href="#contacts" class="main-btn">
                                ЗАПИСАТЬСЯ ↗
                            </a>

                        </div>

                    </div>

                    <div class="master-portfolio">

                        <h4>РАБОТЫ МАСТЕРА</h4>

                        <div class="works-gallery">

                            ${master.works.map(photo => `
                                <img src="${photo}" alt="Работа мастера ${master.name}" loading="lazy">
                            `).join("")}

                        </div>

                    </div>

                </article>

            `).join("");

            content.innerHTML = `

                <div class="details-heading">

                    <span class="eyebrow">
                        ÉLÉGANCE / OUR TEAM
                    </span>

                    <h2>${service.title}</h2>

                    <p>${service.description}</p>

                </div>

                <div class="masters-list">
                    ${mastersHTML}
                </div>

            `;

            details.classList.add("visible");

            details.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    console.log("ÉLÉGANCE успешно запущен!");
    console.log("Найдено кнопок:", buttons.length);

});
