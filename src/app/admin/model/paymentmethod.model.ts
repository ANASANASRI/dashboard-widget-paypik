import { Marchand } from "./marchand.model";
import { Transaction } from "./transaction.model";

export interface PaymentMethod {
    paymentMethodId: number;
    methodName: string;
    methodDescription: string;
    methodIconUrl: string;
    transactions: Transaction[];
    marchands: Marchand[];
}
