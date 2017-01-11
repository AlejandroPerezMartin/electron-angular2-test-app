import { NgModule } from '@angular/core'
import { ExpenseComponent } from './expense.component'

@NgModule({
    declarations: [ ExpenseComponent ],
    exports: [ ExpenseComponent ]
})

export class ExpenseModule {}
