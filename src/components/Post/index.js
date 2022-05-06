import './style.css'
import {FiMoreHorizontal} from 'react-icons/fi'
export function Post(){
    return(
        <>
        <header>

            <div className="infos-post">
            <img src="https://staticg.sportskeeda.com/editor/2019/09/03ead-15688918737420-800.jpg"/>

            <p>John Cena</p>
            </div>
            <FiMoreHorizontal />
        </header>

        <div className='img-post'>
            <img src='https://i1.wp.com/www.comicsbeat.com/wp-content/uploads/2020/09/PeacemakerHBOMax.jpg?ssl=1'/>
        </div>

        <div className='footer-post'>
            <section className='engagement-post'>

            </section>
        </div>
        </>
    )
}