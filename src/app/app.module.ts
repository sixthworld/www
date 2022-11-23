import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CompaniesComponent } from './components/pages/companies/companies.component';
import { DevelopersComponent } from './components/pages/developers/developers.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { DevelopersRegisterComponent } from './components/pages/developers-register/developers-register.component';
import { CompaniesRegisterComponent } from './components/pages/companies-register/companies-register.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
<<<<<<< HEAD
import { FlexLayoutModule } from '@angular/flex-layout';

=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
>>>>>>> bca09a84524f7eb31d9844cc337a6fab5d7c8d34
@NgModule({
  declarations: [
    AppComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    CompaniesComponent,
    DevelopersComponent,
    HeaderComponent,
    FooterComponent,
    DevelopersRegisterComponent,
    CompaniesRegisterComponent,
    NotFoundComponent,
  ],
<<<<<<< HEAD
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
=======
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
>>>>>>> bca09a84524f7eb31d9844cc337a6fab5d7c8d34
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
