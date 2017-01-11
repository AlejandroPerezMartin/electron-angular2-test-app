import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExpensesListComponent } from './expenses-list.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ExpensesListComponent],
    exports: [ExpensesListComponent, CommonModule]
})

export class ExpensesListModule {}
