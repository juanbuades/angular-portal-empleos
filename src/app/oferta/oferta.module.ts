import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertaComponent } from '../oferta/oferta.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ OfertaComponent ],
    imports: [ CommonModule, RouterModule ],
    exports: [ OfertaComponent ],
    providers: [],
})
export class OfertaModule {}