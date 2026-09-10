function Progresso({percentagem, cor="bg-v"}){
     // Garantimos que o valor fica sempre entre 0 e 100,
  // mesmo que alguém passe um número errado por engano.
  const valorSeguro = Math.min(100, Math.max(0, percentagem))
    return(
            // A "trilha" cinza de fundo, onde a barra colorida vai por cima
    <div className="w-full h-2 bg-kumuka-border rounded-full overflow-hidden">
      <div
        className={`h-full ${cor} rounded-full transition-all duration-500`}
        // A LARGURA em percentagem é o que realmente "desenha" o progresso.
        style={{ width: `${valorSeguro}%` }}
      />
    </div>


    )
}

export default Progresso