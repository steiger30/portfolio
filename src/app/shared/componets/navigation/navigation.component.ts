import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  show(){
    document.querySelector('.hamburger')?.classList.toggle('open')
    document.querySelector('.navigation')?.classList.toggle('active')
  }
}
