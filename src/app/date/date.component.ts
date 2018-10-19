import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';
// import { runMain } from 'module';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: string;
  someNumber: number = 10;
  // user: any;

  @Input('user') user: User;
  isCollapsed: boolean = true;

  constructor() {

  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' .... ' + currentDate.toLocaleTimeString();
    }, 1000);

    //   this.user = {
    //     name: this.user.name, 
    //     title: this.user.title, 
    //     address: this.user.address,
    //     phone: this.user.phone
    // };
    // this.user = {
    //   name: this.userName, 
    //   title: 'Dev/Ops', 
    //   address: '1234 Main St, City, State, 100010',
    //   phone: [
    //     // '121-224-4563',
    //     // '485-732-5578',
    //     // '754-309-8745'
    //   ]
    // }
    
  }
  addTwoNumbers(a, b) {
    return a + b;
  }
}
