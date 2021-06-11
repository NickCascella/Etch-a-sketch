    let parent = document.querySelector('#parent')
    let btn = document.querySelector('#clear')

function restart() {
    let check = prompt('please enter grid size')
    if(check < 100) {
        let i = 0
        let wh = 1/check * 100 + '%'
        let ht = 1/check * 100 + '%'
        parent.innerHTML = ''
            for(i=0; i<check*check; ++i){
            let color = () => {
                grid.style.backgroundColor = `rgb(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256})`
            }
            let grid = document.createElement('div')
            grid.style,minWidth = wh 
            grid.style.width = wh
            grid.style.height = ht
            grid.className = 'test'
            //grid.textContent = `${i + 1}`
            grid.addEventListener('mouseover', color)
            parent.appendChild(grid)
            }

    } else {
        alert('please enter a number less than 100')
        restart()
    }   
}

restart()

let clear = () => {
    restart()
}

btn.addEventListener('click', clear)