import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre = new FormControl('');
  clave = new FormControl('');
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
onIniciar(){
  if(this.nombre.value == 'admin' && this.clave.value == 'admin'){
   console.log('Inicio correcto');
   localStorage.setItem('saldo', '100000');
   console.log(localStorage.getItem('saldo'));
   this.router.navigate(['/menu']);
  }else{
   console.log('Datos incorrectos');
  }
}
}
