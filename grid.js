    let parent = document.querySelector('#parent')
    let btn = document.querySelector('#clear')

function restart() {
    let check = prompt('please enter grid size')
    console.log('check me in console')
    let i = 0
    let wh = 1/check * 100 + '%'
    let ht = 1/check * 100 + '%'
    for(i=0; i<check*check; ++i){
    let color = () => {
        grid.style.backgroundColor = `rgb(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256})`
    }
    let clear = () => {
        //grid.style.backgroundColor = `rgb(256, 256, 256)` 
        grid.remove()
        //let check = prompt('please enter grid size')
        restart()
        
    }
    let grid = document.createElement('div')
    grid.style,minWidth = wh 
    grid.style.width = wh
    grid.style.height = ht
    grid.className = 'test'
    //grid.textContent = `${i + 1}`
    grid.addEventListener('mouseover', color)
    parent.appendChild(grid)
    btn.addEventListener('click', clear)
    
}
}
restart()