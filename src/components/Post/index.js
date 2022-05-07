import './style.css'
import {FiMoreHorizontal} from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat,BsEmojiSmile} from 'react-icons/bs'
import {FiSend} from 'react-icons/fi'
import {BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons'

export function Post(){
    return(
        <>
        <header className='header-post'>

            <div className="infos-post">
            <img className='img-header-post' src="https://staticg.sportskeeda.com/editor/2019/09/03ead-15688918737420-800.jpg"/>

            <p>John Cena</p>
            </div>
            <FiMoreHorizontal />
        </header>

        <div className='img-post'>
            <img src='https://i1.wp.com/www.comicsbeat.com/wp-content/uploads/2020/09/PeacemakerHBOMax.jpg?ssl=1'/>
        </div>

        <div className='footer-post'>
            <IconContext.Provider value={{size:'30px'}}>
            <section className='engagement-post'>
                <div className='icons1'>
                <div className='icon'><IoMdHeartEmpty/></div>
                <div className='icon'><BsChat/></div>
                <div className='icon'><FiSend/></div>
                </div>

                <div className='icon'><BsBookmark/></div>

            </section>
            </IconContext.Provider>

        <section className='likes'>
            <span>200.000 curtidas </span>
        </section>

        <div className='legend'>
            <p>
                <strong>John Cena</strong> If you don´t watch my series, I am gonna ki*k your as* mother**
            </p>

            <div className='clock'>
                <time>HÁ 3 HORAS</time>
            </div>

            <div className='comment'>
                <div className='fake-comment'>
                <IconContext.Provider value={{size: '25px'}}>
                    <div className='icon'>
                    <BsEmojiSmile />
                    </div>
                </IconContext.Provider>

                <input placeholder='Adicione um comentário...'/>
                </div>

                <button>Publicar</button>
        </div>

        </div>
        </div>
        </>
    )
}