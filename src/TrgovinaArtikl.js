import React from "react";
import Artikli from "./artikl.json"
const handleClick = () => {
    alert('ARTIKL NIJE DOSTUPAN');
};
function DopustiUlaz() {
    return <td><button type="button" class="btn btn-primary">Dodaj u kosaru</button></td>;
    }
    function UlazZabranjen() {
        return <td><button type="button"onClick={handleClick} class="btn btn-primary">Posalji upit</button></td>;
        }
      
function TrgovinaArtikl(){
    const DisplayData=Artikli.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.Id}</td>
                    <td>{info.Naziv}</td>
                    <td>{info.Proizvodac}</td>
                    <td>{info.Model}</td>
                    <td>{info.Cijena}</td>
                    <>
{ (info.Kolicina > 0) ? <DopustiUlaz/> : <UlazZabranjen/> }
</>
                </tr>
                
            )
        }
    )
return(DisplayData);
   
}
export default TrgovinaArtikl;