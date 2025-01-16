const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/*   JS to add task automatically   */
function addTask(){
    if(inputBox.value === ''){
        alert("You Must Write Something!");
    }
    else{
        let li = document.createElement("li"); //creating an html element li and storing it in a variable Li
        li.innerHTML = inputBox.value; //adding text to Li element just created. Its value willl be whaever we write in the input field
        listContainer.appendChild(li); // makes the Li to be displayed after/under the list container
        let span = document.createElement("span"); //span in bracket is the name of the element you're creating.PS: wanna create an icon to delete
        span.innerHTML = "\u00d7"; //adds a + in the span tag
        li.appendChild(span); // displays the cross after the li
    }
    inputBox.value = ""; // clears the input field after the text has been dispalyed in the li
    saveData(); // calls this function to ave stuff evertime they're changes. here will be when a task is added
}

/*    JS for click functin   */    
listContainer.addEventListener("click", function(e){ //whenever we'll click on the container list-container where all the tasks are kept,
if(e.target.tagName === "LI"){ //first it'll checked if we have clicked on Li, it should add thechecked class name and if it's already there, it'll remove because of the toggle
    e.target.classList.toggle("checked");
    
    saveData(); // calls this function to ave stuff evertime they're changes. here will be when we've checked sth
}
else if(e.target.tagName === "SPAN"){ // If we clicked on span, it'll delete the parent element i.e the LI element. Li element removed = task deleted
    e.target.parentElement.remove(); 
    
    saveData(); // calls this function to ave stuff evertime they're changes. here will be when a task is removed
}
}, false);

/*   storing out tasks in the browser so that it remains as it and not refrsh to nothing   */
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // "data is the name of the item you want to save and the content is in list container in html file"
}

/*  displaying the saved data whenever the browser is opened again  */
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // so it'll give all the content stored in the browser with the name data
}
showTask(); //simplying calling the function