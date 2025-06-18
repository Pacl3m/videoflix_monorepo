import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Video } from '../../models/video.model';
import { MOCK_VIDEOS } from '../../mock/mock-video-data';

@Injectable({
  providedIn: 'root'
})

export class VideoService {
  private apiUrl = 'http://localhost:8000/api/videos/';  // URL vom Backend

  // constructor(private http: HttpClient) { }

  // getVideos(): Observable<Video[]> {
  //   return this.http.get<Video[]>(this.apiUrl);

  getVideos(): Observable<Video[]> {
    return of(MOCK_VIDEOS);
  }
}
