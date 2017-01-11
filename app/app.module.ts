import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { ServicesModule } from "./services/services.module";
import { ExpenseModule } from "./expense/expense.module";
import { ExpensesListModule } from "./expenses-list/expenses-list.module";

@NgModule({
    imports: [
        BrowserModule,
        ExpenseModule,
        ExpensesListModule,
        HttpModule,
        ServicesModule.forRoot()
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
