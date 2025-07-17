const container = document. querySelector(".container")
const formContainer = document. querySelector("form")
const firstNameInput = document.getElementById("firstname")
const lastNameInput = document.getElementById("lastname")
const emailInput = document.getElementById("email")
const dateInput = document.getElementById("hire_date")
const photoInput = document.querySelector("input[name='photo']")

const employeeList = document.getElementById("employeeList")


document.querySelector("thead").style.backgroundColor = "Gray"
document.querySelectorAll("th").forEach(th => {
    th.style.textAlign ="center"
    th.style.padding ="1rem"
});

formContainer.addEventListener("reset", event =>{
    formContainer.reset()
})

formContainer.addEventListener("submit", event =>{
    event.preventDefault()
    const filePath = photoInput.value
    const fileName = filePath.split('\\').pop()
    const firstname = firstNameInput.value
    const lastname = lastNameInput.value
    const email = emailInput.value
    const date = dateInput.value

    const tr = document.createElement("tr")
    tr.classList.add("emp_row")



    tr.innerHTML = `
    <td><img src="/images/${fileName}" alt="photo" class="pic"></td>
    <td>${firstname}</td>
    <td>${lastname}</td>
    <td>${email}</td>
    <td>${date}</td>
    <td><button>Delete</button></td>
    `
    employeeList.appendChild(tr)

    tr.style.backgroundColor = "LightGrey"

    const img = tr.querySelector(".pic")
    img.style.width = "50px"
    img.style.height = "50px"

    document.querySelectorAll('td').forEach(td=>{
        td.style.padding= "0.5rem"
    })


    formContainer.reset()
})

employeeList.addEventListener("click",event =>{
    if(confirm("Are you want to delete this employee?")=== true){
        const row = event.target.closest("tr")
        row.remove()
    }
})
