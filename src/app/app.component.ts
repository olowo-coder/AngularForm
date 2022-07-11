import { Component } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { AppData } from './appData';
import { AppService } from './appService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sub!: Subscription;
  constructor(private appservice: AppService){}

  title = 'contactApp';
  middleName: string = "";
  lastName: string = "";

  onSubmit(data: AppData): void{
    console.log(data);
    this.appservice.sendData(data).subscribe(
      {
        next: data => {
            console.log(data);
        }
    }
    )
  }

}

