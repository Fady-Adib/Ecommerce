import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LoadingService } from './Loading.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'freshcart';
  isLoading: Subject<boolean> = this._LoadingService.isLoading;

  constructor(private _LoadingService: LoadingService) {}
}
