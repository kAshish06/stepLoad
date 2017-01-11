import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data-service'

import { AppComponent } from './app.component'
import { AppService } from './app.service'

@NgModule ({
    imports : [ BrowserModule, HttpModule, FormsModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
    declarations: [ AppComponent],
    providers: [ AppService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }