import React ,{Component} from 'react'
import Images from '../images/berita-2.jpg'
import './css/Side.css'
class Side extends Component {
    render(){
        return(
            <div className="side"> 
                <div className="news">BERITA TERBARU</div>
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <div className="side-news">Lorem Ipsum</div>
                        <div className="side-update">30 menit</div>
                    </div>
                    <div className="col-sm-6"><img className="side-news-images" src={Images} alt='Images'/></div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-6">
                        <div className="side-news">Lorem Ipsum</div>
                        <div className="side-update">30 menit</div>
                    </div>
                    <div className="col-sm-6"><img className="side-news-images" src={Images} alt='Images'/></div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-6">
                        <div className="side-news">Lorem Ipsum</div>
                        <div className="side-update">30 menit</div>
                    </div>
                    <div className="col-sm-6"><img className="side-news-images" src={Images} alt='Images'/></div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-6">
                        <div className="side-news">Lorem Ipsum</div>
                        <div className="side-update">30 menit</div>
                    </div>
                    <div className="col-sm-6"><img className="side-news-images" src={Images} alt='Images'/></div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-6">
                        <div className="side-news">Lorem Ipsum</div>
                        <div className="side-update">30 menit</div>
                    </div>
                    <div className="col-sm-6"><img className="side-news-images" src={Images} alt='Images'/></div>
                </div>
            </div>
        )
    }
}
export default Side