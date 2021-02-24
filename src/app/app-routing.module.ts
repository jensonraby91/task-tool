import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'task',
    loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule)
  },
  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full'
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
