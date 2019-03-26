import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

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


    toogleDetails(index){
        this.quotes[index].showDescription =!this.quotes[index].showDescription;
    }

    addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quote.Length+1
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }

    deleteQuote(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
            
            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }

  constructor() { }

  ngOnInit() {
  }

}