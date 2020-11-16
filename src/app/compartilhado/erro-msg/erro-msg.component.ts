import { Component } from '@angular/core';

@Component({
  selector: 'app-erro-msg',
  templateUrl: './erro-msg.component.html',
  styleUrls: ['./erro-msg.component.css']
})
export class ErroMsgComponent {
  public erro: string;

   setarErro(msgErro: string, tempo: number = 5000){
    this.erro = msgErro;
    
    setTimeout(() => {
      this.erro = null;
    }, tempo);
  }
}
