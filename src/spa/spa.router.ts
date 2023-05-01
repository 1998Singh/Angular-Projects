import { RouterModule,Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home/homepage.component";
import { PageNotFoundComponent } from "./pages/home/notfound/pagenotfound.component";



 const customRoutes:Routes=[

  {path:'',component:HomePageComponent},


  {path:'**',component:PageNotFoundComponent}
]

export const SPARouterModule=RouterModule.forRoot(customRoutes)

