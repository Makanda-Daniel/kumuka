import { BiAlarm, BiCalculator, BiLaptop, BiSave, BiUser } from "react-icons/bi"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Menu from "../compontes/Menu"
import Tela from "../compontes/Tela"

function Oportunidade () {
    const navigate = useNavigate()
   const Filtros = ["Recomendado","Estagios", "Programas","Todos"]

   const  oportunidades= [
    {

    id:"estagio-marketing",
    tipo:"Estagios",
    titulo:"markenting digital",
    empresa:"nossa seguros",
    local:"luanda - presencial",
    Icone: BiLaptop
   },
   {
    id:"talentos-tis",
    tipo:"Programas",
    titulo:"progrma de talentos de angola tis",
    empresa:"TIS",
    local: "luanda-hibrido",
    Icone: BiUser
   },
   {
    id:"desafio-africell",
    tipo:"Programas",
    titulo:"Desafio de inovacao africell",
    empresa:"Africell",
    local:"presencial",
    Icone: BiCalculator
   },
   {
    id:"estagio-sona",
    tipo:"Estagios",
    titulo:"estagio sonangol para enginheiros",
    empresa:"sonangol",
    Icone: BiAlarm,
    local:"presencial"

   }
   ]

   const [fativo,setFativo] = useState(Filtros[0])
     // "Recomendado" e "Todos" mostram tudo; os outros filtram por "tipo".
     // se filtros (fativo) vou igual ao tipo, entao mostra
   const oportu =
    fativo === "Recomendado" || "Todos"
    ? oportunidades
    : oportunidades.filter((o) => o.tipo === fativo)



    return(
        <Tela Menu>
            <h1 class="text-xl font-bold mb-4 text-texto" >Oportunidades para ti</h1>
             <div class="flex gap-2 mb-5 overflow-x-auto sem-scrollbar">
                {Filtros.map((filtro)=>(
                <button onClick={()=>setFativo(filtro)} key={filtro} class={`px-4 py-2 rounded-full text-sm whitespace-nowrap cursor-pointer ${
                    fativo === filtro 
                    ? "bg-v text-bg font-semibold"
                    : "bg-card text-ts"
                }`} >
                    {filtro}

                </button>
               ))}
             </div>

             <div class="flex flex-col gap-3">
                {oportu.map(({id,titulo, empresa,local, Icone})=>(
                    <button onClick={()=> navigate("/detalhe")}  key={id} class="flex items-center gap-3 bg-card border border-border rounded-2xl p-3 text-left" >
                        <div class="w-11 h-11 rounded-xl bg-a/20 flex items-center justify-center">
                        <Icone size={22} />
                        </div>
                        <div class="flex-1 capitalize ">
                            <p class="text-texto text-sm font-semibold"> {titulo} </p>
                            <p class=" text-ts"> {empresa} </p>
                            <p  class="text-1xl"> {local} </p>
                        </div>
                        <span> <BiSave/> </span>
                    </button>
                ))}
             </div>

             <Menu/>  
        </Tela>

    )
}
export default Oportunidade