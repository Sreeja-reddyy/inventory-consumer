import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

import { ProductService } from './product.service';
import { Product } from './product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Inventory Management System';
  imagePath='/assets/images/ims.jpg';

  constructor(public loginService:AuthenticationService) { }
}