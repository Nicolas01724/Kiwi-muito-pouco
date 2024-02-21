addEventListener("load",main)

function main(){
    const tom = document.querySelector("#Tom")
    const button = document.querySelector("button")
    let isOpen = false

    button.addEventListener("click",handleClick)

    function handleClick(){
        isOpen = !isOpen
        if (isOpen){
            tom.innerHTML = '<img width="500px" src="./Tom.jpeg">'
            button.innerText = "Tirar"
        } else{
            tom.innerHTML = ''
            button.innerText = "Ver"
        }
        
    }
}