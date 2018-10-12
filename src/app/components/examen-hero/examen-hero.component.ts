import { Component } from '@angular/core';

@Component({
  selector: 'app-examen-hero',
  templateUrl: './examen-hero.component.html',
  styleUrls: ['./examen-hero.component.css']
})
export class ExamenHeroComponent {

  constructor() { }

  scrollToMain(): void {
    let mainAnchor = document.getElementById("#main");
    mainAnchor.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

  }
}
