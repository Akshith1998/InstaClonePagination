import "./Navbar.scss"
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate=useNavigate();
  const handlepost=()=>{
    navigate("/form")
  }
  return (
    <div className="container">
        <div className='navbar'>
            <div className="left-nav">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Instagram_font_awesome.svg/1024px-Instagram_font_awesome.svg.png" alt="" className="icon"/>
                <span>InstaClone</span>
            </div>
            <div className="right-nav">
                <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png" alt="" className="icon" onClick={handlepost}/>
            </div>
        </div>
        <hr/>
    </div>
  )
}

export default Navbar