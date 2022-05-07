import './style.css'
import { useEffect, useState } from 'react'
export function Sugestões(){

    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/Lusquinhasoa/followers`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])

    return(
        <div>
        <div className='contain'>
            <div className="header-suggestion">
                <img src={"https://github.com/Lusquinhasoa.png"}/>
            

            <div className="user-inf">
                <div className="infos">
                    <span>lucasalencaarl</span>
                    <p>Lucas Alencar</p>
                </div>
                <button className='switch'>Mudar</button>
            </div>
        </div>
            <div className='header-main'>
                <p>Sugestões para você</p>
                <span>Ver tudo</span>
            </div>

            <div className='users'>
                {slice.map((suggestion, key) => (
                    <div className='infosug' key={key}>
                    <img src={`https://github.com/${suggestion.login}.png`} />

                    <div className='infosu'>
                        <span>{suggestion.login}</span>
                        <p>Seguido por Camila Cabello</p>
                    </div>
                    <button className='follow'>Seguir</button>
                </div>
                ))}
        
                
            </div>

            <footer className='footer-sug'>
            <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                    <p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </div>
        </div>
    )
}