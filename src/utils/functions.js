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
