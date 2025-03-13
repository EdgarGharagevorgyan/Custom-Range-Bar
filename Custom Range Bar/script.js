document.getElementById('sub').addEventListener('submit', (e) => {
    e.preventDefault();

    let input1Value = document.getElementById('input1').value;
    let input2Value = document.getElementById('input2').value;

    if (isNaN(input1Value) || isNaN(input2Value)) {
        return alert("TypeError");
    } else {
        document.getElementById('sub').style.display = 'none';

        let rangeElements = document.getElementsByClassName('range');
        if (rangeElements.length > 0) {
            rangeElements[0].style.display = 'flex';
        }

        let minValue = (input1Value / input2Value) * 100;

        console.log(minValue);

        let slider = document.getElementById('slider');
        let valueDisplay = document.getElementById('valueDisplay');

        slider.value = minValue;

        valueDisplay.textContent = minValue;

        slider.addEventListener('input', function () {
            if (slider.value < minValue) {
                slider.value = minValue;
            }
            valueDisplay.textContent = slider.value;
        });
    }
});
