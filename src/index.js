document.addEventListener("DOMContentLoaded", () => {
  // your code here
    document.querySelector('form').addEventListener('submit', (e)=> {
      let form = document.querySelector('form');
      e.preventDefault()
      buildToDo(e.target.children[1].value)
      form.reset()
    })

});
function buildToDo(toDo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  let eBtn = document.createElement('button');
  eBtn.addEventListener('click', buildEdit)
  eBtn.textContent = 'R';    
 
  p.textContent = `${toDo} `;

  p.appendChild(eBtn);
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove();

}
function buildEdit(e){
  
  let form = document.createElement('form');
  form.id = "edit";
  let input = document.createElement('input');
  input.id = "new_Input";
  input.type = "text";
  input.placeholder = "New Input";
  let submitInput = document.createElement('input');
  submitInput.type = "submit";
  submitInput.value = "Done"
  form.appendChild(input);
  form.appendChild(submitInput);
  e.target.parentNode.appendChild(form)[0];
  document.querySelectorAll('form')[1].addEventListener('submit', (e) => {
    let formPapa = document.querySelectorAll('form')[1];
    handleEdit(e.target.children[0].value);
    e.preventDefault();
    formPapa.reset()
    
  });

}
 function handleEdit(toEdit){
    let p = document.createElement('p')
  p.textContent = `${toEdit}`
  document.querySelector('#tasks').appendChild(p);
 
 }