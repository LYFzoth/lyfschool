import { HostListener, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isScrolled: boolean = false;
  isHeaderBottomHidden: boolean = false;
  isLinksVisible: boolean = false;
}
