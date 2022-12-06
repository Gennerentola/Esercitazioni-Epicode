import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../hero.interface';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  @ViewChild ('form', {static: true}) form!: NgForm;
  hero: Hero = {
    nome: '',
    alterEgo: '',
    superpotere: '',
    nemico: ''
  }



  constructor() { }

  ngOnInit(): void {

  }

  submit() {
    console.log('Form inviato: ', this.form);
    this.hero.nome = this.form.value.heroInfo.nome;
    this.hero.alterEgo = this.form.value.heroInfo.alterEgo;
    this.hero.superpotere = this.form.value.heroInfo.superpotere;
    this.hero.nemico = this.form.value.heroInfo.nemico;

    this.form.reset();
    console.log(this.hero);
}

}
