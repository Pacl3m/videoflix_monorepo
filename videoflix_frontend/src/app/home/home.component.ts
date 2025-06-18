import { Component } from '@angular/core';
import { BackgroundComponent } from "../background/background.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [BackgroundComponent, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private router: Router
  ) {
  }

}
