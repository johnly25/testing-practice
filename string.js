function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1,string.length);
}

function reverseString(string) {
    let results = '';
    for(let i = string.length-1; i >= 0; i--) {
        results += string.charAt(i);
    }
    return results
}
export {capitalize, reverseString}