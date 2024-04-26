export interface Demandedto {
    demandeId: number;
    demandeMarchandName: string;
    demandeMarchandDescription: string;
    demandeMarchandPhone: string;
    demandeMarchandHost: string;
    demandeMarchandEmail: string;
    demandeMarchandLogoUrl: string;
    demandeMarchandStatus: Status;
    demandeMarchandTypeActivite: string;
    demandeMarchandRcIf: string;
    demandeMarchandSiegeAddresse: string;
    demandeMarchandDgName: string;
    demandeMarchandFormejuridique: Formejuridique;
    demandeMarchandAnneeActivite: AneeActivite;
    demandeIsAccepted: boolean;
    demandeIsVerified: boolean;
}

export enum Status {
    Active = 'Active',
    Inactive = 'Inactive',
    JustCreated = 'JustCreated'
}

export enum Formejuridique {
    Entreprise = 'Entreprise',
    AutoEntrepreneur = 'AutoEntrepreneur',
    Association = 'Association'
}

export enum AneeActivite {
    MOINS_1_AN = 'Moins < 1 an',
    UN_A_5_ANS = '1 an à 5 ans',
    PLUS_5_ANS = 'Plus > 5 ans'
}
