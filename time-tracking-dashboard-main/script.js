const para = document.querySelector('.daily'); 
const container = document.querySelector('.container')


fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(time => {
    const div =  document.createElement('div')
    div.classList.add('grid-item')
    console.log(div);
    });
  });