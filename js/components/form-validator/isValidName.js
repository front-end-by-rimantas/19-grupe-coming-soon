function isValidName(name) {
    const maxNameLength = 50;

    if (typeof name !== 'string') {
        return 'Vardas turi buti teksto tipo.';
    }
    if (name === '') {
        return 'Vardas negali buti tuscias.';
    }
    if (name.length > maxNameLength) {
        return `Vardas negali virsyti ${maxNameLength} simboliu (virsyta ${name.length - maxNameLength} simboliu).`;
    }
    return true;
}

export { isValidName }