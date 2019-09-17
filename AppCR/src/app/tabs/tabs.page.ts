import { Component, OnInit } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
    // private firebase: Firebase
  ) {
    // this.firebase.getToken()
    //   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
    //   .catch(error => console.error('Error getting token', error));

    // this.firebase.onNotificationOpen()
    //   .subscribe(data => console.log(`User opened a notification ${data}`));

    // this.firebase.onTokenRefresh()
    //   .subscribe((token: string) => console.log(`Got a new token ${token}`));
  }

  ngOnInit() {
  }

}
