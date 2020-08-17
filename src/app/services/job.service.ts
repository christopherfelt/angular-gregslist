import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Job } from '../models/job';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class JobService {
  url: string = 'https://localhost:5001/api/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url);
  }
  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.url, job, httpOptions);
  }
  deleteJob(job: Job) {
    const url = this.url + '/' + job.id;
    return this.http.delete<Job>(url, httpOptions);
  }
}
