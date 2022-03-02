import english from "./to-numeral/lang/english/index.js";
import englishIndian from "./to-numeral/lang/englishIndian/index.js";
import french from "./to-numeral/lang/french/index.js";
import hindi from "./to-numeral/lang/hindi/index.js";
import gujarati from "./to-numeral/lang/gujarati/index.js";

function setUpTemplates(container, template) {
    for (const lang of languages) {
        const el = template.content.cloneNode(true);
        el.querySelector(".lang").innerText = lang.name;
        lang.valueEl = el.querySelector(".number");
        lang.wordsEl = el.querySelector(".words");
        container.appendChild(el);
    }
}


function updateWords(value) {
    for (const lang of languages) {
        lang.valueEl.innerText = value.toLocaleString(lang.format);
        lang.wordsEl.innerText = lang.fn.toWords(value);
    }
}

let view = 0;
function changeLayout(index, buttons, container) {
    console.log({ index, view });
    if (index === view) return;

    buttons[index].classList.add("icon-button-active");
    buttons[index == 0 ? 1 : 0].classList.remove("icon-button-active");

    if (index == 0) container.classList.add("grid");
    else container.classList.remove("grid");

    view = index;
}


const languages = [
    { name: "English", fn: english, format: 'en' },
    { name: "English (Indian)", fn: englishIndian, format: 'en-IN' },
    { name: "French", fn: french, format: 'en' },
    { name: "Hindi", fn: hindi, format: 'en-IN' },
    { name: "Gujarati", fn: gujarati, format: 'en-IN' },
];

function setUp() {
    const template = document.getElementById("template-output");
    const container = document.getElementById("outputs");
    const languageCountEl = document.querySelector(".language-count");
    const inputEl = document.getElementById("input");
    const layoutButtons = document.querySelectorAll(".icon-button");

    layoutButtons[0].addEventListener("click", () => changeLayout(0, layoutButtons, container));
    layoutButtons[1].addEventListener("click", () => changeLayout(1, layoutButtons, container));

    languageCountEl.innerText = languages.length + " languages";

    setUpTemplates(container, template);

    inputEl.addEventListener("keypress", event => {
        const charCode = event.key.charCodeAt(0);
        if (!(charCode >= 48 && charCode <= 57)) {
            event.preventDefault();
        }
    });

    inputEl.addEventListener("input", event => {
        updateWords(+event.target.value);
    });

    updateWords(+inputEl.value);
}

setUp();
