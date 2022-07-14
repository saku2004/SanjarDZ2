const input = document.getElementById('input')
const button =document.getElementById('button')

let position = 0 
let positionLeft = 0
let positionBottom = 0

const moveElement = () => {
    position += 10
    input.style.top = `${position}px`
    if(position <= 470) {
        setTimeout(() => {
            moveElement()
        }, 100);

    } else if (position = 800) {
        setTimeout(() => {
            let left = setInterval(() => {
                moveLeft()
            }, 100);
            setTimeout(() => {
                clearInterval(left)
            }, 5775);
        }, 100);

    } else if (positionBottom <= 600) {
        setTimeout(() => {
            setInterval(() => {
                moveBottom()
            }, 100);
        }, 100);
    }
    const moveLeft = () => {
        positionLeft += 10
        input.style.left = `${positionLeft}px`
    }
}


const moveBottom = () => {
    positionBottom += 10
    input.style.bottom = `${positionBottom}px`
}

moveElement()

button.addEventListener("click",() => {
    moveElement()
})