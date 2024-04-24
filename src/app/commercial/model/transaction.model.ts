import { Marchand } from "./marchand.model";
import { PaymentMethod } from "./paymentmethod.model";

export interface Transaction {
    transactionId: number;
    orderId: string;
    amount: number;
    currency: string;
    status: string;
    timestamp: string;
    clientId: string;
    clientName: string;
    clientEmail: string;
    hmac: string;
    notif: string;
    paymentMethod: PaymentMethod;
    marchand: Marchand;
}
