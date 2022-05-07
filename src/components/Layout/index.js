import './style.css'
import {Post} from '../Post'
import {Story} from '../Story'
import { Sugestões } from '../Sugestões'
export function Layout(){
    return(
        <>
            <div className='main-grid'>
            <div className='first-column' style={{gridArea: 'firstColumn'}}>
            <div className="box">
                <Story />
            </div>

            <div className="box" style={{margin: '30px 0'}}>
                <Post/>
            </div>
            
            </div>

            <div style={{GridArea:'secondColumn'}}>
            <div className="suggestion-box">
               <Sugestões/>
            </div>
        </div>
        </div>
        </>
    )
}