import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'spadio-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  showtable:boolean = false;


  listAlunos: alunos[] = [
    {nome: "Bruno", idade: 33, email: "bruno.pfsilva@hotmail.com",curso: "Angular 11"}
  ];

  displayedColumns: string [] = ["Nome","Idade","E-mail","Curso"]

  constructor() { }

  showTable (){
    this.showtable = true;
  }


  ngOnInit(): void {
    
  }


}
