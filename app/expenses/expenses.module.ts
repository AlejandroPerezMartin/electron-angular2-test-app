import { NgModule } from "@angular/core";
import { ExpenseComponent } from "./expense/expense.component";
import { ExpensesListComponent } from "./expenses-list/expenses-list.component";

@NgModule({
    imports: [],
    declarations: [
        ExpenseComponent,
        ExpensesListComponent
    ],
    exports: [
        ExpenseComponent,
        ExpensesListComponent
    ]
})

export class ExpensesModule {};
