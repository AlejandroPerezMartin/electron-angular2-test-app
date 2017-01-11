import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { ServicesModule } from "./services/services.module";
import { ExpensesModule } from "./expenses/expenses.module";

@NgModule({
    imports: [
        BrowserModule,
        ExpensesModule,
        HttpModule,
        ServicesModule.forRoot()
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
