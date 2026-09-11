import Tela from "../compontes/Tela"
import Botao from "../compontes/Botao"
import { useNavigate } from "react-router-dom"
import { FiFile } from "react-icons/fi"
function Desafios() {

    const navigate = useNavigate()

    const intrucoes= [
        "Define o público-alvo",
        "Cria a mensagem principal",
        "Escolhe o canal",
        "Apresenta a tua campanha",
   ]
    return(
        <Tela>
            <h1 class="text-xl text-texto font-bold mb-1">Desafio prático</h1>
                <p class="text-sm text-ts mb-5">
                    Cria uma campanha para promover um produto fictício nas redes sociais.
                </p>

            <h2 class="font-semibold text-texto mb-2">Instruções</h2>
                <ol class="list-decimal list-inside text-sm text-ts space-y-1 mb-6">
                    {intrucoes.map((passo) => (
                    <li key={passo}>{passo}</li>
                    ))}
                </ol>

           <h2 class="font-semibold text-texto mb-2">Envia o teu trabalho</h2>

           <label class="flex  items-center gap-3 bg-a/20 p-4 mb-6 rounded-2xl">

            <input class="h-12 w-fullv border p-3 cursor-pointer flex justify-center items-center border-ts text-texto rounded-2xl" type="file" />

            <div class="flex-1">
                <span> <FiFile class=" text-ts" size={40} /> </span>
            </div>
            <span class=" text-ts font-bold" >+3</span>
           </label>

           <div class=" flex-1"/>

           <Botao onClick={()=> navigate("/portfolio")} >Submeter desafio</Botao>
 

        </Tela>

    )
}

export default Desafios