import type { C_Proficiency } from "./C_Proficiency"
import type { C_Item } from "./C_Item"
import type { C_Attribute } from "./C_Attribute"
import type { C_CharInfo } from "./C_CharInfo"
import type { C_StatBar } from "./C_StatBar"

export interface SystemConfiguration {
    name: string
    label: string
    characterSheet: {
        charInfo?: C_CharInfo
        attributes: Record<string, C_Attribute>
        proficiencys?: Record<string, C_Proficiency>
        inventory?: Array<C_Item>
        abilitys?: Array<C_Item>
    }
    runtime?: {
        health: C_StatBar
        actions?: C_StatBar
    }
}

export function recordAsArray(config: Record<string, (C_Attribute | C_Proficiency)>) {
    return Object.values(config)
}