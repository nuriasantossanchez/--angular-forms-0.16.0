import { FormControl } from '@angular/forms';

export const nombreApellidoPatern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern        : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerStrider = (control: FormControl) => {
    // console.log(control.value);
    const valor:string = control.value?.trim().toLowerCase();
    console.log(valor);
    
    if (valor === 'strider'){
      // return ERROR !!
      return {
        noStrider: true
      }
    }
    return null; // en uan validación, retornar un null significa que todo a ido bien
  }
