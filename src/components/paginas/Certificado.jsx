import { BiAward, BiMedal, BiStar } from "react-icons/bi"
import Tela from "../compontes/Tela"
import Voltar from "../compontes/Voltar"
import { useNavigate } from "react-router-dom"
import Botao from "../compontes/Botao"

function Certificado (){
    const navigate =useNavigate()
    const conquista =[BiStar,BiAward,BiMedal]
    return(
        <Tela>
            <Voltar titulo="Minhas Conquistas" />
            <div class="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center mb-8">
                <div class="w-20 h-20 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                <span class="text-4xl">a</span>
                </div>
                 <h1 class="text-lg font-bold mb-1">desafio concluido</h1>
                        <p class="text-sm text-ts mb-3">
          Parabéns! Completaste o desafio Campanha Move+ com sucesso.
        </p>

 <p class="text-v font-bold">+150 XP</p>
            </div>


             <h2 class="font-semibold mb-3">Outras conquistas</h2>
            <div class="flex gap-3 mb-8">
                {conquista.map((Ico,indice) =>(
                    <div key={indice} class="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center">
                        <Ico class="text-ts" /> 
                    </div>
                ))}

            </div>

            <div class="flex-1"/>
            <Botao onClick={()=>navigate("/dashboard")} >Regressar</Botao>
           
        </Tela>
    )
}
export default Certificado