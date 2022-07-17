const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); 
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    
}

function deleteToDo(event){
    const li = event.target.parentElement; 
    li.remove(); 
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); 
    //리스트의 아이디와 일치하지 않는 것을 남기고 싶음
    //toDo.id는 숫자지만, event는 스트링으로 넘어오기 때문에, li.id는 스트링 값. 
    //숫자로 바꿔줘야 함
    saveToDos();
}


function paintToDo(newTodo){
    const li = document.createElement("li"); 
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("span");
    button.innerText = "  ❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); 
    li.appendChild(button); 
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newTodoObj ={
        text:newTodo,
        id: Date.now(), //현재 시간의 밀리초를 보여주는 함수
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); 
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo); 
}

//어레이에서 뭔가 삭제할 때 실제로 삭제하는 것이 아니라
//제외하고 싶은 것을 제외하고 새로운 어레이를 만드는 것이다
//이 때 사용하는 것이 filter()
//true를 리턴할 때만 새 어레이에 넣음

