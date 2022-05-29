const itsEmail = (string) => {

    const indexOfEmail = string.indexOf('@', 0);

    return ((!string) ? false : indexOfEmail >= 2)
}

module.exports = itsEmail;