import { Component, OnInit, Input} from '@angular/core';
import{Quotes} from '../quotes'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() parentData:Quotes

  constructor() { }

  ngOnInit(): void {
  }

}
