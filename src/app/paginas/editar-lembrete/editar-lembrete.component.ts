import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErroMsgComponent } from '../../compartilhado/erro-msg/erro-msg.component';
import { LembreteService } from '../../services/lembrete.service';
import { Lembrete } from '../../interfaces/lembrete';


@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent {

  public lembrete: Lembrete;
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  constructor(private lembreteServices: LembreteService, 
    private activedRouter: ActivatedRoute,
    private router: Router, ) { 
      this.getLembrete(this.activedRouter.snapshot.params.id);
    }

    getLembrete(id: number){
      this.lembreteServices.getLembrete(id)
      .subscribe((lembrete: Lembrete) => { 
          this.lembrete = lembrete;
        }, () => { this.erroMsgComponent.setarErro('Falha ao bustar o lembrete'); });
    }

    atualizarLembrete(lembrete: Lembrete){
      this.lembreteServices.atualizarLembrete(lembrete)
        .subscribe(
          () => { this.router.navigateByUrl('/'); },
          () => { this.erroMsgComponent.setarErro('Falha ao atualizar o lembrete');}
        );
    }
  
}
