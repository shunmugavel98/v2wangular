import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CustomersComponent } from './customers/customers.component';
import { CareersComponent } from './careers/careers.component';
import { SupplyComponent } from './supply/supply.component';
import { ProductComponent } from './product/product.component';
import { WebComponent } from './web/web.component';
import { PocComponent } from './poc/poc.component';
import { QAComponent } from './qa/qa.component';
import { SoftwareComponent } from './software/software.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AllserviceComponent } from './allservice/allservice.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    
    HomeComponent,
    ServicesComponent,
    CustomersComponent,
    CareersComponent,
    SupplyComponent,
    ProductComponent,
    WebComponent,
    PocComponent,
    QAComponent,
    SoftwareComponent,
    ContactusComponent,
    AllserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    IvyCarouselModule,
    CarouselModule,
    RouterModule.forRoot([
     
      { path: 'home', component: HomeComponent},
      { path: 'services', component: ServicesComponent},
      { path: 'careers', component: CareersComponent},
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'customers', component: CustomersComponent},
      { path: 'supply', component: SupplyComponent},
      { path: 'product', component: ProductComponent},
      { path: 'web', component: WebComponent},
      { path: 'poc', component: PocComponent},
      { path: 'qa', component: QAComponent},
      { path: 'software', component: SoftwareComponent},
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
