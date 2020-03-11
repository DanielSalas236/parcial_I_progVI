import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombre = new FormControl('');
  clave = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }
onIniciar(){
  if(this.nombre.value == 'admin' && this.clave.value == '123'){
   console.log('Inicio correcto');
  }else{
   console.log('Datos incorrectos');
  }
}
}
