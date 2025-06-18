import { Component } from '@angular/core';
import { BackgroundComponent } from "../background/background.component";
import { HeaderComponent } from "../header/header.component";
import { AuthContainerComponent } from "../auth-container/auth-container.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-sign-up',
  imports: [BackgroundComponent, HeaderComponent, AuthContainerComponent, FooterComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
