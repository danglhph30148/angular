import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { CreateComponent } from './pages/admin/create/create.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateCategoryComponent } from './pages/admin/category/create-category/create-category.component';
import { UpdateCategoryComponent } from './pages/admin/category/update-category/update-category.component';
import { ListcategoryComponent } from './pages/admin/category/listcategory/listcategory.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'signin', component:SigninComponent },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'admin', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'create', component: CreateComponent },
      { path: 'products/:id', component: EditComponent },
      { path: 'categories', component: ListcategoryComponent },
      { path: 'category/create', component: CreateCategoryComponent },
      { path: 'category/:id', component: UpdateCategoryComponent },
      
    ],
  },
];
