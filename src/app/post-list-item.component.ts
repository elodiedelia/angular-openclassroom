import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  @Input() thePost;

  ngOnInit() {

  }
onloveits() {
  this.thePost.loveIts += 1;

  }
ondontloveits() {
    this.thePost.loveIts -= 1;
     }
  getColor() {
    if (this.thePost.loveIts > 0) {
      return 'green';
    } else if (this.thePost.loveIts < 0) {
      return 'red';
    }
  }
}



