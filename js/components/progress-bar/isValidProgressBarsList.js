function isValidProgressBarsList(list) {
    if (!Array.isArray(list)) {
        console.error('ERROR: turi buti array tipo duomenys.');
        return false;
    }
    if (list.length === 0) {
        console.error('ERROR: array negali buti tuscias.');
        return false;
    }

    return true;
}

export { isValidProgressBarsList }