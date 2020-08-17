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
  itemType: string = 'job';

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((job) => {
      this.jobs = job;
    });
  }

  addJob(job: Job) {
    this.jobService.addJob(job).subscribe((job) => {
      this.jobs.push(job);
    });
  }

  deleteJob(job: Job) {
    this.jobs = this.jobs.filter((j) => j.id !== job.id);
    this.jobService.deleteJob(job).subscribe();
  }
}
