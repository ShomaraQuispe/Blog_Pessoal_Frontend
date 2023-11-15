import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className="bg-white grid justify-center">
                <div className="flex flex-col gap-4 items-center justify-center p-8 mt-3">
                        <h1 className='text-6xl font-serif font-bold text-[#42362E]'>
                            Utama
                        </h1>
                        <p className='text-xl text-[#42362E] '>
                            Expresse aqui seus pensamentos e opniões
                        </p>
                </div>
            </div>
            <div className="bg-white flex justify-center border-2 border-y-black ...">
                <div className='container grid grid-cols-2 text-black '>
                    <div className="flex flex-col gap-7 items-start justify-center p-12 text-[#42362E]">
                        <p className="text-x1 font-medium underline underline-offset-8 ... left-2 uppercase text-[#EB6A15]">
                            Mussum Ipsum
                        </p>
                        <h2 className='text-4xl font-medium'>
                            Mussum Ipsum, cacilds vidis litro abertis.  Sapie.!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center p-6 ">
                        <img
                            src="https://i.pinimg.com/564x/59/58/f6/5958f6ca3230e8566493e8802457aaf6.jpg"
                            alt="Imagem Página Home"
                            className='scale-100 max-h-96'
                        />
                    </div>
                </div>
            </div>
            <div className="p-8 py-12 text-[#42362E] grid justify-center">
                <h3 className="text-2xl font-bold ">
                    Expresse aqui seus pensamentos e opniões
                </h3>
                <p className='text-base font-medium py-4 text-center'>
                        Expresse aqui seus pensamentos e opniões
                </p>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home