import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarsService {

    uri = 'assets/data/cars.json';

    constructor(private http: HttpClient) {}

    getCars() {
        return this.http.get(this.uri);
    }
}

