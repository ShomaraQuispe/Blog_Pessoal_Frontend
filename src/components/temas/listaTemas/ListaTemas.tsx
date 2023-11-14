import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/Authcontext';

import Tema from '../../../models/Tema';
import CardTemas from '../cardTemas/CardTemas';
import { toastAlerta } from '../../../utils/toastAlerta';

function ListaTemas() {

    const [temas, setTemas] = useState<Tema[]>([]);

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info');
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        buscarTemas()
    }, [temas.length])

    return (
        <>
        
            {temas.length === 0 && (
                <div className='flex justify-center w-full absolute top-1/2'>
                <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}             
              />
              </div>
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {temas.map((tema) => (
                            <>
                                <CardTemas key={tema.id} tema={tema} />
                            </>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaTemas