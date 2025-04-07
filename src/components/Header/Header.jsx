import imgRef from '../../assets/react-core-concepts.png'
import './Header.css'
const reactDescriptions=["Fundamentals","Core","Essential"]
function getRandomInt(max) {
    return Math.floor(Math.random() * (max+1) )
  }

export default function Header() {
    return( <header>
            <img src={imgRef} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
              {reactDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are
              going to build!
            </p>
          </header>
    )
}