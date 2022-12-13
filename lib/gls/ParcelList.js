"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParcelList {
    constructor(ClientNumber, ClientReference, CODAmount, CODReference, Content, Count = undefined, PickupDate = undefined) {
        this.ClientNumber = ClientNumber;
        this.ClientReference = ClientReference;
        this.CODAmount = CODAmount;
        this.CODReference = CODReference;
        this.Content = Content;
        this.Count = Count;
        this.PickupDate = PickupDate;
    }
    changeDeliveryAddress(City, ContactEmail, ContactName, ContactPhone, CountryIsoCode, HouseNumber, Name, Street, ZipCode, HouseNumberInfo = undefined) {
        this.DeliveryAddress = {
            City: City,
            ContactEmail: ContactEmail,
            ContactName: ContactName,
            ContactPhone: ContactPhone,
            CountryIsoCode: CountryIsoCode,
            HouseNumber: HouseNumber,
            Name: Name,
            Street: Street,
            ZipCode: ZipCode,
            HouseNumberInfo: HouseNumberInfo,
        };
    }
    changePickupAddress(City, ContactEmail, ContactName, ContactPhone, CountryIsoCode, HouseNumber, Name, Street, ZipCode, HouseNumberInfo = undefined) {
        this.PickupAddress = {
            City: City,
            ContactEmail: ContactEmail,
            ContactName: ContactName,
            ContactPhone: ContactPhone,
            CountryIsoCode: CountryIsoCode,
            HouseNumber: HouseNumber,
            Name: Name,
            Street: Street,
            ZipCode: ZipCode,
            HouseNumberInfo: HouseNumberInfo,
        };
    }
    setServiceList(serviceList) {
        this.ServiceList = serviceList;
    }
}
exports.ParcelList = ParcelList;
