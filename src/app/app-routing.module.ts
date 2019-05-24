import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { HeaderComponent } from './pages/layouts/header/header.component'

const routes: Routes = [
	{
		component: HeaderComponent,
		path: '',
		children: [
			{
				component: HomeComponent,
				path: 'home'
			},
			{
				redirectTo: '/home',
				path: '',
				pathMatch: 'full'
			}
		]
	}
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
