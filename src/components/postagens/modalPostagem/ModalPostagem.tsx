import Popup from 'reactjs-popup';
import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='text-[#42362E] rounded-full ... border-2 border-[#EB6A15] px-10 py-2 hover:bg-[#EB6A15] hover:text-white '>
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormularioPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;