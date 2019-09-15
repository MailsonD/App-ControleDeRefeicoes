import { Aluno } from './Aluno';
import { Usuario } from './Usuario';

export class JustificativaCAEST{
    constructor(
        public justificativa?:string,
        public usuarioCAEST?:Usuario
    ){
    }
}