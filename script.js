const input = document.querySelector('.input-todo');
const btn = document.querySelector('.btn-todo');
const contTodo = document.querySelector('.container-todo');
let allTodo = document.querySelectorAll('.todo');

btn.addEventListener('click', () => {
  const inputValue = input.value;
  let newEl = document.createElement('div');
  newEl.classList.add('todo');
  newEl.innerHTML = inputValue;
  newEl.style.backgroundColor = getRandHex();
  contTodo.appendChild(newEl);
  input.value = '';
  allTodo = document.querySelectorAll('.todo');
  allTodo.forEach((el) => {
    el.addEventListener('click', () => {
      el.remove();
    });
  });
});

function getRandHex(){
  const alphabets = 'ABCDEF';
  let hexCode = '#';
  
  for(let i = 0; i < 6; i++){
    
    let ToF;
    const random1 = Math.random();
    
    if(random1 < 0.5){
      ToF = true;
    }else{
      ToF = false;
    }
    
    if(!ToF){
      hexCode += alphabets[Math.floor(Math.random()*alphabets.length)]
    }else{
      hexCode += Math.floor(Math.random()*6);
    }
    
  }
  return hexCode;
}