import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFieldTextComponent} from './shared-utils/form-utils/input-field-text/input-field-text.component';
import { InputFieldEmailComponent } from './shared-utils/form-utils/input-field-email/input-field-email.component';
import { InputFieldPasswordComponent } from './shared-utils/form-utils/input-field-password/input-field-password.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldEmailComponent,
    InputFieldTextComponent,
    InputFieldPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
