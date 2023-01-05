import foodGIF from '../assets/images/fastfood.gif'
import classes from './Loading.module.css'

const Loading = () =>{
    return(
        <div className={classes.loading}>
            <img alt='' src={foodGIF}/>
        </div>
    )
}

export default Loading;