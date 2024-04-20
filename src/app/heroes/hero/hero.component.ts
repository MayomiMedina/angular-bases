import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre:string = "Ana";
  public edad: number = 54;
  public fomulario: string =" Formulario";

  get cumple() : string{
    return this.fomulario.toUpperCase();
  }

  getHero() :string {
    return `${ this.nombre } - ${ this.edad }`;
  }
}
