import Tela from "../compontes/Tela"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../compontes/Botao";
import Progresso from "../compontes/Progresso";
import Voltar from "../compontes/Voltar";
function  Aprender() {
    const [concluida, setConcluida] = useState(false)
    const navigate = useNavigate()
    return(
        <Tela>
            <Voltar titulo="Markenting" subtitulo="45%"></Voltar>
            <Progresso percentagem={45} />

            <div class="w-full h-77 bg-v mt-8 mb-8 rounded-2xl ">
            </div>

            <h2 class=" text-texto font-semibold mb-1">
                Aula 3 — Conhecendo o teu público
            </h2>
            <p class="text-sm text-ts mb-6">
                Entende quem é o teu público e como comunicar com ele de forma eficaz.
            </p>

            {/* Cartão da próxima aula */}
      <p class="text-xs text-ts mb-2">Próxima aula</p>

      <div class="flex items-center gap-3 bg-card border border-border rounded-2xl p-3 mb-6">
        <div class="w-11 h-11 rounded-lg bg-a/20 flex items-center justify-center">
          🎬
        </div>
        <div class="flex-1">
          <p class="text-sm font-medium">Aula 4 — Criação de Conteúdo</p>
        </div>
        <span class="text-xs text-ts">06:15</span>
      </div>

      <div className="flex-1" />

      <Botao onClick={() => {
          setConcluida(true);
          navigate("/desafios");
        }}
      >
        {concluida ? "Aula concluída ✓" : "Marcar como concluída"}
      </Botao>

        </Tela>

    )
}

export default Aprender