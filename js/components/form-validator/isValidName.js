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

    // turi buti tik abeceles raides
    const abc = 'qwertyuiopasdfghjklzxcvbnm';
    for (let letter of name) {
        if (!abc.includes(letter.toLowerCase())) {
            return `Varde panaudota neleistinas simbolis (${letter}).`;
        }
    }

    // jei gauto vardo raides pavertus mazosiomis yra lygu pradinei reiksmei, tai reiskia, jog vardas ir buvo vien tik is mazuju raidziu
    if (name.toLowerCase() === name) {
        return 'Vardas negali buti vien tik is mazuju raidziu';
    }

    // jei pagauname, jog ivesta vien didziosiomis, tai grazinam zinute - isjunk CapsLock

    const realNameFormat = name[0].toUpperCase() + name.slice(1).toLowerCase();
    if (realNameFormat !== name) {
        return 'Varda turi sudaryti pirma didzioji raide ir likusios mazosios raides.';
    }

    return true;
}

export { isValidName }