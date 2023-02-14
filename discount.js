function getInputValueById(id) {
    const inputValueField = document.getElementById(id);
    const inputValue = inputValueField.value;
    return inputValue;
}

// function setElementValueById(id) {
//     const elementField = document.getElementById(id);
//     const elementValue = elementField.innerText;
//     return elementValue;
// }


document.getElementById('btn-apply-coupon').addEventListener('click', function () {
    const priceString = getInputValueById('price');
    const price = parseFloat(priceString);
    const couponCode = getInputValueById("apply-coupon-field");


    if (couponCode === 'DISC30') {
        const grandTotal = price - (price * (30 / 100));
        document.getElementById('grand-total').innerText = grandTotal;
        document.getElementById("apply-coupon-field").value = '';
    } else {
        alert('Invalid Coupon');
        document.getElementById("apply-coupon-field").value = '';
        return;
    }
})