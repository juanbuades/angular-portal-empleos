import { appEndPoints } from './../endpoints.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

    constructor (private http: HttpClient ){

    }

    public getOferta(): Observable<any>{
        let url = appEndPoints.GETTODASOFERTA;
        return this.http.get(url)
    }
}