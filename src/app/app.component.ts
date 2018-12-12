import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Premier Post',
      content: 'Ceci est mon premier post ! :). Lorum Ipsum dolor sit amet Lorum Ipsum dolor sit amet',
    },
    {
      title: 'Deuxième Post',
      content: 'Ceci est mon deuxième post Lorum Ipsum dolor sit amet Lorum Ipsum dolor sit amet Lorum Ipsum dolor sit amet',

    },
    {
      title: 'Troisième Post',
      content: 'Ceci est mon troisième post Lorum Ipsum dolor sit amet Lorum Ipsum dolor sit amet',

    }
        ];

  constructor() {}
}
