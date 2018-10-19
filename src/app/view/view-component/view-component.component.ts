import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  id: string = "";
  response: any;

  constructor(private svc: TestService, private http: HttpClient){
    this.svc.printToConsole("From inner module / component");
}
  ngOnInit() {
  }

  search() {
    this.http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }
}
