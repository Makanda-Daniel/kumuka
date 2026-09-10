import { BiBriefcase, BiCard, BiHome, BiTrophy, BiUser } from "react-icons/bi"
import { NavLink } from "react-router-dom"

function Menu () {
    

// Lista dos itens do menu. Guardamos numa lista (array) em vez de repetir

const itens = [
  { caminho: "/dashboard", rotulo: "Início", Icone: BiHome },
  { caminho: "/aprender", rotulo: "Aprender", Icone: BiCard },
  { caminho: "/desafios", rotulo: "Desafios", Icone: BiTrophy },
  { caminho: "/portfolio", rotulo: "Portfólio", Icone: BiBriefcase },
  { caminho: "/perfil", rotulo: "Perfil", Icone:BiUser },
]


/* MenuInferior.jsx
 
  Barra de navegação fixa no fundo do ecrã.

  Usamos <NavLink> (em vez de <Link>) porque ele sabe automaticamente
 dizer-nos se a rota está "ativa" (className recebe uma função).
 */

    return(

    <nav className="fixed bottom-0 left-0 right-0 flex justify-center bg-kumuka-bg border-t border-kumuka-border">
      <div className="w-full sm:max-w-md flex justify-between px-4 py-2">
        {itens.map(({ caminho, rotulo, Icone }) => (
          <NavLink
            key={caminho}
            to={caminho}
            // "isActive" vem automaticamente do React Router:
            // é "true" quando esta é a página atual.
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-2 py-1 text-xs ${
                isActive ? "text-v" : "text-ts"
              }`
            }
          >
            <Icone size={20} />
            <span>{rotulo}</span>
          </NavLink>
        ))}
      </div>
    </nav>


    )
}

export default Menu