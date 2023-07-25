import type { T_SimpleItem } from "../types/items";

export const GetRaceAbilitys = (index: number): T_SimpleItem[] => {
    switch (index) {
        case 1: return Humano;
        case 2: return Ehi;
        case 3: return AndromedaEhi;
        case 4: return Kletka;
        case 5: return Tockta;
        case 6: return Fuwus;
        case 7: return AnkemoDor;
        case 8: return DaeHonis;
        case 9: return Cephacto;
        case 10: return Uworcus;
        case 11: return Wux;
        case 12: return Emordoris;
        case 13: return HonTas;
        case 14: return Panzer;
        case 15: return Carjarel;
        case 16: return Baalzuc;
        default: return [];
    }
};


const Humano: T_SimpleItem[] = [
    { name: "Gambiarra", description: "Consegue fazer tecnologias funcionarem (Bonus INT)", pinned: false },
    { name: "Tiros Rápidos", description: "Consegue atirar numa alta velocidade (Ganha bonus de DEX e Tiro)", pinned: false },
    { name: "Cura Tática", description: "Consegue se curar ou curar aliado em batalha (Bonus INT)", pinned: false },
];

const Ehi: T_SimpleItem[] = [
    { name: "Metamorfose", description: "Consegue se tornar qualquer ser biológico, copiando inclusive suas memorias", pinned: false },
    { name: "Entendível", description: "Entende parcialmente tecnologias que analise (Ganha bonus de INT)", pinned: false },
];

const AndromedaEhi: T_SimpleItem[] = [
    { name: "Metamorfose Defeituosa", description: "Seu corpo talvez consiga virar algo", pinned: false },
    { name: "A Enganação", description: "Usa sue cahrlate pra seu beneficiar (Bonus CAR + Charlate)", pinned: false },
    { name: "Nojo", description: "Usa a sua imagem e a repulsa que os outros tem de você para causar intimidação (Bonus Intimidação + INT)", pinned: false },
];

const Kletka: T_SimpleItem[] = [
    { name: "Palavras de Kta", description: "Consegue user seu charlate para animar aliados", pinned: false },
    { name: "Envenenar", description: "Consegue envenenar", pinned: false },
    { name: "Galope Insano", description: "Usa suas patas para correr elouquecido (ganha bonus de DEX + FOR + Intimidação)", pinned: false },
    { name: "Desprezo (Quando luta contra Tockta)", description: "Se sente totalmente superior e sente nojo ao lutar com um Tockta (ganha bonus de INT)", pinned: false },
];

const Tockta: T_SimpleItem[] = [
    { name: "Enrijecer", description: "Consegue enrijecer sua carapaça", pinned: false },
    { name: "Ligeiro", description: "Consegue acelerar seu movimento", pinned: false },
    { name: "Pontiagudos", description: "Consegue utilizar seus dentes e garras (Bonus FOR + Intimidação)", pinned: false },
    { name: "Pela Causa (Quando luta contra Kletka)", description: "Ficar enjoado e enraivecido ao lutar contra um Kletka (ganha bonus de DEX)", pinned: false },
];

const Fuwus: T_SimpleItem[] = [
    { name: "Caçada", description: "Persegue seu alvo (Bonus de DEX)", pinned: false },
    { name: "Esfomeado", description: "Ao sentir o sangue seus instintos primais agem (Bonus de FOR)", pinned: false },
    { name: "Balela", description: "Usa de seu charlate pra proveito (Bonus CAR e Chalate", pinned: false },
];

const AnkemoDor: T_SimpleItem[] = [
    { name: "Trem Bala", description: "Consegue preparar seu corpo acelerar ao máximo (Ganha bonus de DEX e FOR)", pinned: false },
    { name: "Combustível Adulterando", description: "Aumenta o uso de seus fluidos para gerar uma potencia maior (Bonus de FOR e COS)", pinned: false },
    { name: "Horror", description: "Ultiliza sua fama e espectro visual para causar horror (Bonus de Intimidação)", pinned: false },
];

