// Transforms price from number to string like "ii,dd"
export const formatPrice = (price) => {
    let [int, decimals] = String(price).split(".");

    if (!decimals) {
        decimals = "00";
    } else if (decimals.length === 1) {
        decimals = decimals + "0";
    } else {
        decimals = decimals.slice(0, 2);
    }

    return int + "," + decimals;
};

// Filter a string leaving only numbers
export const onlyNumbers = (str) => {
    const onlyNumberRegex = new RegExp("^[0-9]$");
    const numbers = str
        .split("")
        .filter((char) => onlyNumberRegex.test(char))
        .join("");
    return numbers;
};

// Transform a number string into currency format
export const numberStringToCurrency = (numberString) => {
    const nums = String(Number(numberString)).split(""); // Array of number chars with leading zeros removed

    if (nums.length < 3) {
        for (let i = 0; i < 4 - nums.length; i++) {
            nums.unshift("0");
        }
    }
    nums.splice(nums.length - 2, 0, ",");

    return nums.join("");
};

// Filter only numbers from string input and tranform them into currency format
export const inputToCurrency = (str) => {
    const negative = str[0] === "-" ? "-" : "";
    const nums = onlyNumbers(str);
    return (negative ? negative : "") + numberStringToCurrency(nums);
};

// Tranforms string "ii,dd" into number ii.dd
export const currencyToNumber = (currency) => {
    const [strInt, strDecimals] = currency.split(",");
    const int = +strInt;
    const decimals = +strDecimals / 100;
    return int + decimals;
};

// Transforms a number into currency format
export const floatToCurrency = (num) => {
    let [int, decimals] = String(num).split(".");

    if (!decimals) decimals = "00";
    else if (decimals.length === 1) decimals = decimals + "0";
    else decimals = decimals.slice(0, 2);

    return int + "," + decimals;
};
