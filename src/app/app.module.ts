import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material-module.module'
import { HeaderComponent } from './pages/layouts/header/header.component'
import { HomeComponent } from './pages/home/home.component'
import { FeedComponent } from './components/feed/feed.component'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [ AppComponent, HeaderComponent, HomeComponent, FeedComponent ],
	imports: [ MaterialModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
