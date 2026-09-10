function Tela ({children, menu}) {
    return(
        <div class="min-h-screen w-full flex justify-center bg-fundo">
            <div
        className={`w-full sm:max-w-md min-h-screen bg-fundo flex flex-col px-5 pt-6 ${
          // Se a página tem menu inferior fixo, deixamos espaço para ele
          // não tapar o conteúdo (padding-bottom extra).
          menu ? "pb-24" : "pb-8"
        }`}
      >
        {children}
      </div>

        </div>
    )
}

export default Tela