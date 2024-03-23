
function rendertodo(){
    ol.innerHTML=""
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML+=`
        <li>${arr[i]}
        <button class="btn1" onclick="deletetodo(${i})">Delete</button>
        <button class="btn2" onclick="edittodo(${i})">edit</button>
        </li>
        `
        
    }
}


const input =document.querySelector("#todo");
const ol =document.querySelector("ol");
const arr =[];


function addtodo(){
    arr.push(input.value);
    rendertodo()
    input.value="";
}

function deletetodo(index){
    arr.splice(index ,1);
    rendertodo()

}

function edittodo(index){
const updateVal= prompt("enter updated value");
arr.splice(index , 1 , updateVal);
rendertodo()


}