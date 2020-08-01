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
  lat = 45.646666;
  lng = 0.121748;
  zoom = 18;
  constructor() { }

  ngOnInit(): void {
  }

}
