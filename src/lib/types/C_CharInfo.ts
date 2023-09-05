export class C_CharInfo {
    name: string;
    picURL: string;
    history: string;
    personality: string;
    species: string;
    appearance: string;
    notes: string;
    constructor(
        name: string,
        picURL: string,
        history: string,
        personality: string,
        species: string,
        appearance: string,
        notes: string
    ) {
        this.name = name;
        this.picURL = picURL;
        this.history = history;
        this.personality = personality;
        this.species = species;
        this.appearance = appearance;
        this.notes = notes;
    }
}
