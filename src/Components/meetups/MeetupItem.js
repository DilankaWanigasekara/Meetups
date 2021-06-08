import classes from './MeetupItem.module.css'
import Card from '../Ui/Card'
import {useContext} from 'react'
import FavoriteContext from '../../Store/Favourites-context'


function MeetupItem(props){
    const FavoriteCtx=useContext(FavoriteContext)
    const IsFavorite=FavoriteCtx.isfavorite(props.id)
    function Toggle(){
if (IsFavorite){
    FavoriteCtx.removeFavorite(props.id)
}
    else{
        FavoriteCtx.AddFavorite({
            id:props.id,
            title:props.title,
            description:props.description,
            image:props.image,
            address:props.address,
        }) 
    }
}
    
return <Card><li className={classes.item}>
    <div className={classes.image}>
        <img src={props.image} alt=""/>
    </div>
    <div className={classes.content}>
        <h3>{props.title}</h3>
        <address> {props.address}</address>
        <p>{props.description}</p>
    </div>
    <div className={classes.actions}>
        <button onClick={Toggle}> {IsFavorite ? "Remove from favorites" : "Add to favorites"}</button>
    </div>
    
</li>
</Card>
}
export default MeetupItem