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
  FDSParameter: { Value: string };
}

export interface FSSService {
  Code: string;
  FSSParameter: { Value: string };
}

export interface ServiceList {
  Code: string;
  PSDParameter?: StringValue;
}
export interface StringValue {
  StringValue: string;
}

export class ParcelList {
  public ClientNumber: number;
  public ClientReference: string;
  public CODAmount: string;
  public CODReference: string;
  public Content: string;
  public Count: number;
  public DeliveryAddress: Address;
  public PickupAddress: Address;
  public PickupDate: string;
  public ServiceList: (ServiceList | FDSService | FSSService)[];

  constructor(
    ClientNumber: number,
    ClientReference: string,
    CODAmount: string,
    CODReference: string,
    Content: string,
    Count: number = undefined,
    PickupDate: string = undefined,
  ) {
    this.ClientNumber = ClientNumber;
    this.ClientReference = ClientReference;
    this.CODAmount = CODAmount;
    this.CODReference = CODReference;
    this.Content = Content;
    this.Count = Count;
    this.PickupDate = PickupDate;
  }

  public changeDeliveryAddress(
    City: string,
    ContactEmail: string,
    ContactName: string,
    ContactPhone: string,
    CountryIsoCode: string,
    HouseNumber: string,
    Name: string,
    Street: string,
    ZipCode: string,
    HouseNumberInfo: string = undefined,
  ): void {
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

  public changePickupAddress(
    City: string,
    ContactEmail: string,
    ContactName: string,
    ContactPhone: string,
    CountryIsoCode: string,
    HouseNumber: string,
    Name: string,
    Street: string,
    ZipCode: string,
    HouseNumberInfo: string = undefined,
  ): void {
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

  public setServiceList(serviceList: (ServiceList | FDSService | FSSService)[]): void {
    this.ServiceList = serviceList;
  }
}
