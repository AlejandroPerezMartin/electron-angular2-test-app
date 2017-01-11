import { NgModule } from "@angular/core";
import { StoreService } from "./store.service";

@NgModule({})

export class ServicesModule {
    static forRoot() {
        return {
            ngModule: ServicesModule,
            providers: [StoreService]
        };
    }
}

export {
    StoreService
}
