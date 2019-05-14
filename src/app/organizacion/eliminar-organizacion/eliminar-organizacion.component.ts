import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { OrganizacionService } from '../organizacion.service';
import { ResourceLoader, ThrowStmt } from '@angular/compiler';
import { Organizacion } from '../organizacion';
@Component({
  selector: 'app-eliminar-organizacion',
  templateUrl: './eliminar-organizacion.component.html',
  styleUrls: ['./eliminar-organizacion.component.css']
})
export class EliminarOrganizacionComponent implements OnInit {

  organizaciones: Organizacion[];
  organizacion: Organizacion;

  //Constructor del componente con variables a usar
  constructor(private OrganizacionService: OrganizacionService, private route: ActivatedRoute) { }

  getOrganizaciones(): void {
    this.OrganizacionService.getOrganizaciones().subscribe(organizaciones => {
    this.organizaciones = organizaciones;
    });
  }
  /**
  * Eliminar una organizacion
  */
  eliminarOrganizacion(): void {
    this.OrganizacionService.deleteOrganizacion(this.organizacion.id).subscribe();
  }

  //Inicializacion del componente
  ngOnInit() {
    this.getOrganizaciones();
    this.organizacion = new Organizacion();
  }
}