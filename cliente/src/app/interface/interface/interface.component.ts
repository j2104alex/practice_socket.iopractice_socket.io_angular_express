import { Component } from '@angular/core';
import { NombreService } from 'src/app/service/nombre.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {
  constructor(private nombre:NombreService){ 
  }

  reproducirBoton(){
    this.nombre.emitir();
  }
}
