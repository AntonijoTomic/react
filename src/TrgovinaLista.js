import React from "react";
import Artikli from "./artikl.json"
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import TrgovinaArtikl from "./TrgovinaArtikl";


        
function TrgovinaLista(){
    

    return(
        <div>
   <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Naziv</th>
      <th>Prozvodac</th>
      <th>Model</th>
      <th>Cijena</th>
      <th>Kolicina</th>
    </tr>
  </thead>
  <tbody>
  <TrgovinaArtikl/>
                    
  </tbody>
</Table>
     </div>
    )
}
export default TrgovinaLista;