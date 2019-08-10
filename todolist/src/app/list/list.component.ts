import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  value: string = '';
  list = [];
  isChecked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onEnter(value: string) { 
    this.list.push(value);
    this.value = value ;
  }

  onCheck() {
    this.isChecked = !this.isChecked;
  }

}
