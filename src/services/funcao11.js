export function Quadrilatero(base, altura) {

    for(let i = 1; i <= base; i++ ){
        for(let a = 1; a <= altura; a++){
            process.stdout.write('* ')
        }
        console.log()
    }
}
