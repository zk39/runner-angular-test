import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { TypeheadInputComponent } from './typehead-input/typehead-input.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, TypeheadInputComponent],
  imports: [BrowserModule, MatInputModule, MatAutocompleteModule, MatOptionModule,MatSelectModule,MatCardModule, MatIconModule,FormsModule, ReactiveFormsModule, BrowserAnimationsModule,MatChipsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
