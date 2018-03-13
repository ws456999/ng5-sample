import { Component, OnInit } from '@angular/core'
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private headers = new Headers({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http
      .get('https://api.yii.dgtle.com/v2/index/word')
      .subscribe(console.log)
  }

  ngOnInit() {
    this.getHeroes()
    console.log(this)
  }
}
