import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'ed-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.css'],
})
export class ProgressIndicatorComponent implements OnInit {
  inProgress: Subject<boolean> = this.service.inProgress;

  constructor(private service: ProgressIndicatorComponent) {}

  ngOnInit(): void {}
}
