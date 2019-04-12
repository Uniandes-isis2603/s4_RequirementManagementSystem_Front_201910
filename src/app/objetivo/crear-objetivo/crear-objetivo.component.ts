import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../objetivo';
import { ObjetivoService } from '../objetivo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-objetivo',
  templateUrl: './crear-objetivo.component.html',
  styleUrls: ['./crear-objetivo.component.css']
})
export class CrearObjetivoComponent implements OnInit {

  //Objeto para crear el nuevo objetivo
  objeto: any = {};

  //Objetivo a crear
  objetivo: Objetivo;

  constructor(private service:ObjetivoService, private router: Router) 
  {
    
  }

  ngOnInit() {
  }

  //Metodo para crear un objetivo y llamar al servicio para hacer el POST
  crearObjeto()
  {
    //console.log(this.objeto);
    this.objetivo = this.objeto;
    console.log(this.objetivo);
    this.service.addObjetivo(this.objetivo).subscribe((obj)=> {this.objetivo = obj})
    this.router.navigate(['/objetivos']);
  }
}
