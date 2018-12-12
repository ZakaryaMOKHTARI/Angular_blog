import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  lastUpdate = new Date();
  @Input() like = 0;
  @Input() unlike = 0;

  constructor() { }

  ngOnInit() {
  }

  getColor(){
    if (this.like < this.unlike) {
      return '#fc8f8f';
    } else if (this.like > this.unlike) {
      return 'lightgreen';
    }
  }

  onDislike() {
    this.unlike++;
  }

  onLike() {
    this.like++;
  }

}
