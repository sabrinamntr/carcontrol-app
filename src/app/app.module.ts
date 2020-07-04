import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './external/login/login.component';
import { RegisterComponent } from './external/register/register.component';

import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from './services/notification.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AutomobileService } from './services/automobile.service';
import { NewcompComponent } from './internal/newcomp/newcomp.component';
import { AboutusComponent } from './external/aboutus/aboutus.component';
import { HowitworksComponent } from './external/howitworks/howitworks.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { DashboardComponent } from './internal/dashboard/dashboard.component';
import { HomeComponent } from './external/home/home.component';
import { ProfileComponent } from './internal/profile/profile.component';
import { AutomobileComponent } from './internal/automobile/automobile.component';
import { ComplistComponent } from './internal/complist/complist.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		NewcompComponent,
		AboutusComponent,
		HowitworksComponent,
		FooterComponent,
		HeaderComponent,
		DashboardComponent,
		HomeComponent,
		ProfileComponent,
		AutomobileComponent,
		ComplistComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
        NgSelectModule,
        MatSidenavModule,
        MatExpansionModule
	],
	providers: [
		CookieService,
		NotificationService,
		AuthService,
		UserService,
		AutomobileService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
