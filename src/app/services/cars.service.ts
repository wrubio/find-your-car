import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarsService {
    // ===========================================================
    // Local url of json file
    uri = 'assets/data/cars.json';

    constructor(private http: HttpClient) {}

    // ===========================================================
    // Gget method to bring json information
    getCars() {
        return this.http.get(this.uri);
    }
}

