import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
@Output() guardarNombreHeroe = new EventEmitter<string>();

@Input() heroeIndividual: any;

  constructor() { }

 
  nombre: string;

  ngOnInit(){

    this.nombre = '';
    
  }

  guardarNombre(heroeNombre : string){
    this.guardarNombreHeroe.emit(heroeNombre);
  }

  

}
