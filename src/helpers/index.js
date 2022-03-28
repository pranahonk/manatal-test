export const getURLNews = (string) => string.replaceAll(/[^a-zA-Z0-9]/g, "-")

export const setTruncate = (str, num) => {
    if (str.length <= num) {
        return str
    }

    return `${str.slice(0, num)}...`
};
