let selectedOption = '';

function selectOption(option) {
    selectedOption = option;
    console.log('Selected option:', selectedOption);

    document.getElementById('celciusB').style.backgroundColor = (option === 'celcius') ? '#F6B484' : '';
    document.getElementById('fahrenheitB').style.backgroundColor = (option === 'fahrenheit') ? '#F6B484' : '';
}

function submit() {
    if (selectedOption) {
        if (selectedOption === 'celcius') {
            window.location.href = 'celcius.html';
        } else if (selectedOption === 'fahrenheit') {
            window.location.href = 'fahrenheit.html';
        } else {
            alert('Invalid selection.');
        }
    } else {
        alert("Please select a choice before submitting!");
    }
}

function back(){
    window.location.href = 'index.html';
}

function convertCelcius(celciusValue){
    let fahrenheit = (celciusValue * (9/5)) + 32;
    let fahrenheitString = fahrenheit.toString();
    document.getElementById("output-fahrenheit").value = fahrenheitString;
    document.getElementById("calculation-fahrenheit").value = `${celciusValue}℃ * (9/5) + 32 = ${fahrenheitString}℉`
}

function convertFahrenheit(fahrenheitValue){
    let celcius = (fahrenheitValue - 32) * (5/9);
    let celciusString = celcius.toString();
    document.getElementById("output-celcius").value = celciusString;
    document.getElementById("calculation-celcius").value = `(${fahrenheitValue}℉ - 32) * (5/9) = ${celciusString}℃`
}

function resetCelcius(){
    document.getElementById("input-celcius").value = '';
    document.getElementById("output-fahrenheit").value = '';
    document.getElementById("calculation-fahrenheit").value = '';
}

function resetFahrenheit(){
    document.getElementById("input-fahrenheit").value = '';
    document.getElementById("output-celcius").value = '';
    document.getElementById("calculation-celcius").value = '';
}

function validateFormCelcius() {
    const celciusInput = document.getElementById('input-celcius');
    const errorMessage = document.getElementById('error-message');
    const celciusValue = parseFloat(celciusInput.value);

    errorMessage.textContent = '';

    if (isNaN(celciusValue)) {
        errorMessage.textContent = 'Mohon masukkan angka yang valid';
        return false;
    }

    if (celciusValue < -273.15) {
        errorMessage.textContent = 'Suhu tidak boleh kurang dari titik 0 mutlak(-273.15°C).';
        return false;
    }

    return convertCelcius(celciusValue);
}

function validateFormFahrenheit() {
    const fahrenheitInput = document.getElementById('input-fahrenheit');
    const errorMessage = document.getElementById('error-message');
    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    errorMessage.textContent = '';

    if (isNaN(fahrenheitValue)) {
        errorMessage.textContent = 'Mohon masukkan angka yang valid';
        return false;
    }

    if (fahrenheitValue < -459.67) {
        errorMessage.textContent = 'Suhu tidak boleh kurang dari titik 0 mutlak(-459.67°F).';
        return false;
    }

    return convertFahrenheit(fahrenheitValue);
}