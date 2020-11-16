import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Lembrete } from '../../interfaces/lembrete';
import { LembreteService } from '../../services/lembrete.service';
import { ErroMsgComponent } from '../../compartilhado/erro-msg/erro-msg.component'; 

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
  public lembretes: Lembrete[];
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  // fazemos a injeção do servico via construtor e o angular gerencia a instancia do serviço.
  constructor(private lembreteService: LembreteService) { }

  ngOnInit(): void { 
    this.listarLembretes();
  }

  ngAfterViewInit(){

  }

  // ao chamar o getListarLembretes da Api, como o método retorna um observable utilizamos aqui o método subscribe que serve para obter
  // os retornos, se requisição com sucesso é executado o primeiro callback onde conseguimos ter a lista de lembretes, se falha na
  // então o segundo callback é acionado.
  listarLembretes(){
    this.lembreteService.getListarLembretes()
        .subscribe((lembretes: Lembrete[]) => {
          this.lembretes = lembretes;
        }, () => { this.erroMsgComponent.setarErro('Falha ao buscar lembretes.')});
  }

  deletarLembrete(id: number){
    this.lembreteService.deletarLembrete(id)
      .subscribe(() => {
        this.listarLembretes();
      }), () => { this.erroMsgComponent.setarErro('Falha ao excluir o lembrete.')};
  }

  // criado um método para verificar se existe lembretes cadastrados para apresentar mensagem na tela do componente.
  existeLembretes(): boolean{
    return this.lembretes && this.lembretes.length > 0;
  }
}
