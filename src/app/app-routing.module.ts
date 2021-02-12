import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { Erro404Component } from './erro404/erro404.component';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    
  },
  {
    path: 'alunos', component: AlunosComponent
  },
  {
    path: 'professores', component: ProfessoresComponent
  },
  {
    path: '**', component: Erro404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
