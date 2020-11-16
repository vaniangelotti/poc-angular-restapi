import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Lembrete } from '../../interfaces/lembrete';

@Component({
  selector: 'app-form-lembrete',
  templateUrl: './form-lembrete.component.html',
  styleUrls: ['./form-lembrete.component.css']
})
export class FormLembreteComponent {
  @Input() lembrete: Lembrete = <Lembrete>{};
  @Output() outputLembrete: EventEmitter<Lembrete> = new EventEmitter();

  // é o método onSubmit o responsável por passar ao componente pai o obj lembrete de saida(outputLembrete).
  onSubmit(){
    this.outputLembrete.emit(this.lembrete);
  }

}
