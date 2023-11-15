import { ReactNode, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignOut, User} from '@phosphor-icons/react'

import { AuthContext } from '../../contexts/Authcontext'
import { toastAlerta } from '../../utils/toastAlerta'

function Navbar() {

    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'sucess')
        navigate('/login')
    }

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
            <div className='w-full bg-[#EEEEEE] text-[#42362E] flex justify-center py-4'>
                <div className="container flex justify-between text-lg ">
                    <Link to='/home' className='text-2xl font-bold px-12'>Blog Pessoal</Link>

                    <div className='flex gap-8'>
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastroTema' className='hover:underline'>Cadastrar Tema</Link>
                        <button 
                            className=' rounded-full ... px-14 flex justify-center transition ease-in-out delay-100 bg-[#EB6A15] hover:-translate-y-1 hover:scale-100 duration-150 ...'>
                            <Link to='/postagens' className='text-white'>Postagens</Link>
                        </button>
                        <Link to='/perfil' className='hover:underline'><User size={32} color="#42362E" weight="duotone" /></Link>
                        <Link to='' onClick={logout} className='hover:underline pr-12'><SignOut size={32} color="#42362E" weight="duotone" /></Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar