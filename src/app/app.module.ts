import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DocteursComponent } from './docteurs/docteurs.component';
import { RouterModule, Routes} from "@angular/router";
import { AccueilComponent } from './accueil/accueil.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TestPaluComponent } from './test-palu/test-palu.component';
import { PreventionComponent } from './prevention/prevention.component';
import { DistrictComponent } from './district/district.component';
import { FooterComponent } from './footer/footer.component';
import { CartographieComponent } from './cartographie/cartographie.component';
import {HttpClientModule} from "@angular/common/http";
import { CommuneComponent } from './commune/commune.component';

const appRoutes : Routes = [
  { path: 'docteur', component: DocteursComponent},
  { path: 'auth/signin', component: SigninComponent},
  { path: 'auth/signup', component: SignupComponent},
  { path: 'prevention', component: PreventionComponent},
  { path: 'district', component: DistrictComponent},
  { path: 'result', component: TestPaluComponent},
  { path: 'test', component: TestPaluComponent},
  { path: 'emergency', component: SignupComponent},
  { path: 'commune', component: CommuneComponent},
  { path: 'card', component: CartographieComponent},
  { path: '', component: AccueilComponent},
  { path: '**', redirectTo: ''}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DocteursComponent,
    AccueilComponent,
    SigninComponent,
    SignupComponent,
    TestPaluComponent,
    PreventionComponent,
    DistrictComponent,
    FooterComponent,
    CartographieComponent,
    CommuneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
