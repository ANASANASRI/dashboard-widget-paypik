import { PaymentMethod } from "./paymentmethod.model";
import { Transaction } from "./transaction.model";

export interface Marchand {
    marchandId: number;
    marchandName: string;
    marchandDescription: string;
    marchandPhone: string;
    marchandHost: string;
    marchandEmail: string;
    marchandStatus: string;
    marchandLogoUrl: string;
    marchandFormejuridique: string;
    marchandRcIf: string;
    marchandSiegeAddresse: string;
    marchandDgName: string;
    marchandTypeActivite: string;
    marchandAnneeActivite: string;
    callback: string;
    serviceId: string;
    accessKey: string;
    secretKey: string;
    transactions?: Transaction[]; // Assuming Transaction is another Angular model/interface
    paymentMethods?: PaymentMethod[];
}