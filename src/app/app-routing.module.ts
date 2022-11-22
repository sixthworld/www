import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesRegisterComponent } from './components/pages/companies-register/companies-register.component';
import { CompaniesComponent } from './components/pages/companies/companies.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DevelopersRegisterComponent } from './components/pages/developers-register/developers-register.component';
import { DevelopersComponent } from './components/pages/developers/developers.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: CompaniesComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'companies', redirectTo: 'hire-developers', pathMatch: 'full' },
  { path: 'hire-developers', component: CompaniesComponent },
  { path: 'developers/register', component: DevelopersRegisterComponent },
  { path: 'companies/register', component: CompaniesRegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
