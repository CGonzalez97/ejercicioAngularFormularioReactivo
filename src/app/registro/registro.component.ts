import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formularioRegistro: FormGroup;

  constructor(private readonly fb:FormBuilder) {
    /*this.formularioRegistro = new FormGroup({
      usuario: new FormControl('', Validators.required),
      contrasenya: new FormControl()
    });*/
    this.formularioRegistro = this.fb.group({
      usuario: ['', Validators.required],
      contrasenya: []
    });
   }

  ngOnInit(): void {
  }

}
