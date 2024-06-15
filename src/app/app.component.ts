import { CommonModule } from '@angular/common';
import { Component, OnInit, inject,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule,FormControl, FormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { AuthService } from './features/auth/services/auth.service';
import { LoginRequest } from './core/models/auth.model';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
