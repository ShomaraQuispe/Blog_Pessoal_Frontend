import { GithubLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'

import { AuthContext } from '../../contexts/Authcontext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
            <div className="flex justify-center bg-[#EEEEEE] text-black">
                <div className="container flex flex-col items-center py-4 gap-2">
                    <p className='text-xl font-medium'>
                        Blog Pessoal Shomara | Copyright: {data}
                    </p>
                    <p className='text-x font-bold'>Acesse o github!</p>
                    <div className='flex pb-2'>
                        <GithubLogo size={48} color="#EB6A15" weight="light" />
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

export default Footer