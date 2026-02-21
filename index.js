let showList = [];

let input = document.getElementById("taskInput");
let button = document.getElementById("ctn-btn");
let ul = document.getElementById("taskList");

button.addEventListener("click", addTask)

    input.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            addTask();
        }
    });
    
    function addTask(){
    let task = input.value.trim();

    if(task === "") return;

    showList.push(task);

    renderList();

    input.value = "";
};

function renderList(){

    ul.innerHTML = "";

    for(let i = 0; i < showList.length; i++){

        let li = document.createElement("li");

        li.innerHTML = `
            ${showList[i]}
            <button onclick="deleteTask(${i})">Delete</button>
        `;

        ul.appendChild(li);
    }
}

function deleteTask(index){
    showList.splice(index, 1);
    renderList();
}