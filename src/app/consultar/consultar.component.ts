import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
 public saldo = parseInt(localStorage.getItem('saldo'));
  constructor() { }

  ngOnInit(): void {
  }
}
