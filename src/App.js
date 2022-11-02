
import Coord from './Components/Coord'
import pImg from './Toof.jpg';
   {/* <h1 style={{color:"blue",textAlign:'center'}}>Mes Coordonneés</h1> */}
   function App () {
    return (
      <div className="Container">
        <Coord imge={pImg} Nom="Mezrigui" Prenom="Faycel" DateNaissance="22/02/1988"
         Age="35 Ans"Email="mezrigui.faycel@gmail.com"  Adresse ="TUNISIE/ Jendouba/ghardimaou /8160" Linkedin="https://www.facebook.com/faycel.mezrigui" Facebook="https://www.facebook.com/faycel.mezrigui" />
      </div>
      );
  }
  export default App;


