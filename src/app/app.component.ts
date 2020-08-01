import { Component } from '@angular/core';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faPhone = faPhone;
  faAt = faAt;

  public selectedLanguageFlag = './assets/flags/flag-fr.png';

  constructor(private translate: TranslateService) { }

  public changeLanguage(lng: string): void {
    this.translate.use(lng);
    this.selectedLanguageFlag = `./assets/flags/flag-${lng}.png`;
  }
}
