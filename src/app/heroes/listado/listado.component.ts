import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListadoComponent {

  constructor() { 
    console.log('Constructor');
  }

  heroes: string[] = ['Hulk','Iron-Man','Thor','Capitan America'];
  heroeBorrado: string = '';
  // borrado: boolean = false;

  borrar(){
    
    this.heroeBorrado = this.heroes.shift() || '';

    // if(this.heroeBorrado.length>0){
    //   this.borrado = true;
    // }
    // else{
    //   this.borrado = false;
    // }

  }

}
