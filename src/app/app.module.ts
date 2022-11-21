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
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
