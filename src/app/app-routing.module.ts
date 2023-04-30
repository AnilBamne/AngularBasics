import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './Components/parent/parent.component';
import { DemoComponent } from './Components/demo/demo.component';

const routes: Routes = [
  {path:'parent',component:ParentComponent},
  {path:'demo',component:DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
