import { HttpClient } from '@angular/common/http';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { Product } from './product.model';

const PROTOCOL = 'http';
const PORT = 3500;
@Injectable()
export class RestDataSource {
    baseURL: string;
    constructor (private http: HttpClient) {
        this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseURL + 'products');
    }
    saveOrder(order:Order):Observable<Order> {
        return this.http.post<Order>(this.baseURL + 'orders', order);
    }
}