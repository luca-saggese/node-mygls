"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const crypto = require("crypto");
class GlsService {
    constructor(user, pass, test) {
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
    printedLabels(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                ParcelIdList: data.ParcelIdList,
                PrintPosition: 1,
                Password: this.conf.password,
                Username: this.conf.username,
            };
            return this.request({
                method: 'POST',
                body: body,
                path: 'ParcelService.svc/json/getPrintedLabels',
            });
        });
    }
    prepareLabels(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                ParcelList: data,
                Password: this.conf.password,
                Username: this.conf.username,
            };
            return this.request({
                method: 'POST',
                body: body,
                path: 'ParcelService.svc/json/PrepareLabels',
            });
        });
    }
    printLabels(parcelList) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                ParcelList: parcelList,
                PrintPosition: 1,
                Password: this.conf.password,
                Username: this.conf.username,
            };
            return this.request({
                method: 'POST',
                body: body,
                path: 'ParcelService.svc/json/PrintLabels',
            });
        });
    }
    request(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = options.method || 'GET';
            const body = options.body || undefined;
            const instance = axios_1.default.create({
                baseURL: this.conf.baseUrl,
            });
            try {
                const r = yield instance({
                    method: method,
                    url: options.path,
                    data: body,
                });
                if (r.status < 200 || r.status > 299) {
                    throw new Error(JSON.stringify(r));
                }
                return r.data || r.status;
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.GlsService = GlsService;
