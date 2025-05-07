const btnGenerate = document.getElementById("btn-generate");
const btnCopy = document.getElementById("btn-copy");

if (btnGenerate && btnCopy) {
    btnGenerate.addEventListener("click", () => generatePassword("password-generated"));
    btnCopy.addEventListener("click", () => copyPassword("password-generated"));
}

const generatePassword = (passwordId: string) => {
    const passwordElement = document.getElementById(passwordId);
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#@$%';
    let passwordGenerated: string = '';

    for (let i = 0; i < 10; i++) {
        const index = Math.floor(Math.random() * chars.length);
        passwordGenerated += chars[index];
    }

    if (passwordElement) {
        passwordElement.innerText = passwordGenerated;
        return;
    }

    console.log("passwordId não encotrado.")
}

const copyPassword = (passwordId: string) => {
    const passwordElement = document.getElementById(passwordId)?.textContent || "";

    navigator.clipboard.writeText(passwordElement);
}