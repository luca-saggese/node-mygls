[@bart.sk-ecommerce/node-mygls](../README.md) › [Globals](../globals.md) › ["gls/GlsService"](../modules/_gls_glsservice_.md) › [GlsService](_gls_glsservice_.glsservice.md)

# Class: GlsService

## Hierarchy

* **GlsService**

## Index

### Constructors

* [constructor](_gls_glsservice_.glsservice.md#constructor)

### Properties

* [conf](_gls_glsservice_.glsservice.md#private-conf)

### Methods

* [prepareLabels](_gls_glsservice_.glsservice.md#preparelabels)
* [printLabels](_gls_glsservice_.glsservice.md#printlabels)
* [printedLabels](_gls_glsservice_.glsservice.md#printedlabels)
* [request](_gls_glsservice_.glsservice.md#private-request)

## Constructors

###  constructor

\+ **new GlsService**(`user`: string, `pass`: string, `test`: boolean): *[GlsService](_gls_glsservice_.glsservice.md)*

Defined in gls/GlsService.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`user` | string |
`pass` | string |
`test` | boolean |

**Returns:** *[GlsService](_gls_glsservice_.glsservice.md)*

## Properties

### `Private` conf

• **conf**: *[Config](../interfaces/_gls_glsservice_.config.md)*

Defined in gls/GlsService.ts:43

## Methods

###  prepareLabels

▸ **prepareLabels**(`data`: [ParcelList](_gls_parcellist_.parcellist.md)[]): *Promise‹[ParcelLabelsList](../interfaces/_gls_glsservice_.parcellabelslist.md)›*

Defined in gls/GlsService.ts:76

**Parameters:**

Name | Type |
------ | ------ |
`data` | [ParcelList](_gls_parcellist_.parcellist.md)[] |

**Returns:** *Promise‹[ParcelLabelsList](../interfaces/_gls_glsservice_.parcellabelslist.md)›*

___

###  printLabels

▸ **printLabels**(`parcelList`: [ParcelList](_gls_parcellist_.parcellist.md)[]): *Promise‹[PrintLabelsResponse](../interfaces/_gls_glsservice_.printlabelsresponse.md)›*

Defined in gls/GlsService.ts:90

**Parameters:**

Name | Type |
------ | ------ |
`parcelList` | [ParcelList](_gls_parcellist_.parcellist.md)[] |

**Returns:** *Promise‹[PrintLabelsResponse](../interfaces/_gls_glsservice_.printlabelsresponse.md)›*

___

###  printedLabels

▸ **printedLabels**(`data`: [PareclIdList](../interfaces/_gls_glsservice_.pareclidlist.md)): *Promise‹[PrintedLabels](../interfaces/_gls_glsservice_.printedlabels.md)›*

Defined in gls/GlsService.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`data` | [PareclIdList](../interfaces/_gls_glsservice_.pareclidlist.md) |

**Returns:** *Promise‹[PrintedLabels](../interfaces/_gls_glsservice_.printedlabels.md)›*

___

### `Private` request

▸ **request**<**T**>(`options`: any): *Promise‹T›*

Defined in gls/GlsService.ts:105

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *Promise‹T›*
