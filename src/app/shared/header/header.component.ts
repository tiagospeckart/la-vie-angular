import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public title: string = 'la vie';
  public subTitle: string = 'Clínica de Psicologia';
  public btnHome: string = 'Home';
  public btnAdmin: string = 'Admin';
  public btnPsych: string = 'Psychologists';
  public btnClient: string = 'Clients';
  public btnSession: string = 'Sessions';
}
