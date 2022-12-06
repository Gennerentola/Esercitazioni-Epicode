import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms'

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {

  title = 'reactiveForm_A';
  form!: FormGroup;
  nomiProibiti = ['Fava'];

  constructor(private fb: FormBuilder) { }

  validName = (formC: FormControl) => {
    if (this.nomiProibiti.includes(formC.value)) {
      return { 'nomeProibito': true };
    } else {
      return null;
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      heroInfo: this.fb.group({
        nome: this.fb.control(null, [Validators.required, this.validName]),
      }),
      superpoteri: this.fb.array([])
    });

    this.form.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  getErrorsC(name: string, error: string) {
    return this.form.get(name)?.errors![error];
  }

  getFormC(name: string) {
    return this.form.get(name);
  }

  getSuperpoteriF() {
    return (this.form.get('superpoteri') as FormArray).controls;
  }

  addSuperpoteri() {
    const control = this.fb.control(null);
    (this.form.get('superpoter') as FormArray).push(control);
  }

  submit() {
    console.log(this.form);
    console.log('Form correttamente inviato');
    this.form.reset();
  }

}
