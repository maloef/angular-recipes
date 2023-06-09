import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
]

// const routes: Routes = [
//   { path: '', component: Rec },
//   {
//       path: 'users', component: UsersComponent, children: [
//           { path: ':id/:name', component: UserComponent },
//       ]
//   },
//   {
//       path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [
//           { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
//           { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
//       ]
//   },
//   // { path: 'not-found', component: PageNotFoundComponent },
//   { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'} },
//   { path: '**', redirectTo: '/not-found' }
// ]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
