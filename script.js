const form = document.querySelector('form');
const main = document.getElementById('main');
let indexx = 1;
let submittedForm = [];
if(localStorage.getItem('submittedForm')){
    submittedForm = JSON.parse(localStorage.getItem('submittedForm'));
    Display();

}
form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value; 
    const Data = {name, email};
    submittedForm.push(Data);
    localStorage.setItem('submittedForm', JSON.stringify(submittedForm));
    Display();
    indexx ++;
});
function Display(){
    const NewsubmittedForm = submittedForm[submittedForm.length - 1];
    const table = document.createElement("table");
    table.innerHTML = 
    `
    <tr>
    <th><span onclick = 'deleteSubmission()'>&times;</span></th>
    </tr>
    <tr>
    <td>Name: ${NewsubmittedForm.name} </td>
    </tr>
    <tr>
    <td>Email: ${NewsubmittedForm.email} </td>
    </tr>
    `;
    main.appendChild(table);
}


function deleteSubmission(index) {
    // submittedForm = JSON.parse(localStorage.getItem('submittedForm'));
    submittedForm.splice(index, 1); // Remove the submission at the given index
    localStorage.setItem("submittedForm", JSON.stringify(submittedForm));
    main.innerHTML = ""; // Clear the container
    Display(); // Re-display the updated submissions
  }

