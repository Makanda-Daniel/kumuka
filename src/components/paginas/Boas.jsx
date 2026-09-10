import Tela from "../compontes/Tela"
import Botao from "../compontes/Botao"
import { useNavigate } from "react-router-dom"
import daniel from "../img/daniel.png"
function Boas () {
    const navigate = useNavigate()
    return(
        <Tela>
            {/* Logótipo + nome da marca */}
            <div className="flex items-center gap-2 mb-8">
                <div className="w-9 h-9 rounded-lg bg-v flex items-center justify-center font-extrabold text-texto">
                K
                </div>
                <div>
                <p className="font-bold leading-none text-texto">KUMUKA</p>
                <p className="text-xs text-kumuka-muted leading-none text-ts">
                    Constrói o teu futuro.
                </p>
                </div>
            </div>

            <img src={daniel} alt="Jovem sorrindo, representando os utilizadores do Kumuka" className="w-full h-72 object-cover rounded-2xl mb-8"/>

            <h1 className="text-3xl text-texto font-extrabold leading-tight mb-2">
                Aprende.
                <br />
                Desenvolve.
                <br />
                Conquista.
            </h1>

             {/* "flex-1" empurra o botão para o fundo da tela, tal como no mockup */}
           <div className="flex-1" />

           <Botao onClick={() => navigate("/registo")}>Começar agora</Botao>
            <p className="text-center text-sm text-ts mt-4">
                    Já tens conta?{" "}
                <button
                    onClick={() => navigate("/dashboard")}
                    className="text-ts text-kumuka-green font-bold cursor-pointer"
                    >
                    Entrar
                </button>
            </p>


        </Tela>

    )
}

export default Boas