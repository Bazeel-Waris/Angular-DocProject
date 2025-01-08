import { ResolveFn, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { ErrorPageComponent } from './error-page/error-page.component'
import { ErrorHandler, inject } from '@angular/core';
import { ProductPageComponent } from './home/product-page/product-page.component';
import { UserPageComponent } from './home/user-page/user-page.component';
import { UserDetailComponent } from './home/user-page/user-detail/user-detail.component';
import { ProductsComponent } from './products/products.component';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

export const routes: Routes = [
     { path: '', redirectTo: 'home' , pathMatch: 'full' },
     { 
          path: 'home', 
          title: 'Home',
          component: HomeComponent, 
          children: [
               { path: 'product', title: resolvedChildATitle, component: ProductPageComponent },
               { path: 'user', title: 'Home > User', component: UserPageComponent },
          ] 
     },
     { 
          path: 'user/:id/dd', title: 'User Detail', component: UserDetailComponent,
     },
     { 
          path: 'about', 
          title: 'About',
          component: AboutComponent,
     },
     { path: '404', redirectTo: ({ queryParams }) => {
          const errorHandler = inject(ErrorHandler);
          const userIdParam = queryParams['id'];
          if (userIdParam !== undefined) {
            return `/contact/${userIdParam}`;
          } else {
            errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));
            return `/not-found`;
          }
        },
          
      },
     { 
          path: 'contact', 
          title: 'Contact',
          component: ContactComponent
     },
     { 
          path: 'products', 
          title: 'Products',
          component: ProductsComponent
     },
     { path: '**', component: ErrorPageComponent },
];
