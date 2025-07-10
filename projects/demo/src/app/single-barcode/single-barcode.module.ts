import { NgModule } from "@angular/core";
import { SingleBarcodeComponent } from "./single-barcode.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CeFormBlocksModule, CePipesModule, FormBlockFactoryComponent } from "@codeffekt/ce-core";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        SingleBarcodeComponent
    ],
    imports: [
        CommonModule,
        MatSlideToggleModule,
        FormsModule,
        ReactiveFormsModule,
        CePipesModule,
        FormBlockFactoryComponent,
        CeFormBlocksModule,
    ],
    exports: [
        SingleBarcodeComponent
    ]
})
export class SingleBarcodeModule {    
}