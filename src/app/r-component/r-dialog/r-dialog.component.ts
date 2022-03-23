import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r-dialog',
  templateUrl: './r-dialog.component.html',
  styleUrls: ['./r-dialog.component.css']
})
export class RDialogComponent implements OnInit {

  nome: string = ''
  sobrenome: string = ''
  apelido: string = ''
  cpf: string = ''
  telefone: string = ''
  endereco: string = ''


  constructor() { }

  ngOnInit(): void {
  }

}