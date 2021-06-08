import{Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import {useContext} from 'react'
import FavoriteContext from '../../Store/Favourites-context'

function MainNavigation(){
    const favorite=useContext(FavoriteContext)
    
return <header className={classes.header}>
    <div className={classes.logo}>All meetups</div>
    <nav>
        <ul  >
            <li><Link to='/'>All Meet ups</Link></li>
            <li><Link to='/new-meetups'>New meetups</Link></li>
            <li><Link to='/favourite' >Favourites <span className={classes.badge}>{favorite.totalfavorites}</span>
            </Link></li>
        </ul>
    </nav>
</header> 
}
export default MainNavigation;