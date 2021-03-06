import { EditBookComponent } from './components/edit-book/edit-book.component';
import { CreateNewBookComponent } from './components/create-new-book/create-new-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

 import { ContactComponent } from './components/contact/contact.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: "employees", children: [ // Component less route
      { path: '', component: EmployeeListComponent},
      { path: 'create-employee', component: CreateEmployeeComponent },
      { path: "update-employee/:id", component: UpdateEmployeeComponent },
      { path: "view-employee/:id", component: ViewEmployeeComponent }
  ]
},
  {
    path: "books", children: [
      { path: '', component: BooksComponent },
      { path: "book-details/:id", component: BookDetailsComponent },
      { path: "create-new-book", component: CreateNewBookComponent },
      { path: "edit-book/:id", component: EditBookComponent }, 
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
