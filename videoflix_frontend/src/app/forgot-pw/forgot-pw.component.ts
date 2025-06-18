import { Component } from '@angular/core';
import { BackgroundComponent } from "../background/background.component";
import { HeaderComponent } from "../header/header.component";
import { AuthContainerComponent } from "../auth-container/auth-container.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-forgot-pw',
  imports: [BackgroundComponent, HeaderComponent, AuthContainerComponent, FooterComponent],
  templateUrl: './forgot-pw.component.html',
  styleUrl: './forgot-pw.component.scss'
})
export class ForgotPWComponent {

}
