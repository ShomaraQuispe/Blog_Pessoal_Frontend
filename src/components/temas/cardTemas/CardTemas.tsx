import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border-black border flex flex-col rounded-[10px] overflow-hidden justify-between'>
            <header className='py-2 px-6 text-white font-medium text-ls bg-[#6B5F52]'>
                Tema
            </header>

            <p className='p-8 text-3xl h-full'>
                {tema.descricao}
            </p>

            <div className="flex">
                <Link to={`/editarTema/${tema.id}`}
                    className='w-full text-white bg-[#EB6A15] 
                    hover:bg-[#FB8D3B] flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarTema/${tema.id}`}
                    className='text-[#42362E] bg-white 
                    border-[#EB6A15] hover:bg-[#d2d2d2]
                     w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas