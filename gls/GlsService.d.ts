import { ParcelList } from './ParcelList';
export interface ParcelInfoListGLS {
    ClientReference: string;
    ParcelId: number;
}
export interface PrintLabelsInfo {
    ClientReference: string;
    ParcelId: number;
    ParcelNumber: number;
}
export interface ParcelLabelsList {
    ParcelInfoList: ParcelInfoListGLS[];
    PrepareLabelsError: Array<number>;
}
export interface PrintLabelsResponse {
    PrintLabelsInfoList: PrintLabelsInfo[];
    PrintLabelsErrorList: Array<number>;
    Labels: Uint8Array[];
}
export interface PareclIdList {
    ParcelIdList: number[];
}
export interface PrintedLabels {
    GetPrintedLabelsErrorList: Array<object>;
    Labels: Uint8Array[];
}
export declare class GlsService {
    private conf;
    constructor(user: string, pass: string, test: boolean);
    printedLabels(data: PareclIdList): Promise<PrintedLabels>;
    prepareLabels(data: ParcelList[]): Promise<ParcelLabelsList>;
    printLabels(parcelList: ParcelList[]): Promise<PrintLabelsResponse>;
    private request;
}
