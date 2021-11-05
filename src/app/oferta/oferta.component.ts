import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
})
export class OfertaComponent implements OnInit {
  public idOferta: any;
  public selectedOferta: Array<any> = [];

  constructor(
    private _route: ActivatedRoute,
    private homeService: HomeService
  ) {
    this.idOferta = this._route.snapshot.paramMap.get('id');
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.homeService.getOfertas().subscribe(
      (response) => {

        this.selectedOferta = response.filter((e: { id: any; })=>e.id==this.idOferta)
        console.log(JSON.stringify(this.selectedOferta));
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }
}
