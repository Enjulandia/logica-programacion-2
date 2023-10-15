function convertirTemperatura() {
    var celsiusInput = document.getElementById('celsius-input').value;
    var errorMessage = document.getElementById('error-message');
    var resultadoDiv = document.getElementById('resultado');

    // Verificar si la entrada es un número válido
    if (isNaN(celsiusInput) || celsiusInput === '') {
        errorMessage.textContent = 'Por favor, ingrese un número válido.';
        resultadoDiv.textContent = '';
    } else {
        errorMessage.textContent = '';

        // Realizar las conversiones
        var celsius = parseFloat(celsiusInput);
        var fahrenheit = (celsius * 9 / 5) + 32;
        var kelvin = celsius + 273.15;

        // Mostrar los resultados en el DOM
        resultadoDiv.innerHTML = `<p>${celsius} grados Celsius son:</p>
                                  <p>${fahrenheit.toFixed(2)} grados Fahrenheit</p>
                                  <p>${kelvin.toFixed(2)} Kelvin</p>`;
    }
}





