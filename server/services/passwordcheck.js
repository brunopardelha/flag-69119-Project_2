const check = (passOne, passTwo) => {

    function length(pass) {
        return (pass?.length >= 6)
    }

    function compareTwo(pass1, pass2) {
        return pass1 === pass2
    }

    function severalChecks(pass) {
        // (?=.*[a-z])	at least 1 lowercase alphabetical character
        // (?=.*[A-Z])	at least 1 uppercase alphabetical character
        // (?=.*[0-9])  at least 1 numeric character or
        // (?=.*\d)	    at least 1 numeric character

        const passwordformat = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
        return passwordformat.test(pass)
    }

    return (length(passOne) && compareTwo(passOne, passTwo) && severalChecks(passOne))
}

module.exports = check;