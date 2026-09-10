 /* Props:
 titulo: texto principal do cabeçalho
   subtitulo: texto pequeno por baixo do título (opcional)
 */
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function Voltar ({titulo, subtitulo}) {
    const navigate = useNavigate()
    return(

        <div class="flex items-center gap-3 mb-6">
      <button
        onClick={() => navigate(-1)}
        aria-label="Voltar"
        class="p-2 -ml-2 rounded-full hover:bg-card cursor-pointer"
      >
        <BiArrowBack size={22} />
      </button>
      <div>
        <h1 class=" text-texto text-lg font-semibold leading-tight">{titulo}</h1>
        {subtitulo && (
          <p className="text-sm text-ts text-st leading-tight">{subtitulo}</p>
        )}
      </div>
    </div>

    )
}

export default Voltar