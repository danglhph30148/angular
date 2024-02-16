import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { CreateComponent } from './pages/admin/create/create.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateCategoryComponent } from './pages/admin/category/create-category/create-category.component';
import { UpdateCategoryComponent } from './pages/admin/category/update-category/update-category.component';
import { ListcategoryComponent } from './pages/admin/category/listcategory/listcategory.component';
import { authGuard } from './guard/auth.guard';
import { CreateUserComponent } from './pages/admin/user/createuser/createuser.component';
import { ListUserComponent } from './pages/admin/user/listuser/listuser.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'login', component:LoginComponent },

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
      {path: 'user/userlist', component: ListUserComponent},
      { path:  'user/create', component: CreateUserComponent},
      
    ],
    canActivate: [authGuard],
  },
];
