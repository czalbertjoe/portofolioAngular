import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  modal1Visible: boolean = false;
  modal2Visible: boolean = false;
  modal3Visible: boolean = false;

  showModal(modal: string): void {
    if (modal === 'modal1') {
      console.log('Abriendo proyectos front espere...'); // Debug
      this.modal1Visible = true;
    }
    if (modal === 'modal2') {
      console.log('Abriendo proyectos back espere...'); // Debug
      this.modal2Visible = true;
    }
    if (modal === 'modal3') {
      console.log('Abriendo otros proyectos espere...'); // Debug
      this.modal3Visible = true;
    }
  }

  hideModal(modal: string): void {
    if (modal === 'modal1') {
      console.log('Cerrando gracias...'); // Debug
      this.modal1Visible = false;
    }
    if (modal === 'modal2') {
      console.log('Cerrando gracias...'); // Debug
      this.modal2Visible = false;
    }
    if (modal === 'modal3') {
      console.log('Cerrando gracias...'); // Debug
      this.modal3Visible = false;
    }
  }
}
