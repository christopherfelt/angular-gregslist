import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

import { Job } from '../../models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  jobs: Job[];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((job) => {
      this.jobs = job;
    });
  }
}
