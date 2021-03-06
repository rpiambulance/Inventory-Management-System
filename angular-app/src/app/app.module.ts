import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SingleInventoryComponent } from './single-inventory/single-inventory.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewInvFormComponent } from './new-inv-form/new-inv-form.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { RemovePersonComponent } from './remove-person/remove-person.component';
import { TakeinventoryComponent } from './takeinventory/takeinventory.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RemoveInventoryComponent } from './remove-inventory/remove-inventory.component';
import { UpdatequantityComponent } from './updatequantity/updatequantity.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InventoryComponent,
    SingleInventoryComponent,
    RegisterComponent,
    LandingPageComponent,
    NewInvFormComponent,
    AddItemFormComponent,
    AddPersonComponent,
    BarcodeComponent,
    RemovePersonComponent,
    TakeinventoryComponent,
    AboutUsComponent,
    RemoveInventoryComponent,
    UpdatequantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
