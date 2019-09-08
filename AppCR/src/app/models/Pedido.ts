import { Aluno } from './Aluno';
import { Usuario } from './Usuario';

export class Pedido{
    constructor(
        private id?: number,
        private usuario?: Usuario,
        private justificativa?: string,
        private diaSolicitado?: Date,
        private turma?: string,
        private statusPedido?: string,
        private tipoBeneficion?: string,
        private alunos?: Aluno[],
        private justificativaCAEST?: string
    ){
        this.alunos = [];
    }
}