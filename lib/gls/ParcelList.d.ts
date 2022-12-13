export interface Address {
    City: string;
    ContactEmail: string;
    ContactName: string;
    ContactPhone: string;
    CountryIsoCode: string;
    HouseNumber: string;
    Name: string;
    Street: string;
    ZipCode: string;
    HouseNumberInfo: string;
}
export interface FDSService {
    Code: string;
    FDSParameter: {
        Value: string;
    };
}
export interface FSSService {
    Code: string;
    FSSParameter: {
        Value: string;
    };
}
export interface ServiceList {
    Code: string;
    PSDParameter?: StringValue;
}
export interface StringValue {
    StringValue: string;
}
export declare class ParcelList {
    ClientNumber: number;
    ClientReference: string;
    CODAmount: string;
    CODReference: string;
    Content: string;
    Count: number;
    DeliveryAddress: Address;
    PickupAddress: Address;
    PickupDate: string;
    ServiceList: (ServiceList | FDSService | FSSService)[];
    constructor(ClientNumber: number, ClientReference: string, CODAmount: string, CODReference: string, Content: string, Count?: number, PickupDate?: string);
    changeDeliveryAddress(City: string, ContactEmail: string, ContactName: string, ContactPhone: string, CountryIsoCode: string, HouseNumber: string, Name: string, Street: string, ZipCode: string, HouseNumberInfo?: string): void;
    changePickupAddress(City: string, ContactEmail: string, ContactName: string, ContactPhone: string, CountryIsoCode: string, HouseNumber: string, Name: string, Street: string, ZipCode: string, HouseNumberInfo?: string): void;
    setServiceList(serviceList: (ServiceList | FDSService | FSSService)[]): void;
}
