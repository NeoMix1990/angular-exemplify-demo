import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ex-angular-exemplify',
  template: `
    <p>
<<<<<<< HEAD
      angular-exemplify works! oh we can win the race why not
=======
      angular-exemplify works! oh we can win the race
>>>>>>> 0dac8299b4ec9988c9d7cc1434be2079707c4703
    </p>
  `,
  styles: []
})
export class AngularExemplifyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
