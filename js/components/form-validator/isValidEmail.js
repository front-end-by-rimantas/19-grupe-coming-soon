function isValidEmail(email) {
    const maxEmailLength = 50;

    if (typeof email !== 'string') {
        return 'El. pastas turi buti teksto tipo.';
    }
    if (email === '') {
        return 'El. pastas negali buti tuscias.';
    }
    if (email.length > maxEmailLength) {
        return `El. pastas negali buti ilgesnis nei ${maxEmailLength} simboliu (virsyta ${email.length - maxEmailLength} simboliu).`;
    }
    return true;
}

export { isValidEmail }