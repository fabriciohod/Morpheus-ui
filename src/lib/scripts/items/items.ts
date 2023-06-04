import { StatModifiers, type EquipmentItem } from "$lib/scripts/types";

const coleteLeve: EquipmentItem = {
    name: "Colete Leve",
    description: "Pouca proteção mas ótima mobilidade",
    value: 2,
    modifyStat: StatModifiers.Defesa,
    isEquip: false
};

const coleteMedio: EquipmentItem = {
    name: "Colete Médio",
    description: "Média proteção e mobilidade",
    value: 5,
    modifyStat: StatModifiers.Defesa,
    isEquip: false
};

const coletePesado: EquipmentItem = {
    name: "Colete Pesado",
    description: "Ótima proteção e pouca mobilidade",
    value: 10,
    modifyStat: StatModifiers.Defesa,
    isEquip: false
};

export const DefItemsList: EquipmentItem[] = [
    coleteLeve,
    coleteMedio,
    coletePesado
]