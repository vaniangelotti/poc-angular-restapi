type prioridade = 'BAIXA' | 'MEDIA' | 'ALTA';

export interface Lembrete {
    id: number;
    conteudo: string;
    arquivado: boolean;
    prioridade: prioridade;
    modificado: number;
}
