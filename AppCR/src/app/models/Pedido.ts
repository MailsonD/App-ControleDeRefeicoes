import { JustificativaCAEST } from './JustificativaCAEST';
import { Aluno } from './Aluno';

export class Pedido{
    constructor(
        public id?: number,//
        public matriculaProfessor?: string,
        public justificativa?: string,
        public diaSolicitado?: string,
        public turma?: string,
        public statusPedido?: string,//
        public tipoBeneficio?: string,
        public alunos?: Aluno[],
        public justificativaCAEST?: JustificativaCAEST//
    ){
    }
}