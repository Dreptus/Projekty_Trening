let todoInput //miejsce, gdzie uytkownik wpisuje treść zadania
let errorInfo // info o braku zadań / koniecznie nalezy wpisać tekst
let addBtn // przyciks ADD - dodaje nowe elementy do listy
let ulList // lista zadań, tagi UL
let newTodo // nowo dodane zadanie - nowe Li

let popup //popup
let popupInfo // tekst w popupie, jak sie doda pusty tekst
let todoToEdit // edytowany todo
let popupInput // input w popupie
let popupAddBtn // add// przycisk 'zatwierdź" w popupie
let popupCloseBtn // przycisk"anuluj" w popupie

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    // pobieramy wszystkie elementy
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')

}

const prepareDOMEvents = () => {
    //nadajemy nasłuchiwanie
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeTodoText)
    todoInput.addEventListener('keyup', enterKeyCheck)
}

/*
wypełnienie inputa - tworzenie nowego li
nadanie nasłuchiwania na addBtn
dodatnie do listy text content
sprawdzenie czy input nie jest pusty, jeśli tak to wyświetli okno popup
*/

const addNewTodo = () => {
    (todoInput.value !== '') ?
    (newTodo = document.createElement('li'),
        newTodo.textContent = todoInput.value,
        createToolsArea(),
        ulList.append(newTodo),
        todoInput.value = '',
        errorInfo.textContent = '') :
    errorInfo.textContent = 'Wpisz treść zadania!'
}



const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn, editBtn, deleteBtn)
}



const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.add('completed');
        e.target.classList.toggle('completed');

    } else if (e.target.matches('.edit')) {
        editTodo(e)
    } else if (e.target.matches('.delete')) {
        deleteTodo(e)
    }
}

const editTodo = e => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''

}

const changeTodoText = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''

    } else {
        popupInfo.textContent = 'Musisz podać jakąś treść!'
    }
}

const deleteTodo = e => {
    e.target.closest('li').remove();

    const allTodos = ulList.querySelectorAll('li')
    if (allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście!'
    }

}

const enterKeyCheck = (e) => {
    if(e.key === 'Enter'){
        // console.log('enter')
        addNewTodo()
    }
}







document, addEventListener('DOMContentLoaded', main);