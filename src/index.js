module.exports = function toReadable (number) {
    let num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    let secondDigits = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    let newNumber = number;
    let tens = Math.floor(number / 10);
    let result;
    let hundred = `${num[Math.floor(number / 100)]} hundred`;
    if (number < 20) {
        return result = num[newNumber]
    }
    else if (Number(String(newNumber)[1]) === 0 && newNumber >=20 && newNumber < 100) {
        return result = secondDigits[tens - 2]
    }
    else if (newNumber > 20 && newNumber < 100) {
       return result = `${secondDigits[tens - 2]} ${num[String(newNumber)[1]]}`;
    }
    else if (number < 1000 && number % 100 === 0) {
        return result = `${hundred}`
    }
    else if (number >= 100 && number < 1000) {
        newNumber = Number(String(number).slice(1));
        tens = Math.floor(newNumber / 10);
        if (newNumber < 20) {
            result = num[newNumber]
        }
        else if (Number(String(newNumber)[1]) === 0 && newNumber >=20 && newNumber < 100) {
            result = secondDigits[tens - 2]
        }
        else if (newNumber > 20 && newNumber < 100) {
            result = `${secondDigits[tens - 2]} ${num[String(newNumber)[1]]}`;
        }
        return `${hundred} ${result}`
    } else {
        'beda';
    }
}
