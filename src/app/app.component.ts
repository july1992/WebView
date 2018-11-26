import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webview';
  constructor() { }
  ngOnInit(): void {
  }
  vily(name: string): void {
    if (name) {
      console.log('点击了：' + name);

    } else {
      console.log('啥都没有点击');
    }
  }
}
