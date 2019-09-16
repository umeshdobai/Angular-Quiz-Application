import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/data.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  data: string;

  constructor(private service:DataService) { }

  ngOnInit() {
    this.service.share1$.subscribe(message=>{this.data=message;
      console.log(message);

    })
  }

}
