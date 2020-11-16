import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';

// este código permite deixar o serviço disponível para toda aplicação.
@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  //quando passamos a variável no construtor com o modificador de acesso private não há necessidade de criar uma nova instancia do HttpClient com o operador New.
  constructor(private http: HttpClient) { }

  // chamado pelo componente lista-lembrete
  getListarLembretes(): Observable<Lembrete[]>{
    const url = `${environment.lembreteApiUrl}/lembrete`;
    return this.http.get<Lembrete[]>(url);
  }
  
  // chamado pelo componente editar-lembrete.
  getLembrete(id: number): Observable<Lembrete>{
    const url = `${environment.lembreteApiUrl}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }

  // chamado pelo componente criar-lembrete.
  addLembrete(lembrete: Lembrete): Observable<Lembrete>{
    const url=`${environment.lembreteApiUrl}/lembrete`;
    return this.http.post<Lembrete>(url, lembrete);
  }

  // chamado pelo componente editar-lembrete.
  atualizarLembrete(lembrete: Lembrete): Observable<Lembrete>{
    const url=`${environment.lembreteApiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }

  // chamado pelo componente lista-lembrete
  deletarLembrete(id: number): Observable<Lembrete>{
    const url=`${environment.lembreteApiUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }
}
