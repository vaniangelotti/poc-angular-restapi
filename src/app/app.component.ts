import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { ErroMsgComponent } from './compartilhado/erro-msg/erro-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  titulo = 'Crud de lembrete com angular';

  // a decoracão ViewChild permite que os métodos da classe ErrosMsgComponent sejam acessados do AppComponent, se ele o obj ViewChild
  //  é instanciado da maneira abaixo, deverá ser utilizado o método do cycle hook ngAfterViewInit() para acessar os métodos da classe filha.
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  ngAfterViewInit() {
    //this.erroMsgComponent.setarErro('oi');
  }
}
