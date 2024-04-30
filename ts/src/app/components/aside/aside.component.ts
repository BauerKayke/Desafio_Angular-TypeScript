import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
   items = [
    { name: 'Apresentação' },
    { name: 'Comitês' },
    { name: 'Autores' },
    { name: 'Eixos temáticos' },
    { name: 'Trabalhos' },
    { name: 'Contatos' }
  ];
  activeIndex: number | null = null;
  setActiveIndex(index: number) {
    this.activeIndex = index;
  }
}
