import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'


import { Observer, Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api_rest = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb'

  pre_list = []
  leters = []
  card_list = []
  select_view = ''
  ready_data = new Subject()
  data

  constructor(
    private http:HttpClient
  ) {
    this.http.get(this.api_rest).subscribe( d => {
      this.pre_list = d['results'][0].sort((a, b) => (a.first > b.first) ? 1:-1)
      this.pre_list.map((x, index)=>{
        let leter = x.first.split('')[0]
        let pos = this.leters.indexOf(leter)
        x['display'] = 'contact-favorite'
        if( pos < 0){
          this.leters.push(x.first.split('')[0])
          this.card_list.push({
            leter: leter,
            contacts: [x]
          })
        } else{
          this.card_list[pos]['contacts'].push(x)
        }
      })
      this.ready_data.next(this.card_list)
    })
  }

  getData(){
    return this.ready_data
  }

}
