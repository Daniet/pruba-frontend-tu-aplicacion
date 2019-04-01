import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  contact = {
    first: '',
    last: ''
  }
  number_contact
  number_favorities
  number_group
  contat_pos

  constructor(
    private _data_service:DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.number_contact = 0
    this.number_favorities = this.numRandom(100, 1)
    this.number_group = this.numRandom(100, 1)
    this.contat_pos = this.route.params['_value']
    this._data_service.getData().subscribe(d => {
      this.contact = d[this.contat_pos.letter]['contacts'][this.contat_pos.contact]
    })
    this.contact = this._data_service.card_list[this.contat_pos.letter]['contacts'][this.contat_pos.contact]
  }

  numRandom(max, min){
    // return parseInt(Math.random() * 100)
    return parseInt(Math.random() * (max - min) + min)
  }

}
