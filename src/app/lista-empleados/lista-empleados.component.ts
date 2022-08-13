import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];

  constructor() { }

  ngOnInit(): void {
    this.empleados =[{
      "id": 1,
      "nombre": "Mario",
      "apellido": "Hugo",
      "email": "mariohugo@mail.com"
    },
    {
      "id": 2,
      "nombre": "Guachi",
      "apellido": "Mingo",
      "email": "guachimingo@mail.com"
    }];
  }

}
