import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

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
this.saldo = this.saldo + parseInt();
}
}
