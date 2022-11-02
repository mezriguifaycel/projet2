
function Coord(props){
    return(
       
        <div className="profile">
        < h3>Profile Personel</h3>
       <img src={props.imge}  className="imgf"/> <br/>
       <h2> <span>Nom :</span>  {props.Nom}</h2>
        <h2><span>Prenom:</span> {props.Prenom} </h2>
        <h2><span>Date de Naissance: </span>{props.DateNaissance} </h2>
        <h2><span>Email :</span> {props.Email} </h2>
        <h2><span>Age :</span> {props.Age} </h2>
        <h2><span>Adresse:</span> {props.Adresse} </h2>
       
       <a href={props.Linkedin}>Linkedin</a>
        <a href={props.Facebook}>Facebook</a>
      
         
        </div>
    );

}
export default Coord;
