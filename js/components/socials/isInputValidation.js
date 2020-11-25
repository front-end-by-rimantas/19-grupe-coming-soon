function isInputValidation(data) {
    if (!Array.isArray(data)) {
        console.error('ERROR: social ikonom generuoti reikia array tipo duomenu.');
        return false;
    }
    if (data.length === 0) {
        console.error('ERROR: social ikonom generuoti reikia ne tuscio array tipo duomenu saraso.');
        return false;
    }
    return true;
}

export { isInputValidation }