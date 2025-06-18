import { Video } from '../models/video.model';

export const MOCK_VIDEOS: Video[] = [
    {
        id: 1,
        title: 'Stromberg',
        description: 'Beschreibung vom Beispiel Video 1',
        thumbnail: '../../assets/img/videoImg/test.jpg',
        videoSrc: '../../assets/videos/268290_small.mp4',
    },
    {
        id: 2,
        title: 'Winterberg',
        description: 'Beschreibung vom Beispiel Video 2',
        thumbnail: '../../assets/img/videoImg/test2.jpg',
        videoSrc: '../../assets/videos/275633_small.mp4',
    },
];
