import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { Message } from './message'

@Injectable ()

export class AppService {
    private url = 'app/message';

    constructor ( private http: Http ) { };

    getMessages(): Promise<Message[]> {
        return this.http.get(this.url)
                    .toPromise()
                    .then((response) => response.json().data as Message[])
                    .catch(this.handleError)        
    };

    private handleError(error: any): void {
        console.log('An error occured '+ error);
    }
}