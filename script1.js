
var inputTask = document.getElementById('input-task')
var listItems = document.getElementById('list-items')

function addItems() {
    var inputTaskValue = inputTask.value
    if (inputTaskValue == "") {
        alert('Enter Somthing')
    } else {

        //element area

        let li = document.createElement('li')
        li.classList.add('mb-3')
        let span = document.createElement('span')
        span.innerText = inputTaskValue
        let inputValue = inputTask
        inputValue.value = ""
        inputValue.focus()
        listItems.appendChild(li)
        li.appendChild(span)


        // trash button area

        let trashButton = document.createElement('i')
        trashButton.classList.add("bi", "bi-trash", "mx-3")
        li.appendChild(trashButton)
        trashButton.onclick = () => {
            li.classList.add('slideOut')
            listItems.addEventListener('transitionend', () => {
                listItems.removeChild(li)
            })

        }

        // edit button area

        let editButton = document.createElement('i')
        editButton.classList.add("bi", "bi-pencil-fill")
        li.appendChild(editButton)
        editButton.onclick = () => {
            let updateText = prompt('EDIT TASK')
            if(updateText!==''){
                span.innerText = updateText
            }else{
                alert('No update')
            }
        }

    }
}