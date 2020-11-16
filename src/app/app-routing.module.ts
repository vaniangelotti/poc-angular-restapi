import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './paginas/editar-lembrete/editar-lembrete.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';

// toda página que for criada deverá ser feita a configuração da rota, composta pelo path e componente a ser carregado,
// quando o path fica em branco significa que será carregado na pagina principal 
const routes: Routes = [
  { path: '', component: ListaLembreteComponent },
  { path: 'lembrete/criar', component: CriarLembreteComponent },
  { path: 'lembrete/editar/:id', component: EditarLembreteComponent },
  { path: '**', redirectTo: ''} //configura redirecionamento para rota principal (listarLembreteComponent) caso solicitado um request para rota inexistente.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
