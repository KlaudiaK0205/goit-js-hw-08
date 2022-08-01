import { throttle } from 'lodash';

const form = document.querySelector("form.feedback-form");
const input = document.querySelector("input");
const textArea = document.querySelector("textarea");

form.addEventListener("input", throttle((event) => {
    const input = { email: form.elements.email.value, message: form.elements.message.value };
    localStorage.setItem("feedback-form-state", JSON.stringify(input));
}, 500));

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { elements: { email, message } } = event.currentTarget;

    console.log({ email: email.value, message: message.value });
    
    event.currentTarget.reset();
    localStorage.clear();
});

const storage = localStorage.getItem("feedback-form-state");
const parseStorageData = JSON.parse(storage);
const tryFoo = () => {
    if (parseStorageData !== null) {
        input.value = parseStorageData.email;
        textArea.value = parseStorageData.message;
    };
};

tryFoo();

// DONE