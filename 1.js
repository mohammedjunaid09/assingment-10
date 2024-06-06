const gamedata = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
]

let player = 'X'

document.getElementById('resetbtn').addEventListener('click',()=>{
window.location.reload()
    
})

function checkdraw() {
    for (let i = 0; i < gamedata.length; i++) {
        if (gamedata[i] == '') return false
    }
    return true
}

function checkwin() {

    //check for rows

    for (let i = 0; i <= 6; i += 3) {
        if (
            gamedata[i] != '' &&
            gamedata[i] == gamedata[i + 1] &&
            gamedata[i + 1] == gamedata[i + 2]
        ) return gamedata[i]
    }


    //check for columns

    for (let i = 0; i <= 2; i++) {
        if (
            gamedata[i] != '' &&
            gamedata[i] == gamedata[i + 3] &&
            gamedata[i + 3] == gamedata[i + 6]
        ) return gamedata[i]
    }

    //check for diagonals

    if (
        gamedata[0] != '' &&
        gamedata[0] == gamedata[4] &&
        gamedata[4] == gamedata[8]
    ) return gamedata[0]

    if (
        gamedata[2] != '' &&
        gamedata[2] == gamedata[4] &&
        gamedata[4] == gamedata[6]
    ) return gamedata[2]

    //if win doesnt happen

    return ''

}


function changeplayer() {
    if (player == 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
    document.getElementById('player-title').innerText = player
}

function render() {
    for (let i = 0; i < gamedata.length; i++) {
        document.getElementById(i).innerText = gamedata[i]
    }
}
function modifycell(num) {
    if (gamedata[num] != '') return;
    gamedata[num] = player
    changeplayer()
}

function main() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).addEventListener('click', () => {
            console.log(i)
            modifycell(i)
            render()
            let result = checkwin()
            if (result != '') {
                alert(`${result} has won`)
            } else {
                let draw = checkdraw()
                if (draw == true) {
                    alert('draw has happen')
                }
            }
        })
    }
}
main()