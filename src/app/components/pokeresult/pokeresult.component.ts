import { Component, OnInit } from '@angular/core';


const apiData = {
  url: 'https://pokeapi.co/api/v2/',
  type: 'pokemon',
  id: '1'
};

const {url, type, id} = apiData;

const apiUrl = `${url}${type}/${id}`;


@Component({
  selector: 'app-pokeresult',
  templateUrl: './pokeresult.component.html',
  styleUrls: ['./pokeresult.component.scss']
})
export class PokeresultComponent implements OnInit {

  datosok: any = '';
  datosokList: any = { id, name };
  searchName: any = '';

  constructor() { }

  ngOnInit(): void {

    console.log(apiUrl);
    fetch(apiUrl)
    .then( (datos) => datos.json())
    .then( (pokemon) => generateJson(pokemon));

    const generateJson = (datos) => {
      console.log(datos);
      this.datosok = datos;

      this.datosokList.id = datos.id;
      this.datosokList.name = datos.name;

      console.log(this.datosok);
      console.log(this.datosokList);
    };
  } /*
  searchId(( set.apiData ) => {
    apiData.id = this.searchId;
  });*/
}
