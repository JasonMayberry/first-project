import { Component } from '@angular/core';
import { User } from './date/user.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  inputText: string = "Initial Value";

  // I need the TestService service?
  // Add TestService as an arg of the constructor
  // The "private" keyword is a shortcut making
  // "svc" a member varible
  constructor(private svc: TestService, private http: HttpClient){
      this.svc.printToConsole("Got the service");
      this.user = new User();
      this.user.name = 'Jason Mayberry .net', 
      this.user.title = 'Dev/Ops', 
      this.user.address = '1234 Main St, Ava, MO, 65608',
      this.user.phone = [
        'Home: 121-224-4563',
        'Work: 485-732-5578',
        'Cell: 754-309-8745',
        'Other: 456-727-8489'
      ]
    }

    ngOnInit() {
      let obs = this.http.get('https://gist.githubusercontent.com/planetoftheweb/98f35786733c8cccf81e/raw/f3dad774ed1fe20b36011b1261bb392ee759b867/data.json');
      obs.subscribe((response) => console.log(response));
    }
};

