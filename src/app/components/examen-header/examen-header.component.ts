import { Component } from '@angular/core';

@Component({
  selector: 'app-examen-header',
  templateUrl: './examen-header.component.html',
  styleUrls: ['./examen-header.component.css']
})
export class ExamenHeaderComponent {

  constructor() { }

  scrollToInfo(): void {
    let info = document.getElementById("#main");
    info.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  scrollToInscriptos(): void {
    let inscriptosAnchor = document.getElementById("#inscriptos");
    inscriptosAnchor.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

  }
}
