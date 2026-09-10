import { BiBriefcase, BiDesktop, BiUser } from "react-icons/bi";
import Menu from "../compontes/Menu"
import Tela from "../compontes/Tela"
import Progresso from "../compontes/Progresso";
import { useNavigate } from "react-router-dom";

function Dashboard () {
    const navigate = useNavigate()
    const areas = [
        { nome: "Tecnologia", Icone: BiDesktop, cor: "bg-a" },
        { nome: "Negócios", Icone: BiBriefcase, cor: "bg-v" },
        { nome: "Liderança", Icone: BiUser, cor: "bg-ts" },
        ];

        // Dados de exemplo. Num projeto real, estes valores viriam
  // de uma API ou de uma base de dados.
  const utilizador = { nome: "Mavinga", nivel: 4, xpAtual: 650, xpTotal: 1000 };

    return(

        <Tela>
            {/* Cabeçalho com saudação e avatar */}
            <div class="flex items-center justify-between mb-5">
                <div>
                <h1 class="text-xl text-texto font-bold">Olá, {utilizador.nome} 👋</h1>
                <p class="text-sm text-ts">Que bom ter-te aqui!</p>
                </div>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=150" alt="Foto de perfil"
                class="w-11 h-11 rounded-full object-cover"
                />

            </div>

             {/* Cartão de progresso / XP */}
      <div className="bg-card border border-border rounded-2xl p-4 mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span class="text-ts">O teu progresso</span>
        </div>

        <p class=" flex justify-between font-semibold mb-2">
         <span class="text-ts">Nível {utilizador.nivel}</span>
         <span  class="text-ts"> {utilizador.xpAtual}/{utilizador.xpTotal} XP</span>
        </p>
        <Progresso
          percentagem={(utilizador.xpAtual / utilizador.xpTotal) * 100}
        />
      </div>


        {/* Continua a aprender */}
      <h2 class="font-semibold mb-3">Continua a aprender</h2>
      <button
        onClick={() => navigate("/aprender")}
        class="w-full flex items-center gap-3 bg-card border border-border rounded-2xl p-3 mb-6 text-left"
      >
        <div class="w-14 h-14 rounded-xl bg-a/20 flex items-center justify-center text-2xl">
          📈
        </div>
        <div>
          <p class=" text-texto font-semibold text-sm">Fundamentos de Marketing Digital</p>
          <p class="text-xs text-ts">Aula 3 de 5</p>
        </div>
      </button>

     {/* Explorar áreas */}
      <div class="flex items-center justify-between mb-3">
        <h2 class="font-semibold">Explorar áreas</h2>
        <button class="text-xs text-v">Ver todas</button>
      </div>
      <div class="grid grid-cols-3 gap-3">
        {areas.map(({ nome, Icone, cor }) => (
          <div
            key={nome}
            class={`${cor} rounded-xl py-4 flex flex-col items-center justify-center gap-1 text-xs font-medium`}
          >
            <Icone size={20} />
            {nome}
          </div>
        ))}
      </div>



          


            <Menu/>
        </Tela>



    )
}

export default Dashboard 