import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import{Quotes} from '../quotes'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newquote = new Quotes("","","",0, 0, new Date());

  constructor() { }

  ngOnInit(): void {
  }

}
