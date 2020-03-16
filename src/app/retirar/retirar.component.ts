import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.component.html',
  styleUrls: ['./retirar.component.css']
})
export class RetirarComponent implements OnInit {
  saldo = parseInt(localStorage.getItem('saldo'));
  cant_retiros = parseInt(localStorage.getItem('cant_retiros'));
  retirar = new FormControl('');
  condicion1 = 0;
  constructor() {}
  ngOnInit(): void {}

  onRetirar() {
    this.condicion1 = this.saldo - this.retirar.value;
    if (this.cant_retiros != 0) {
      if (this.retirar.value > 600000) {
        Swal.fire({
          icon: 'error',
          title: 'No puedes retirar más de $ 600.000',
          text: '',
          footer: ''
        })
      } else if (this.condicion1 < 10000) {
        Swal.fire({
          icon: 'error',
          title: 'No puedes tener un saldo inferior a $ 10.000',
          text: '',
          footer: ''
        })
      } else {
        Swal.fire({
          title: 'Seguro que deseas retirar $ ' + this.retirar.value,
          text: "",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, retirar!'
        }).then((result) => {
          localStorage.setItem('saldo', this.condicion1.toString());
          localStorage.setItem('cant_retiros', (this.cant_retiros - 1).toString());
          if (result.value) {
            Swal.fire(
              'Retirado!',
              'Has retirado $' + this.retirar.value + '\nSu nuevo saldo es: $ ' + this.condicion1,
              'success'
            )
          }
        })
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Has superado el limite de retiros',
        text: '',
        footer: ''
      })
    }
  }
}
