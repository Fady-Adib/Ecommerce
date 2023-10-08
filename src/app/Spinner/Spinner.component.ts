import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from '../Loading.service';

@Component({
  selector: 'app-Spinner',
  templateUrl: './Spinner.component.html',
  styleUrls: ['./Spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  isLoading: Subject<boolean> = this._LoadingService.isLoading;

  constructor(private _LoadingService: LoadingService) {}

  ngOnInit() {}
}
