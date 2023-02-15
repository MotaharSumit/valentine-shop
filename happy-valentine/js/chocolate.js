document.getElementById('chocolate-btn').addEventListener('click', function () {
    const chocolateInputString = document.getElementById('chocolate-input').value;
    const chocolateInput = parseFloat(chocolateInputString);

    const priceChocolate = 100 * chocolateInput;

    document.getElementById('chocolate-price').innerText = priceChocolate;

    document.getElementById('chocolate-input').value = '';

    total();
})

// Teddy price
document.getElementById('teddy-btn').addEventListener('click', function () {
    const teddyInputString = document.getElementById('teddy-input').value;
    const teddyInput = parseFloat(teddyInputString);

    const priceTeddy = 500 * teddyInput;

    document.getElementById('teddy-price').innerText = priceTeddy;;

    document.getElementById('teddy-input').value = '';

    total();
})

//Diary price
document.getElementById('diary-btn').addEventListener('click', function () {
    const diaryInputString = document.getElementById('diary-input').value;
    const diaryInput = parseFloat(diaryInputString);

    const priceDiary = 50 * diaryInput;

    document.getElementById('diary-price').innerText = priceDiary;

    document.getElementById('diary-input').value = '';

    total();

    //document.getElementById('total-price').innerText = priceDiary + priceTeddy + priceChocolate;
})
function total() {
    const chocolate = document.getElementById('chocolate-price').innerText;
    const teddy = document.getElementById('teddy-price').innerText;
    const diary = document.getElementById('diary-price').innerText;

    const total = parseInt(chocolate) + parseInt(teddy) + parseInt(diary);
    document.getElementById('total-price').innerText = total;
    //return total;
}

