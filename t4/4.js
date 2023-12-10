'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.getElementById('target')


for (let index = 0; index < students.length; index++) {
  target.innerHTML += `<option>${students[index].name}</option>`;

}