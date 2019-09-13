import { Aluno } from './Aluno';
import { Usuario } from './Usuario';

export class Pedido{
    constructor(
        // public id?: number,
        public matriculaProfessor?: string,
        public justificativa?: string,
        public diaSolicitado?: string,//////estava Date
        public turma?: string,
        // public statusPedido?: string,//
        public tipoBeneficio?: string,
        public alunos?: Aluno[],
        // public justificativaCAEST?: string//
    ){
    }
}