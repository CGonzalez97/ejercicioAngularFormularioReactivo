import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formularioRegistro: FormGroup;
  contrasenyasNoCoinciden:Boolean = true;

  constructor(private readonly fb:FormBuilder) {
    /*this.formularioRegistro = new FormGroup({
      usuario: new FormControl('', Validators.required),
      contrasenya: new FormControl()
    });*/
    this.formularioRegistro = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      contrasenya: ['', Validators.required],
      repetirContrasenya: ['', Validators.required],
      telefono: [, [Validators.required,Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email]]
    });
   }

  ngOnInit(): void {
  }

  comprobarContrasenyas(){
    if(this.formularioRegistro.controls['contrasenya'].value == this.formularioRegistro.controls['repetirContrasenya'].value){
      this.contrasenyasNoCoinciden = false;
    }else{
      this.contrasenyasNoCoinciden = true;
    }
  }

  enviar(){
    alert(this.formularioRegistro.controls['nombre'].value +' '+this.formularioRegistro.controls['apellidos'].value+'\n'+
    this.formularioRegistro.controls['telefono'].value+'\n'+
    this.formularioRegistro.controls['email'].value);
  }

}
