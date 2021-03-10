import { ColorPicker } from './../../../src/color-picker/index';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Default ColorPicker sample
 */
const colorPicker: ColorPicker = new ColorPicker({}, '#picker');

document.getElementById('material').onclick = () => {
    document.getElementById('theme').setAttribute('href', './../theme-files/material.css');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
};
document.getElementById('fabric').onclick = () => {
    document.getElementById('theme').setAttribute('href', './../theme-files/fabric.css');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
};
document.getElementById('bootstrap').onclick = () => {
    document.getElementById('theme').setAttribute('href', './../theme-files/bootstrap.css');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
};
document.getElementById('highcontrast').onclick = () => {
    document.getElementById('theme').setAttribute('href', './../theme-files/highcontrast.css');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
};
document.getElementById('materialdark').onclick = () => {
    document.getElementById('theme').setAttribute('href', './../theme-files/material-dark.css');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
};
document.getElementById('bootstrapdark').onclick = () => {
    document.getElementById('theme').setAttribute('href', './../theme-files/bootstrap-dark.css');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
};
document.getElementById('fabricdark').onclick = () => {
    document.getElementById('theme').setAttribute('href', './../theme-files/fabric-dark.css');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
};
