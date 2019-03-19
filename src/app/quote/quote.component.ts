import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,'Wars come and go but my soldiers stay in turn','Tupac Amaru Shakur', new Date(1993, 4, 3)),
    new Quote(2,'The grass is greener when you water it','Neil Barringham', new Date(1993, 4, 3)),
    new Quote(3,'The brain is wider than the sky','Emily Dickinson', new Date(1993, 4, 3)),
    new Quote(4, 'There is nothing permanent except change','Heraclitos', new Date(1993, 4, 3)),
    new Quote(5, 'You cannot shake hands with a clenched fist','Indira Gandhi', new Date(1993, 4, 3)),
    new Quote(6, 'Learn to say no to the good so you can say yes to the best','John C', new Date(1993, 4, 3)),
 ]
 completeQuote(isComplete,index){
  if (isComplete){
    this.quotes.splice(index,1);
  }
}
  toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
