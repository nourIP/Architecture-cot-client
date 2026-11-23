import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  siteName: String = 'conference site';
  imageSrc = 'images/conf.jpg';
  alt = 'no image';
  inputItem = '';

  clickMe() {
    return alert('vous avez cliqué!!!!!');
  }
}
