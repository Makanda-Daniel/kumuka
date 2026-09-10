import Tela from "../compontes/Tela"
import Campo from "../compontes/Campo"
import Botao from "../compontes/Botao"
import Rede from "../compontes/Rede"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
function Registo () {

    const navigate = useNavigate()
    const [dados, setDados] = useState({
        nome:"",
        email:"",
        phone:"",
        senha:""
    })


    // Uma única função trata a mudança de QUALQUER campo.
  // "e.target.name" diz-nos qual input mudou (nome, email, etc.)
  // e "e.target.value" é o novo texto escrito.

    function Mudar(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

   // Quando o formulário é submetido, evitamos o comportamento padrão
  // do navegador (recarregar a página) e avançamos para a próxima tela.
  function Submeter(e) {
    e.preventDefault();
    navigate("/interesse");
  }



    return(
        <Tela>
            <h1 className="text-2xl font-bold mb-1">Cria a tua conta</h1>
            <p className="text-texto text-sm mb-6">
                Junta-te a milhares de jovens que estão a construir o futuro.
            </p>

            <form onSubmit={Submeter} class="flex flex-col gap-3">

                <Campo nome="nome" placeholder="nome" valor={dados.nome} aomudar={Mudar} tipo="text" />

                <Campo nome="email" placeholder="email" valor={dados.email} aomudar={Mudar} tipo="email" />

                <Campo nome="phone" placeholder="telefone" valor={dados.phone} aomudar={Mudar} tipo="tel" />

                <Campo nome="senha" placeholder="criar uma senha" valor={dados.senha} aomudar={Mudar} tipo="password" />

                <div className="mt-3">
                  <Botao tipo="submit">Criar conta</Botao>
                </div>
            </form>

            <p className="text-center text-xs text-ts my-4">                         ou continua com
            </p>

            {/* Botões de login social — apenas visuais, sem lógica real */}
            <div className="flex justify-center gap-4">
                <Rede>F</Rede>
                <Rede>F</Rede>
                <Rede>F</Rede>
            </div>

            <p className="text-center text-xs text-ts mt-6">
                Ao continuar, aceitas os nossos Termos e Política de Privacidade.
            </p>
        </Tela>
    )
}

export default Registo