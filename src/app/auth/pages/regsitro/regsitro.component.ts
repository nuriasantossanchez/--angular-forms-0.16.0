import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { emailPattern, noPuedeSerStrider, nombreApellidoPatern } from '../../../shared/validator/validaciones';
import { ValidatorsService } from '../../../shared/validators/service/validators.service';

@Component({
  selector: 'app-regsitro',
  templateUrl: './regsitro.component.html',
  styles: [
  ]
})
export class RegsitroComponent implements OnInit {

  //Todo: Temporal
  // nombreApellidoPatern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  // emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  //TODO: Mover este metodo
  // noPuedeSerStrider(control: FormControl) {
  //   // console.log(control.value);
  //   const valor:string = control.value?.trim().toLowerCase();
  //   console.log(valor);

  //   if (valor === 'strider'){
  //     // return ERROR !!
  //     return {
  //       noStrider: true
  //     }
  //   }
  //   return null; // en uan validación, retornar un null significa que todo a ido bien
  // }


  // miFormulario: FormGroup = this.fb.group({
  //   nombre: ['', [Validators.required, Validators.pattern(nombreApellidoPatern)]],
  //   email: ['', [Validators.required, Validators.pattern(emailPattern)]],
  //   //mandamos la referencia a la función, no el metodo, xq queremos enviar la referencia a la funcion que queremos ejecutar
  //   //cada vez que cambie el valor del campo o se modificque el formulario
  //   username: ['', [Validators.required, noPuedeSerStrider]],

  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPatern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    //mandamos la referencia a la función, no el metodo, xq queremos enviar la referencia a la funcion que queremos ejecutar
    //cada vez que cambie el valor del campo o se modificque el formulario
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],

  })

  constructor(private fb: FormBuilder, private validatorService: ValidatorsService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Nuria Santos',
      email: 'test1@test.com',
      username: 'nuria'
    });
  }

  campoNoValido (campo: string) {
    return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }


}
