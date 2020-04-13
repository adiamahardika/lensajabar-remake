import React ,{Component} from 'react'
import Images from '../images/berita-2.jpg'
import './css/Side.css'
class Banner extends Component {
    render(){
        return(
            <div className="side"> 
            <div className="news">BERITA TERBARU</div>
            <div className="row">
                <div className="col-sm-6 side-news">Lorem Ipsum</div>
                <div className="col-sm-6"><img className="side-news-images" src={Images} alt='Images'/></div>
            </div>
            <div className="row">
                <div className="col-sm-6 side-news">Lorem Ipsum</div>
                <div className="col-sm-6"><img className="side-news-images" src={Images} alt='Images'/></div>
            </div>
            <div className="row">
                <div className="col-sm-6 side-news">Lorem Ipsum</div>
                <div className="col-sm-6"><img className="side-news-images" src={Images} alt='Images'/></div>
            </div>
            <div className="row">
                <div className="col-sm-6 side-news">Lorem Ipsum</div>
                <div className="col-sm-6"><img className="side-news-images" src={Images} alt='Images'/></div>
            </div>
            </div>
        )
    }
}
export default Banner