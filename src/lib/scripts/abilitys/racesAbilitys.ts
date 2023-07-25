import type { SimpleItem } from '../types';

export const GetRaceAbilitys = (index: number): SimpleItem[] =>
{
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


const Humano: SimpleItem[] = [
    { name: "Gambiarra", description: "Consegue fazer tecnologias funcionarem (Bonus INT)" },
    { name: "Tiros Rápidos", description: "Consegue atirar numa alta velocidade (Ganha bonus de DEX e Tiro)" },
    { name: "Cura Tática", description: "Consegue se curar ou curar aliado em batalha (Bonus INT)" },
];

const Ehi: SimpleItem[] = [
    { name: "Metamorfose", description: "Consegue se tornar qualquer ser biológico, copiando inclusive suas memorias" },
    { name: "Entendível", description: "Entende parcialmente tecnologias que analise (Ganha bonus de INT)" },
];

const AndromedaEhi: SimpleItem[] = [
    { name: "Metamorfose Defeituosa", description: "Seu corpo talvez consiga virar algo" },
    { name: "A Enganação", description: "Usa sue cahrlate pra seu beneficiar (Bonus CAR + Charlate)" },
    { name: "Nojo", description: "Usa a sua imagem e a repulsa que os outros tem de você para causar intimidação (Bonus Intimidação + INT)" },
];

const Kletka: SimpleItem[] = [
    { name: "Palavras de Kta", description: "Consegue user seu charlate para animar aliados" },
    { name: "Envenenar", description: "Consegue envenenar" },
    { name: "Galope Insano", description: "Usa suas patas para correr elouquecido (ganha bonus de DEX + FOR + Intimidação)" },
    { name: "Desprezo (Quando luta contra Tockta)", description: "Se sente totalmente superior e sente nojo ao lutar com um Tockta (ganha bonus de INT)" },
];

const Tockta: SimpleItem[] = [
    { name: "Enrijecer", description: "Consegue enrijecer sua carapaça" },
    { name: "Ligeiro", description: "Consegue acelerar seu movimento" },
    { name: "Pontiagudos", description: "Consegue utilizar seus dentes e garras (Bonus FOR + Intimidação)" },
    { name: "Pela Causa (Quando luta contra Kletka)", description: "Ficar enjoado e enraivecido ao lutar contra um Kletka (ganha bonus de DEX)" },
];

const Fuwus: SimpleItem[] = [
    { name: "Caçada", description: "Persegue seu alvo (Bonus de DEX)" },
    { name: "Esfomeado", description: "Ao sentir o sangue seus instintos primais agem (Bonus de FOR)" },
    { name: "Balela", description: "Usa de seu charlate pra proveito (Bonus CAR e Chalate" },
];

const AnkemoDor: SimpleItem[] = [
    { name: "Trem Bala", description: "Consegue preparar seu corpo acelerar ao máximo (Ganha bonus de DEX e FOR)" },
    { name: "Combustível Adulterando", description: "Aumenta o uso de seus fluidos para gerar uma potencia maior (Bonus de FOR e COS)" },
    { name: "Horror", description: "Ultiliza sua fama e espectro visual para causar horror (Bonus de Intimidação)" },
];

const DaeHonis: SimpleItem[] = [
    { name: "Diplomacia Honiana", description: "Consegue usar seu charlate para ganhar discussões, preços e etc (Bonus INT + Charlate)" },
    { name: "Foco Absoluto", description: "Consegue se focar em uma única coisa 100% (Bonus INT)" },
    { name: "Conhecimento Honiano", description: "Consegue resgatar algum conhecimento (Bonus INT + Historia)" },
];

const Cephacto: SimpleItem[] = [
    { name: "Toque de Kraken", description: "Conseguem usar seus tentaculos para dar dano massivo (Bonus FOR)" },
    { name: "Eletrificado", description: "Consegue user a energia de sue corpo pra dar um choque potente (Bonus INT)" },
    { name: "O Fantasma", description: "Consegue utilizar seu corpo esguio para atingir uma boa velocidade (Bonus DEZ + Atletismo)" },
];

const Uworcus: SimpleItem[] = [
    { name: "Doce Meyva", description: "Ao comer Meyva, seus sentidos se tornam aguçados (Bonus INT)" },
    { name: "Fé", description: "Ao rezar sua fé o preenche de esperança (Bonus de INT e Vontade)" },
    { name: "Revoada", description: "Utiliza a agilidade de seu corpo ao máximo (Bonus DEX)" },
];

const Wux: SimpleItem[] = [
    { name: "Pressão Juperiana", description: "Consegue usar a pressão de seu traje para dar dano (Bonus FOR)" },
    { name: "Vapores", description: "Consegue usar os vapores de seu traje para queimar (Bonus INT)" },
    { name: "Indetrutive", description: "Consegue fortificar sue traje para aguentar o tranco (Bonus CON + Rusticidade)" },
];

const Emordoris: SimpleItem[] = [
    { name: "Clamor de Lharm", description: "Sua vontade de ir a Lharm lhe preenche (Bonus FOR)" },
    { name: "Assassino Silencioso", description: "Você invoca o frio assassino que há em todos da sua especie (Bonus DEX)" },
    { name: "Perto da Morte", description: "Estar perto do seu destino lhe enche de vontade de lutar (Bonus FOR + Atletismo + Rusticidade)" },
];

const HonTas: SimpleItem[] = [
    { name: "Foco de Toyo", description: "Consegue se focar em um alvo e achar pontos fracos (Bonus FOR)" },
    { name: "Esquiva de Huy'In", description: "Consegue perceber precisamente os ataques inimigos (Bonus DEX)" },
    { name: "Poder de Cama'r", description: "Consegue focar sua mente na arte da laminia (Bonus de DEX + Laminina)" },
];

const Panzer: SimpleItem[] = [
    { name: "Ubercharger", description: "Prepara o seu corpo para resistir ao que atacar (Bonus de COS)" },
    { name: "Potente", description: "Prepara seu corpo pra matar qualquer ser (Bonus de FOR)" },
    { name: "Imparável", description: "Prepara seu corpo pra perseguir qualquer ser (Bonus de DEX e Atletismo)" },
];

const Carjarel: SimpleItem[] = [
    { name: "Pegar no Tranco", description: "Consegue entender a pilotagem e engenharia de naves que analise (Bonus INT + Pilotagem + Engenharia Mecanica)" },
    { name: "Conserto", description: "Consegue consertar parcialmente naves e armamentos (Bonus INT + Engenharia Mecanica e Armamentista)" },
    { name: "Montagem Rápida", description: "Consegue modificar naves e armamentos (Bonus INT + Engenharia Mecanica e Armamentista)" },
];

const Baalzuc: SimpleItem[] = [
    { name: "Beelzebub", description: "Consegue sentir a morte (Bonus INT + Intimidação" },
    { name: "Lucifer", description: "Consegue sentir o medo (Bonus INT + Intimidação" },
    { name: "Asmodeus", description: "Consegue sentir a dor (Bonus CON + Intimidação" },
];