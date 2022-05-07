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


        <header className='header-post2' style={{margin:'30px 0'}}>
            <div className="infos-post2">
            <img className='img-header-post2' src="https://scontent.fsod8-1.fna.fbcdn.net/v/t1.6435-9/101847092_3001723589921921_8239884239001092096_n.png?_nc_cat=1&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=OOvoDTyzZe8AX_FHqvZ&_nc_ht=scontent.fsod8-1.fna&oh=00_AT8aP6pMVnDBmqI-rFbo34uFWa3hT65wYyp0rFl5v_KJ0w&oe=629CC12C"/>

            <p>instituto.proa</p>
            </div>
            <FiMoreHorizontal />
        </header>

        <div className='img-post2'>
            <img src='https://www.proa.org.br/wp-content/uploads/2022/01/PROA_Carrossel25_Story1.jpg'/>
        </div>

        <div className='footer-post2'>
            <IconContext.Provider value={{size:'30px'}}>
            <section className='engagement-post'>
                <div className='icons1'>
                <div className='icon'><IoMdHeartEmpty/></div>
                <div className='icon'><BsChat/></div>
                <div className='icon'><FiSend/></div>
                </div>

                <div className='icon2'><BsBookmark/></div>

            </section>
            </IconContext.Provider>

        <section className='likes2'>
            <span>18.000 curtidas </span>
        </section>

        <div className='legend2'>
            <p>
                <strong>instituo.proa</strong> 8 passos para ajudar vocês neste momento temido pelos estudantes. Acalme, respire e brilhe!
            </p>

            <div className='clock2'>
                <time>2 sm</time>
            </div>

            <div className='comment2'>
                <div className='fake-comment2'>
                <IconContext.Provider value={{size: '25px'}}>
                    <div className='icon2'>
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