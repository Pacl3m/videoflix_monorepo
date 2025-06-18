import { Component } from '@angular/core';
import { BackgroundComponent } from "../background/background.component";
import { HeaderComponent } from "../header/header.component";
import { AuthContainerComponent } from "../auth-container/auth-container.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-reset-pw',
  imports: [BackgroundComponent, HeaderComponent, AuthContainerComponent, FooterComponent],
  templateUrl: './reset-pw.component.html',
  styleUrl: './reset-pw.component.scss'
})
export class ResetPWComponent {

}
