import { BiSave, BiUser } from "react-icons/bi"
import Tela from "../compontes/Tela"
import Botao from "../compontes/Botao"
import { useNavigate } from "react-router-dom"
function Detalhe() {
    const navigate =useNavigate()
    const requisitos = ["Estudantes universitários ou finalistas","Paixão por marketing","Vontade de aprender e inovar"]

    return(
        <Tela>
            <div class="flex justify-between items-center">
                <span class=" flex justify-center items-center w-14 h-14 rounded-2xl bg-a/20 mb-4">  <BiUser/> </span>
                <span> <BiSave/>  </span>
            </div>
            <h1 class="text-xl text-texto font-bold mb-2 capitalize">programa de talento tIS Angola</h1>
            <div class="flex items-center gap-3 text-xs text-ts mb-6 capitalize">
                <span class= "flex  items-center gap-1 bg-card px-2 py-1 rounded"> <BiUser/> programa</span>
                <span class="flex  items-center gap-1 bg-card px-2 py-1 rounded"><BiUser/>Local</span>
                <span class="flex  items-center gap-1 bg-card px-2 py-1 rounded"><BiUser/>hibrido</span>

            </div>

             <h2 class="text-texto font-semibold mb-2">Sobre o programa</h2>
             <p class="text-sm text-ts mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae quas consequuntur numquam voluptates minus obcaecati incidunt praesentium fuga quo deserunt amet, ipsa, saepe dolore laboriosam repellat optio soluta. Asperiores.
             </p>

             <h2 class="font-semibold mb-2 text-texto">Requisitos</h2>
             <ul class="text-sm text-ts space-y-1 mb-6" >
                {requisitos.map((req)=>(
                    <li class="flex gap-2" key={req}> <span class="text-v">*</span> {req} </li>
                ))}
             </ul>
             <div class="flex-1"></div>
             <Botao onClick={()=>navigate("/certificado")}>Candidatar se</Botao>

        </Tela>

    )
}
export default Detalhe 