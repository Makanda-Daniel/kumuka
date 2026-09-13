import Tela from "../compontes/Tela"
import Menu from "../compontes/Menu"
import { useState } from "react"
import { BiAlarm, BiUser } from "react-icons/bi"
import { LuLaptop } from "react-icons/lu"
import { useNavigate } from "react-router-dom"



function Portfolio() {

    const navigate = useNavigate()

    // abas que vao aparecer no topo 
   const  abas =["projectos","certificado","estagios"]

    // Projetos de exemplo que aparecem na aba "Projetos".

     const projectos = [
        {
            id:1,
            titulo:"mexer",
            categoria:"mark",
            estado:"concluido",
            Icone: BiUser,
            cor: "bg-v"
        },

        {
            id:2,
            titulo:"nnn",
            categoria:"bbbbbb",
            estado:"aaa",
            Icone: BiAlarm,
            cor:"bg-ts"
        }
     ]

          // comeca na aba 0, que é o projecto- guarda qual das 3 abas está selecionada
        const [ativa, setAtiva]  = useState( abas [0])
    return(
        <Tela menu>
            {/* Abas de navegação interna, com scroll horizontal em ecrãs estreitos */}
            <div class="flex gap-2 mb-5 overflow-x-auto sem-scrollbar">
                {abas.map((aba) =>(
               //quando eu clicar numa nova aba, aguarda
                <button key={aba} onClick={()=> setAtiva(aba)} className={` px-4 py-2 rounded-full text-sm whitespace-nowrap cursor-pointer ${
                    ativa === aba 
                    ?  "bg-v text-fundo font-semibold"
                    : "bg-card text-ts"

                }`} >

                    {aba}
                </button>
                ))}
            </div>


 {/* O valor que esta na ativa, que vem apartir da aba, e igual a projecto */}
                   
           
                {ativa === "projectos" ? (
                    <div class="flex flex-col gap-3">
                        {projectos.map(({id,titulo,categoria,Icone,estado,cor})=>(
                            <div key={id} className="flex items-center gap-3 bg-card border border-border rounded-2xl p-3 cursor-pointer" >

                            <div class={`w-11 h-11 rounded-xl ${cor} flex items-center justify-center`}
                                                    >
                            <Icone size={18} />
                           </div>

                            <div>
                                <p className="text-sm text-texto font-semibold">{titulo}</p>
                                <p className="text-xs text-ts">{categoria}</p>
                                <p className="text-xs text-v">{estado}</p>

                            </div>
                                
                            </div>
                        ))}
                    </div>
                ) : (
                    // Mensagem simples para as abas que ainda não têm conteúdo real.
                    <p class="text-sm text-ts text-center py-10">
                        Ainda não tem conteudo de "{ativa} "
                    </p>
                )}

                <div class="flex-1" />

                <button onClick={()=> navigate("/oportunidade")} class="flex items-center justify-center gap-2 border border-border rounded-xl py-3 text-sm text-texto bg-v cursor-pointer" > <LuLaptop size={22} />  novo projecto</button> 



            <Menu/> 
        </Tela>

    )
}

export default Portfolio