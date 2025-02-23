'use strict'
function formatMobileNumber(value) {
    var digits = value.replace(/\D/g, '');
    if (digits.length > 11) {
        digits = digits.slice(0, 11);
    }
    if (digits.length <= 2) {
        return '(' + digits;
    } else if (digits.length <= 7) {
        return '(' + digits.slice(0, 2) + ') ' + digits.slice(2);
    } else {
        return '(' + digits.slice(0, 2) + ') ' + digits.slice(2, 7) + '-' + digits.slice(7);
    }
}
document.getElementById('cll').addEventListener('input', function (e) {
    var input = e.target;
    var formatted = formatMobileNumber(input.value);
    input.value = formatted;
});
function formatPhoneNumber(value) {
    var digits = value.replace(/\D/g, '');
    if (digits.length > 10) {
        digits = digits.slice(0, 10);
    }
    if (digits.length <= 2) {
        return '(' + digits;
    } else if (digits.length <= 6) {
        return '(' + digits.slice(0, 2) + ') ' + digits.slice(2);
    } else {
        return '(' + digits.slice(0, 2) + ') ' + digits.slice(2, 6) + '-' + digits.slice(6);
    }
}
document.getElementById('telefone').addEventListener('input', function (e) {
    var input = e.target;
    var formatted = formatPhoneNumber(input.value);
    input.value = formatted;
});