import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Job } from '../../models/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  @Input() job: Job;
  @Output() deleteJob: EventEmitter<Job> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(job) {
    this.deleteJob.emit(job);
  }
}
