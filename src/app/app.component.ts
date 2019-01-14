import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  quotes = [
        new Quote(1,'Wars come and go but my soldiers stay in turn','Tupac Amaru Shakur'),
        new Quote(2,'The grass is greener when you water it','Neil Barringham'),
        new Quote(3,'The brain is wider than the sky','Emily Dickinson'),
        new Quote(4, 'There is nothing permanent except change','Heraclitos',),
        new Quote(5, 'You cannot shake hands with a clenched fist','Indira Gandhi',),
        new Quote(6, 'Learn to say no to the good so you can say yes to the best','John C',),
     ]
    } 
     