import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    post: Postagem
}

function CardPostagens({ post }: CardPostagensProps) {
    return (
        <div className='border-black border flex flex-col rounded-[10px] overflow-hidden justify-between max-w-sm'>

            <div>
                <div className="flex w-full py-4 px-8 items-center gap-4">
                    <img src={post.usuario?.foto} className='h-12 rounded-full' 
                        alt="Imagem do Usuário" />
                    <h3 className='text-lg font-medium text-center text-[#42362E]'>{post.usuario?.nome}</h3>
                </div>
                <div className="flex justify-center p-6 ">
                        <img
                            src="https://i.pinimg.com/564x/7d/ef/31/7def3103e6b91cb797ea51d32f55fbd9.jpg"
                            alt="Imagem Página Home"
                            className='scale-100 max-h-52'
                        />
                    </div>
                <div className='p-8 text-[#42362E]'>
                    <h4 className='text-2xl font-medium '>{post.titulo}</h4>
                    <p className='font-light text-lg'>{post.texto}</p>
                    <p className='font-bold text-ms text-[#EB6A15]'>Tema: {post.tema?.descricao}</p>
                    <p className='font-bold text-xs text-[#737373]'>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(post.data))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-[#EB6A15] 
                    hover:bg-[#FB8D3B] flex items-center justify-center py-2 '>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarPostagem/${post.id}`} className='text-[#42362E] bg-white 
                    border-[#EB6A15] hover:bg-[#d2d2d2]
                     w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagens