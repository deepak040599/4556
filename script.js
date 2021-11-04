const draggables = document.querySelectorAll('.draggable')
const containers= document.querySelectorAll('.container')

draggables.forEach(draggable => {
     draggable.addEventListener('dragstart',()=>{
        draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend',()=>{
        draggable.classList.add('dragging')
    })
});


containers.forEach(container=>{
    container.addEventListener('dragover',e=>{
        e.preventDefault()
        const afterElement = getDragAfterElement(container,e.clientY)
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
})

function getDragAfterElement(container,y){
 const draggableElements = [ ...container.querySelectorAll('draggable:not(.dragging)')]

 draggableElements.reduce((closest,child)=>{
    const box = child.getBoundingClientRect()
    
    const offset = y - box.top - box.height/2
    console.log(offset)
    if(offset < 0 && offset > closest.offset     ){
        return{
            offset:offset,elemnet:child
        }
        else{
            return closest
        }
    }
    },{offset: Number.NEGETIVE_INFINITY}).elemnet
}