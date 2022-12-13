[@bart.sk-ecommerce/node-mygls](../README.md) › [Globals](../globals.md) › ["gls/ParcelList"](../modules/_gls_parcellist_.md) › [ParcelList](_gls_parcellist_.parcellist.md)

# Class: ParcelList

## Hierarchy

* **ParcelList**

## Index

### Constructors

* [constructor](_gls_parcellist_.parcellist.md#constructor)

### Properties

* [CODAmount](_gls_parcellist_.parcellist.md#codamount)
* [CODReference](_gls_parcellist_.parcellist.md#codreference)
* [ClientNumber](_gls_parcellist_.parcellist.md#clientnumber)
* [ClientReference](_gls_parcellist_.parcellist.md#clientreference)
* [Content](_gls_parcellist_.parcellist.md#content)
* [Count](_gls_parcellist_.parcellist.md#count)
* [DeliveryAddress](_gls_parcellist_.parcellist.md#deliveryaddress)
* [PickupAddress](_gls_parcellist_.parcellist.md#pickupaddress)
* [PickupDate](_gls_parcellist_.parcellist.md#pickupdate)
* [ServiceList](_gls_parcellist_.parcellist.md#servicelist)

### Methods

* [changeDeliveryAddress](_gls_parcellist_.parcellist.md#changedeliveryaddress)
* [changePickupAddress](_gls_parcellist_.parcellist.md#changepickupaddress)
* [setServiceList](_gls_parcellist_.parcellist.md#setservicelist)

## Constructors

###  constructor

\+ **new ParcelList**(`ClientNumber`: number, `ClientReference`: string, `CODAmount`: string, `CODReference`: string, `Content`: string, `Count`: number, `PickupDate`: string): *[ParcelList](_gls_parcellist_.parcellist.md)*

Defined in gls/ParcelList.ts:42

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ClientNumber` | number | - |
`ClientReference` | string | - |
`CODAmount` | string | - |
`CODReference` | string | - |
`Content` | string | - |
`Count` | number | undefined |
`PickupDate` | string | undefined |

**Returns:** *[ParcelList](_gls_parcellist_.parcellist.md)*

## Properties

###  CODAmount

• **CODAmount**: *string*

Defined in gls/ParcelList.ts:35

___

###  CODReference

• **CODReference**: *string*

Defined in gls/ParcelList.ts:36

___

###  ClientNumber

• **ClientNumber**: *number*

Defined in gls/ParcelList.ts:33

___

###  ClientReference

• **ClientReference**: *string*

Defined in gls/ParcelList.ts:34

___

###  Content

• **Content**: *string*

Defined in gls/ParcelList.ts:37

___

###  Count

• **Count**: *number*

Defined in gls/ParcelList.ts:38

___

###  DeliveryAddress

• **DeliveryAddress**: *[Address](../interfaces/_gls_parcellist_.address.md)*

Defined in gls/ParcelList.ts:39

___

###  PickupAddress

• **PickupAddress**: *[Address](../interfaces/_gls_parcellist_.address.md)*

Defined in gls/ParcelList.ts:40

___

###  PickupDate

• **PickupDate**: *string*

Defined in gls/ParcelList.ts:41

___

###  ServiceList

• **ServiceList**: *[ServiceList](../interfaces/_gls_parcellist_.servicelist.md) | [FDSService](../interfaces/_gls_parcellist_.fdsservice.md) | [FSSService](../interfaces/_gls_parcellist_.fssservice.md)[]*

Defined in gls/ParcelList.ts:42

## Methods

###  changeDeliveryAddress

▸ **changeDeliveryAddress**(`City`: string, `ContactEmail`: string, `ContactName`: string, `ContactPhone`: string, `CountryIsoCode`: string, `HouseNumber`: string, `Name`: string, `Street`: string, `ZipCode`: string, `HouseNumberInfo`: string): *void*

Defined in gls/ParcelList.ts:62

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`City` | string | - |
`ContactEmail` | string | - |
`ContactName` | string | - |
`ContactPhone` | string | - |
`CountryIsoCode` | string | - |
`HouseNumber` | string | - |
`Name` | string | - |
`Street` | string | - |
`ZipCode` | string | - |
`HouseNumberInfo` | string | undefined |

**Returns:** *void*

___

###  changePickupAddress

▸ **changePickupAddress**(`City`: string, `ContactEmail`: string, `ContactName`: string, `ContactPhone`: string, `CountryIsoCode`: string, `HouseNumber`: string, `Name`: string, `Street`: string, `ZipCode`: string, `HouseNumberInfo`: string): *void*

Defined in gls/ParcelList.ts:88

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`City` | string | - |
`ContactEmail` | string | - |
`ContactName` | string | - |
`ContactPhone` | string | - |
`CountryIsoCode` | string | - |
`HouseNumber` | string | - |
`Name` | string | - |
`Street` | string | - |
`ZipCode` | string | - |
`HouseNumberInfo` | string | undefined |

**Returns:** *void*

___

###  setServiceList

▸ **setServiceList**(`serviceList`: [ServiceList](../interfaces/_gls_parcellist_.servicelist.md) | [FDSService](../interfaces/_gls_parcellist_.fdsservice.md) | [FSSService](../interfaces/_gls_parcellist_.fssservice.md)[]): *void*

Defined in gls/ParcelList.ts:114

**Parameters:**

Name | Type |
------ | ------ |
`serviceList` | [ServiceList](../interfaces/_gls_parcellist_.servicelist.md) &#124; [FDSService](../interfaces/_gls_parcellist_.fdsservice.md) &#124; [FSSService](../interfaces/_gls_parcellist_.fssservice.md)[] |

**Returns:** *void*
