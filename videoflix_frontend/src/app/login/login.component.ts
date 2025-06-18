import { Component } from '@angular/core';
import { BackgroundComponent } from "../background/background.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { AuthContainerComponent } from "../auth-container/auth-container.component";

@Component({
  selector: 'app-login',
  imports: [BackgroundComponent, HeaderComponent, FooterComponent, AuthContainerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
