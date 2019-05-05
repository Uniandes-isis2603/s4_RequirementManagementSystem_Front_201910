import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


import { Stakeholder } from '../stakeholder';
import { StakeholderService } from '../stakeholder.service';
import { OrganizacionService } from '../../organizacion/organizacion.service';
import { Organizacion } from '../../organizacion/organizacion';

@Component({
  selector: 'app-update-stakeholder',
  templateUrl: './update-stakeholder.component.html',
  styleUrls: ['./update-stakeholder.component.css']
})
export class UpdateStakeholderComponent implements OnInit {

  //objeto tipo stakeholder, almacenara la informacion a acutalizar
  stakeholder: Stakeholder;

  //objeto tipo organizacion
  organizaciones:Organizacion[];

  stakeholders: Stakeholder[];

  //Constructor con variables a usar
  constructor(private stakeholderService: StakeholderService, private organizacionService: OrganizacionService, private route: ActivatedRoute) { }

  //Obtiene lista de organizaciones en el sistema
  /**
  * Obtener lista de todas las organizacions
  */
 getOrganizaciones(): void {
  this.organizacionService.getOrganizaciones().subscribe(organizacions => { this.organizaciones = organizacions; });
}

getStakeholders(): void {
  this.stakeholderService.getStakeholders().subscribe(stakeholders => { this.stakeholders = stakeholders; });
}
  /**
  * Actualiza un Stakeholder
  */
  updateStakeholder(): Stakeholder {  
    this.stakeholderService.updateStakeholder(this.stakeholder).subscribe(Stakeholder => {
      this.stakeholder.nombre = Stakeholder.nombre;
      this.stakeholder.tipo = Stakeholder.tipo;
    }
    );
    return this.stakeholder;
  }

  //inicializacion del objeto stakeholder
  ngOnInit() {
    this.stakeholder = new Stakeholder();
    this.stakeholder.organizacion = new Organizacion();
    this.getOrganizaciones();
  }
}