import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemoveSpacesPipe } from './remove-spaces-pipe';
import { InputFormat } from './input-format';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RemoveSpacesPipe, InputFormat],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Lab 08 - Angular Data Binding & Directives';

  heroes = [
    { id: 11, name: 'Dr-Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr-IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
    { id: 21, name: 'Spider-Man' },
    { id: 22, name: 'Iron-Man' },
    { id: 23, name: 'Black-Panther' }
  ];

  selectedHero: any = null;
  userInput = '';

  selectHero(hero: any) {
    this.selectedHero = hero;
  }
}