import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service'

declare const M:any

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  pre_list = []
  leters = []
  card_list:any
  select_view = ''

  constructor(
    private _data_servive:DataService
  ) { }

  ngOnInit() {
    this._data_servive.getData().subscribe(d => {
      this.card_list = d
    })
    this.card_list = this._data_servive.card_list
    M.AutoInit();
  }

  getAttr(tag, attr){
    return tag.target.attributes[attr].value
  }

  getContact(tag){
    return this.card_list[this.getAttr(tag, 'letter')].contacts[this.getAttr(tag, 'contact')]
  }

  showContact(tag){
    console.log(this.getContact(tag).display)
    this.card_list[this.getAttr(tag, 'letter')].contacts[this.getAttr(tag, 'contact')].display = this.getContact(tag).display == 'contact-favorite' ? 'contact-no-favorite' : 'contact-favorite'
  }

  selectView(view){
    if(view == 'all'){
      this.select_view = ''
    }else if(view == 'no-favorite'){
      this.select_view = 'show-contact-no-favorite'
    }else if(view == 'favorite'){
      this.select_view = 'show-contact-favorite'
    }
  }

}
