const translations = {
    en: {
        headline: "Love K-Dramas? Learn Korean Now!",
        subline: "Enjoy your favorite series without subtitles by mastering Korean with our engaging course.",
        ctaText: "Register today and elevate your drama experience!",
        ctaButton: "Learn more",
        footerText: "© 2024 Online Korean Course <br>Contact US:<br>8(777)8988706<br>Astana, Kazakhstan<br>Office street:<br>Avenue Mangilik-El C1",
        nav: {
            home: "Home",
            about: "About Us",
            test: "Test",
            course: "Course",
            resources: "Resources"
        }
    },
    ru: {
        headline: "Любите K-дорамы? Учите корейский прямо сейчас!",
        subline: "Наслаждайтесь любимыми сериалами без субтитров, освоив корейский язык с нашим увлекательным курсом.",
        ctaText: "Зарегистрируйтесь сегодня и улучшите свой опыт просмотра!",
        ctaButton: "Узнать больше",
        footerText: "© 2024 Онлайн Курс Корейского Языка <br>Свяжитесь с нами:<br>8(777)8988706<br>Астана, Казахстан<br>Улица офиса:<br>Проспект Мангилик-Ел C1",
        nav: {
            home: "Главная",
            about: "О нас",
            test: "Тест",
            course: "Курс",
            resources: "Ресурсы"
        }
    }
};


function setLanguage(lang) {
    document.getElementById("headline").textContent = translations[lang].headline;
    document.getElementById("subline").textContent = translations[lang].subline;
    document.getElementById("cta-text").textContent = translations[lang].ctaText;
    document.getElementById("cta-button").textContent = translations[lang].ctaButton;
    document.getElementById("footer-text").innerHTML = translations[lang].footerText;

    document.getElementById("nav-home").textContent = translations[lang].nav.home;
    document.getElementById("nav-about").textContent = translations[lang].nav.about;
    document.getElementById("nav-test").textContent = translations[lang].nav.test;
    document.getElementById("nav-course").textContent = translations[lang].nav.course;
    document.getElementById("nav-resources").textContent = translations[lang].nav.resources;
}
function showForm(formId) {
            document.querySelectorAll('.form').forEach(form => {
                form.classList.remove('active');
            });
            document.getElementById(formId).classList.add('active');
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelector(`[onclick="showForm('${formId}')"]`).classList.add('active');
        }

        