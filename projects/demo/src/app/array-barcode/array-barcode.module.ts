import { NgModule } from "@angular/core";
import { ArrayBarcodeComponent } from "./array-barcode.component";
import { MatTableModule } from '@angular/material/table';
import { CePipesModule, CeTableModule } from "@codeffekt/ce-core";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ArrayBarcodeComponent
    ],
    imports: [        
        MatTableModule,
        CeTableModule,
        CePipesModule,
        CommonModule,
    ],
    exports: [
        ArrayBarcodeComponent
    ]
})
export class ArrayBarcodeModule {}