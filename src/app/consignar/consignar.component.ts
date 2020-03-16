import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consignar',
  templateUrl: './consignar.component.html',
  styleUrls: ['./consignar.component.css']
})
export class ConsignarComponent implements OnInit {
  consignacion = new FormControl('');
  saldo = parseInt(localStorage.getItem('saldo'));
  constructor() { }

  ngOnInit(): void {
  }
onConsignar(){
  Swal.fire({
    title: 'Seguro que deseas consignar $ '+this.consignacion.value,
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, consignar!'
  }).then((result) => {
    this.saldo = this.saldo + this.consignacion.value;
localStorage.setItem('saldo', this.saldo.toString());
    if (result.value) {
      Swal.fire(
        'Consignado!',
        'Has consignado $ '+this.consignacion.value+'\nSu nuevo saldo es: $ '+this.saldo,
        'success'
      )
    }
  })
}
}
