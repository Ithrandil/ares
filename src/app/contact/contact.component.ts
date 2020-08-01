import { Component, OnInit } from '@angular/core';
import { faAt, faFax, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faPhone = faPhone;
  faAt = faAt;
  faFax = faFax;

  constructor() { }

  ngOnInit(): void {
  }

}
