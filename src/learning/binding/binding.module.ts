import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotifierComponent, ParentComponent, PriceQuoterComponent } from './dataflow.component';


@NgModule({
    imports: [CommonModule],
    exports: [ParentComponent],
    declarations: [ParentComponent,PriceQuoterComponent,NotifierComponent],
    providers: [],
})
export class BindingModule { }