const DaeHonis: T_SimpleItem[] = [
    { name: "Diplomacia Honiana", description: "Consegue usar seu charlate para ganhar discussões, preços e etc (Bonus INT + Charlate)", pinned: false },
    { name: "Foco Absoluto", description: "Consegue se focar em uma única coisa 100% (Bonus INT)", pinned: false },
    { name: "Conhecimento Honiano", description: "Consegue resgatar algum conhecimento (Bonus INT + Historia)", pinned: false },
];

const Cephacto: T_SimpleItem[] = [
    { name: "Toque de Kraken", description: "Conseguem usar seus tentaculos para dar dano massivo (Bonus FOR)", pinned: false },
    { name: "Eletrificado", description: "Consegue user a energia de sue corpo pra dar um choque potente (Bonus INT)", pinned: false },
    { name: "O Fantasma", description: "Consegue utilizar seu corpo esguio para atingir uma boa velocidade (Bonus DEZ + Atletismo)", pinned: false },
];

const Uworcus: T_SimpleItem[] = [
    { name: "Doce Meyva", description: "Ao comer Meyva, seus sentidos se tornam aguçados (Bonus INT)", pinned: false },
    { name: "Fé", description: "Ao rezar sua fé o preenche de esperança (Bonus de INT e Vontade)", pinned: false },
    { name: "Revoada", description: "Utiliza a agilidade de seu corpo ao máximo (Bonus DEX)", pinned: false },
];

const Wux: T_SimpleItem[] = [
    { name: "Pressão Juperiana", description: "Consegue usar a pressão de seu traje para dar dano (Bonus FOR)", pinned: false },
    { name: "Vapores", description: "Consegue usar os vapores de seu traje para queimar (Bonus INT)", pinned: false },
    { name: "Indetrutive", description: "Consegue fortificar sue traje para aguentar o tranco (Bonus CON + Rusticidade)", pinned: false },
];

const Emordoris: T_SimpleItem[] = [
    { name: "Clamor de Lharm", description: "Sua vontade de ir a Lharm lhe preenche (Bonus FOR)", pinned: false },
    { name: "Assassino Silencioso", description: "Você invoca o frio assassino que há em todos da sua especie (Bonus DEX)", pinned: false },
    { name: "Perto da Morte", description: "Estar perto do seu destino lhe enche de vontade de lutar (Bonus FOR + Atletismo + Rusticidade)", pinned: false },
];

const HonTas: T_SimpleItem[] = [
    { name: "Foco de Toyo", description: "Consegue se focar em um alvo e achar pontos fracos (Bonus FOR)", pinned: false },
    { name: "Esquiva de Huy'In", description: "Consegue perceber precisamente os ataques inimigos (Bonus DEX)", pinned: false },
    { name: "Poder de Cama'r", description: "Consegue focar sua mente na arte da laminia (Bonus de DEX + Laminina)", pinned: false },
];

const Panzer: T_SimpleItem[] = [
    { name: "Ubercharger", description: "Prepara o seu corpo para resistir ao que atacar (Bonus de COS)", pinned: false },
    { name: "Potente", description: "Prepara seu corpo pra matar qualquer ser (Bonus de FOR)", pinned: false },
    { name: "Imparável", description: "Prepara seu corpo pra perseguir qualquer ser (Bonus de DEX e Atletismo)", pinned: false },
];

const Carjarel: T_SimpleItem[] = [
    { name: "Pegar no Tranco", description: "Consegue entender a pilotagem e engenharia de naves que analise (Bonus INT + Pilotagem + Engenharia Mecanica)", pinned: false },
    { name: "Conserto", description: "Consegue consertar parcialmente naves e armamentos (Bonus INT + Engenharia Mecanica e Armamentista)", pinned: false },
    { name: "Montagem Rápida", description: "Consegue modificar naves e armamentos (Bonus INT + Engenharia Mecanica e Armamentista)", pinned: false },
];

const Baalzuc: T_SimpleItem[] = [
    { name: "Beelzebub", description: "Consegue sentir a morte (Bonus INT + Intimidação", pinned: false },
    { name: "Lucifer", description: "Consegue sentir o medo (Bonus INT + Intimidação", pinned: false },
    { name: "Asmodeus", description: "Consegue sentir a dor (Bonus CON + Intimidação", pinned: false },
];