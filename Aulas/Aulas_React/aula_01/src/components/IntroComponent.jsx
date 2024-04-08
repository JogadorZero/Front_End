function IntroComponent(){
    const a = 5, b = 2, nome = 'Lucas';
    const aluno = {
        nome: 'Paul',
        email: 'paul@email.com'
    }

    return(
        <div>
            <h2>Componentes de Introdução</h2>
            <h3>Template Expressions</h3>
            <p>{nome}, o produto entre {a} e {b} é {a * b}</p>
            <p>Aluno {aluno.nome} <br /> E-mail: {aluno.email}</p>
        </div>
    )
}

export default IntroComponent