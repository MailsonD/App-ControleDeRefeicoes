export class Usuario{
    constructor(
        private matricula?: string,
        private senha?: string,
        private email?: string,
        private nome?: string,
        private nivelAcesso?: string,
        private ativo?: boolean
    ){}
}