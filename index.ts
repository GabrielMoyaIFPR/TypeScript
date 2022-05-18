// Interfaces //

// function soma(a: number, b: number) {
//     return a+b;
// }

// interface IAnimal{
//     nome: string;
//     tipo:'terrestre' | 'aquatico';
//     executarRugido(alturaEmDecibeis: number): void;

// }

// interface IFelinos extends IAnimal{
//     visaoNoturna: boolean;
// }


// const animal: IAnimal = {
//     nome: 'cachorro',
//     tipo: 'terrestre',
//     executarRugido: (alturaEmDecibeis)=> (`${alturaEmDecibeis}dB`)       
// }

// animal.executarRugido(10);

// const felino: IFelinos = {
//     nome: 'Leão',
//     tipo: 'terrestre',
//     visaoNoturna: true,
//     executarRugido: (alturaEmDecibeis)=> (`${alturaEmDecibeis}dB`)
// }

// Types //

// interface IAnimal{
//     nome: string;
//     tipo:'terrestre' | 'aquatico';
//     domestico: boolean;

// }

// interface IFelino extends IAnimal{
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal{
//    porte: 'pequeno' | 'medio' | 'grande';
// }

// type IDomestico = IFelino | ICanino;

// const animal: IDomestico = {
//     domestico: true,
//     nome: 'cachorro',
//     tipo: 'terrestre',
//     porte: 'pequeno',
// }

// Input Html //

// const input = document.getElementById('input') as HTMLInputElement;
// input.addEventListener('input', (event)=>{
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);   
// })

// Generic Types //

// function adicionaApendiceALista<T>(array: T[], valor: T){
//     return array.map(() => valor);
// }

// adicionaApendiceALista([1,2,3], 1);



// Desenvolvimento condicional a partir de parametros //

// interface IUsuario {
//     id: string;
//     email: string;
// }

// interface IAdmin extends IUsuario{
//     cargo: 'gerente' | 'cordenador' | 'supervisor';
// }

// function redirecione(usuario: IUsuario | IAdmin){
//     if('cargo' in usuario){
//         // redirecionar para área de adminstração
//     }
//     // redirecionar para área de usuário   
// }


// Usando ? para variaveis opcionais //

// interface IUsuario {
//     id: string;
//     email: string;
//     cargo?: 'funcionario'|'gerente' | 'cordenador' | 'supervisor';
// }

// function redirecione(usuario: IUsuario){
//     if(usuario.cargo){
//         // redirecionar(usuario.cargo);
//     }
//     // redirecionar para área de usuário   
// }


// Propriedade com readonly e private //

// interface Cachorro {
//     readonly nome: string;
//     readonly idade: number;
//     readonly parqueFavorito?: string;
// }

// type CachorroSomenteLeitura = {
//     //adiciona o readonly e remove os opcionais
//     +readonly [K in keyof Cachorro]-?: Cachorro[K];
// }

// class MeuCachorro implements Cachorro {
//     idade;
//     nome;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const cao = new MeuCachorro('Totó', 2);


// Trabalhando com bibliotecas //

// import $ from 'jquery';

// $.fn.extend({
//     novaFuncao() {
//         console.log('nova funcao');
//     }
// });

// $('body').novaFuncao();


// Trabalhando com o Omit //

// interface Pessoa {
//     nome: string;
//     idade: number;
//     nacionalidade: string;
// }

// interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{
// }

// const brasileiro: Brasileiro = {
//     nome: 'João',
//     idade: 20,
// }