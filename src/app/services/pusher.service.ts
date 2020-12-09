import { Injectable } from '@angular/core';
import Pusher from 'pusher-js/with-encryption';

// this is here to discourage the instantianting of pusher any where its
// needed, better to reference it from one place
@Injectable()
export class PusherService {
private _pusher: any;

constructor() {
  this._pusher = new Pusher ('APP_KEY', {
    cluster: 'eu',
    forceTLS: true
  });
}

getPusher() {
  return this._pusher;
}

}
