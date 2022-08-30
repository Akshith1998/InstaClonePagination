import "./LandingPage.scss"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="landingPage">
        <div className="leftColumn">
            <img src="./images/space.jpeg" alt="Creator:vchal"/>
        </div>
        <div className="rightColumn">
            <h1>10X TEAM</h1>
            <Link to="/post">ENTER</Link>
        </div>
    </div>
  )
}

export default LandingPage