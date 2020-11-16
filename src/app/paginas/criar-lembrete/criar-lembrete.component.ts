import { Route } from '@angular/compiler/src/core';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ErroMsgComponent } from '../../compartilhado/erro-msg/erro-msg.component';
import { Lembrete } from '../../interfaces/lembrete';
import { LembreteService } from '../../services/lembrete.service';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent  {

  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;
   
  constructor(private lembreteService: LembreteService, private router: Router){
    
  }

  addLembrete(lembrete: Lembrete){
    this.lembreteService.addLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/'); }, //primeiro callback, se sucesso redireciona para a tela inicial.
        () => { this.erroMsgComponent.setarErro('Falha ao adicionar o lembrete') } // segundo callback em caso de erro.
      );
  }

}
