// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: 'http://192.168.0.105:8080/Controle-De-Refeicoes/api',
  // API: 'http://localhost:8080/Controle-de-Refeicoes/api',
  SHARED_PREFERENCES_DIRECTORY: "appPreferencesFile",
  SESSAO_ATIVA: "sessaoAtiva",
  TIPO_ACESSO: "tipoAcesso",
  FOTO_USUARIO: "fotoUsuario",
  MATRICULA_USUARIO: "matriculaUsuario",
  SENHA_USUARIO: "senhaUsuario"
};

/**
 * API -> endereço da API que vai fornecer dados para aplicação
 * obs.: Adicionar o `/` ao utilizar variavel nos serviços.
 * @author leanderson.coelhoif@gmail.com
 */

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
