import { type T_EquipmentItem, E_StatModifiers } from "../types/items";

const coleteLeve: T_EquipmentItem = {
    name: "Colete Leve",
    description: "Pouca proteção mas ótima mobilidade",
    value: 2,
    modifyStat: E_StatModifiers.Defesa,
    isEquip: false,
    pinned:false
};

const coleteMedio: T_EquipmentItem = {
    name: "Colete Médio",
    description: "Média proteção e mobilidade",
    value: 5,
    modifyStat: E_StatModifiers.Defesa,
    isEquip: false,
    pinned:false
};

const coletePesado: T_EquipmentItem = {
    name: "Colete Pesado",
    description: "Ótima proteção e pouca mobilidade",
    value: 10,
    modifyStat: E_StatModifiers.Defesa,
    isEquip: false,
    pinned:false
};

export const DefItemsList: T_EquipmentItem[] = [
    coleteLeve,
    coleteMedio,
    coletePesado
]