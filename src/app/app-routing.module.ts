import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VacinationComponent } from './vacination/vacination.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [

{
  path:"", redirectTo:'home' , pathMatch:"full"
},

{
  path:"home", component:HomeComponent
},

{
  path: "about-us", component:AboutUsComponent, 
},

{
  path: "vacination", component:VacinationComponent, 
},
{
  path:"header", component:HeaderComponent,
},
{
  path:"footer", component:FooterComponent,
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
