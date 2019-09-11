export class Usuario{
    constructor(
        public matricula?: string,
        public senha?: string,
        public email?: string,
        public nome?: string,
        public nivelAcesso?: string,
        public ativo?: boolean
    ){}
}