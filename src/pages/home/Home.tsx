
import './Home.css'

function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <h1>Seja Bem Vinde!</h1>
                        <p>Expresse aqui seus pensamentos e opiniões</p>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <img 
                            src="https://i.pinimg.com/originals/7d/07/a2/7d07a255678962d30d8717dcf5dbd266.gif" 
                            alt="Imagem da Página Home" 
                            width="400px"
                        />
                        <button><a href="https://github.com/ShomaraQuispe">Acesse meu GitHub!</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home