export function Calcular(alunos, limite, mililitros) {
    const a = (alunos * mililitros) / 1000;
    let b = limite;
    for(b; b < a; b++){
        b = b + limite - 1;
    }
    return b
}

