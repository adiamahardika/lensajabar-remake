import React ,{Component} from 'react'
import Images from '../images/Banner-Pemkab-Muba.jpg'
import './css/Banner.css'
class Banner extends Component {
    render(){
        return(
            <div className="container banner"> 
            <img src={Images} alt='Banner'/>
            </div>
        )
    }
}
export default Banner