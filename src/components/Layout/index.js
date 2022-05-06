import './style.css'
import {Post} from '../Post'
import {Story} from '../Story'
export function Layout(){
    return(
        <>
            <div className='main-grid'>
            <div className='first-column' style={{gridArea: 'firstColumn'}}>
            <div className="box">
                <Story />
            </div>

            <div className="box">
                <Post/>
            </div>
            </div>

            <div className="suggestion-box"style={{GridArea:'secondColumn'}}>
                exemplo
            </div>
        </div>
        </>
    )
}