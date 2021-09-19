import CardContainer from "./components/cardContainer"
import './App.css';
import Title from './components/title';
import ParticlesBackground from "./components/particlesBackground";
import Footer from "./components/footer";

function App() {

  return (
    <div>
      <ParticlesBackground />
      <Title id="spaceTitle" text={"Spacestagram"}/>
      <CardContainer id="spaceContainer"/>
      <Footer />
    </div>
  );
}


export default App;
