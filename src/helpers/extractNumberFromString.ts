export function extractNumberFromString(str: string) {
    str = str.trim();
    str = str.replace('%', '');
    let number = parseFloat(str);
    return number;
}