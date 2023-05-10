import { RouterModule,Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home/homepage.component";
import { PageNotFoundComponent } from "./pages/home/notfound/pagenotfound.component";
import { LoginComponent } from "./pages/home/login/login.component";
import { ContactListComponent } from "./pages/contacts/contactlist.component";
import { ShowComponent } from "./pages/show.component";



 const customRoutes:Routes=[

  {path:'',component:HomePageComponent},

  {path:'login',component:LoginComponent},

  {path:'contacts',component:ContactListComponent},

  {path:'show/:selected',component:ShowComponent},


  {path:'**',component:PageNotFoundComponent}
]

export const SPARouterModule=RouterModule.forRoot(customRoutes)

