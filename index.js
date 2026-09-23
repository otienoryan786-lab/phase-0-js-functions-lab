function calculateTax(amount) {
    return amount * 0.1; // Assuming a tax rate of 10%
}


function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

function isPalindrome(word) {
    const reversedWord = cleanedWord.split('').reverse().join('');
    
    return cleanedWord === reversedWord;
    if (cleanedWord === reversedWord) {
        return true;
    } else {
        return false;
    }

}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
}

module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };