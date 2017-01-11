import { Component, OnInit } from '@angular/core'

import { Message } from './message'
import { AppService } from './app.service'

@Component ({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
        //this.getMessages();
    };

    constructor ( private appService: AppService ) { };

    getMessages(): void {
        this.appService.getMessages()
            .then((response) => { console.log(response);
                setInterval(this.getMessages(), 100);
            });
    };
    
}