document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  

  
});

// function handleSubmit(e){
//   e.preventDefault
//   const tasks = document.getElementById('tasks')
//   let input = 
//   tasks.innerText = input
//   // debugger
//   // let li = document.createElement('li')
//   // li.innerText = input
//   // tasks.appendChild(li)

document.addEventListener("submit", appendList)

  function appendList() {
    preventDefault()
    let list = document.getElementById('tasks');
    let listItem = document.createElement('li');
    let newTask = document.getElementById("new-task-description")
    list.appendChild(listItem)
    listItem.appendChild(document.createTextNode(newTask.value));
    
}


