import { HomeService } from './../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  public arrayOfertaTrabajo: Array<any> = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getOfertas().subscribe(
      response =>{
        this.arrayOfertaTrabajo = response
        console.log(JSON.stringify(this.arrayOfertaTrabajo))

      },
      error => {
        console.log(JSON.stringify(error))

      }
    );
  }

}
