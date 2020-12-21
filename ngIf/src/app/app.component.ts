import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngIf';



public employees=[
  {
  "userId":1,
 "name":"Preksha",
  "Age":24
},
{
  "userId":2,
  "name":"sonaa",
  "Age":45
},
{
  "userId":3,
  "name":"esha",
  "Age":24
},
{
  "userId":4,
  "name":"heysha",
  "Age":24
},
{
  "userId":5,
  "name":"sjsha",
  "Age":24
},
{
  "userId":6,
  "name":"sonaa",
  "Age":45
},
{
  "userId":7,
  "name":"sonaa",
  "Age":45
},
{
  "userId":8,
  "name":"sonaa",
  "Age":45
},
{
  "userId":9,
  "name":"sonaa",
  "Age":45
},
{
  "userId":10,
  "name":"sonaa",
  "Age":45
},
];
}
// removeItem(id: int) {
//   this.employees = this.employees.filter(item => item.id !== id);

// }
