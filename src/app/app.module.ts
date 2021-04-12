import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileListComponent } from './files/file-list/file-list.component';
import { NavbarComponent } from './headers/navbar/navbar.component';
import { FileEditComponent } from './files/edit/file-edit/file-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FileData } from './services/data/file-data';

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    NavbarComponent,
    FileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FileData),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
