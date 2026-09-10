
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../compontes/Botao";
import Tela from "../compontes/Tela"
import { BiLaptop, BiUser } from "react-icons/bi";
function Interesse () {

    const areas = [
  { nome: "Tecnologia", Icone: BiLaptop },
  { nome: "Negócios", Icone: BiUser },
  { nome: "Tecnologia", Icone: BiLaptop },
  { nome: "Negócios", Icone: BiUser },
  { nome: "Tecnologia", Icone: BiLaptop },
  { nome: "Negócios", Icone: BiUser },
  { nome: "Tecnologia", Icone: BiLaptop },
  { nome: "Negócios", Icone: BiUser },
  { nome: "Tecnologia", Icone: BiLaptop },
  { nome: "Negócios", Icone: BiUser },
  { nome: "Tecnologia", Icone: BiLaptop },
  { nome: "Negócios", Icone: BiUser }
  
]

const max =5

 const navigate = useNavigate();
const [selecionados, setSelecionados] = useState([]);

   // Adiciona ou remove uma área da lista de selecionados quando se clica nela.
  function alternarSelecao(nome) {
    const jaEstaSelecionado = selecionados.includes(nome);

    if (jaEstaSelecionado) {
      // Remove: mantém tudo menos o item clicado .filter para tirar um nome selecionado.
      setSelecionados(selecionados.filter((item) => item !== nome));
    } else if (selecionados.length < max) {
      // Adiciona: só se ainda não atingimos o máximo de 5.
      setSelecionados([...selecionados, nome]);
    }
  }

    return(
        <Tela>
          <h1 className="text-2xl text-texto font-bold mb-1">Quais são os teus interesses?</h1>
            <p className="text-ts text-sm mb-6">
                Seleciona até {max} áreas que mais tens interesse.
            </p>

            <div className="grid grid-cols-3 gap-3">
        {areas.map(({ nome, Icone }) => {
          const estaSelecionado = selecionados.includes(nome);
          return (
                    <button
                    key={nome}
                    onClick={() => alternarSelecao(nome)}
                    class={`flex flex-col items-center justify-center gap-2 py-4 rounded-xl border text-xs font-medium transition-colors ${
                        estaSelecionado
                        ? "bg-v/90 border-kumuka-green text-kumuka-green"
                        : "bg-card border-border text-texto"
                    }`}
                    >
                    <Icone size={22} />
                    {nome}
                    </button>
          );
        })}
      </div>

       <div class="flex-1" />

      <p class="text-center text-xs text-ts mb-2">
        {selecionados.length}/{max} selecionadas
      </p>
      <Botao onClick={() => navigate("/dashboard")}>Continuar</Botao>

        </Tela>
    )
}

export default Interesse