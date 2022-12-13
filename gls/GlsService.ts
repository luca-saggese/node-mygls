import axios from 'axios';
import * as crypto from 'crypto';
import { ParcelList } from './ParcelList';

interface Config {
  username: string;
  password: Array<number>;
  baseUrl: string;
}

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

export class GlsService {
  private conf: Config;

  constructor(user: string, pass: string, test: boolean) {
    const key = crypto.createHash('sha512').update(pass).digest();
    const array = [];
    for (const k in key) {
      if (key.hasOwnProperty(k)) {
        array[k] = key[k];
      }
    }

    this.conf = {
      username: user,
      password: array,
      baseUrl: test ? 'https://api.test.mygls.sk/' : 'https://api.mygls.sk/',
    };
  }

  public async printedLabels(data: PareclIdList): Promise<PrintedLabels> {
    const body = {
      ParcelIdList: data.ParcelIdList,
      PrintPosition: 1,
      Password: this.conf.password,
      Username: this.conf.username,
    };

    return this.request<PrintedLabels>({
      method: 'POST',
      body: body,
      path: 'ParcelService.svc/json/getPrintedLabels',
    });
  }

  public async prepareLabels(data: ParcelList[]): Promise<ParcelLabelsList> {
    const body = {
      ParcelList: data,
      Password: this.conf.password,
      Username: this.conf.username,
    };

    return this.request<ParcelLabelsList>({
      method: 'POST',
      body: body,
      path: 'ParcelService.svc/json/PrepareLabels',
    });
  }

  public async printLabels(parcelList: ParcelList[]): Promise<PrintLabelsResponse> {
    const body = {
      ParcelList: parcelList,
      PrintPosition: 1,
      Password: this.conf.password,
      Username: this.conf.username,
    };

    return this.request<PrintLabelsResponse>({
      method: 'POST',
      body: body,
      path: 'ParcelService.svc/json/PrintLabels',
    });
  }

  private async request<T>(options): Promise<T> {
    const method = options.method || 'GET';
    const body = options.body || undefined;

    const instance = axios.create({
      baseURL: this.conf.baseUrl,
    });

    try {
      const r = await instance({
        method: method,
        url: options.path,
        data: body,
      });

      if (r.status < 200 || r.status > 299) {
        throw new Error(JSON.stringify(r));
      }

      return r.data || r.status;
    } catch (e) {
      throw e;
    }
  }
}
