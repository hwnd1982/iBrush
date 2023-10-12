import './index.html';
import './index.scss';
import { mult, sum } from './modules/calc';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.width = 700;

console.log(mult(3, 4));
console.log(sum(3, 4));