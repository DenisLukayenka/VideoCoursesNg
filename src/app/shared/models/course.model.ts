import { ICourse } from './course.interface';

export class Course implements ICourse {
    id: number;    
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    isTopRated: boolean;

    constructor(
        id: number, 
        title: string, 
        creationDate: Date, 
        duration:number, 
        description: string,
        isTopRated: boolean = false) {
        
            this.id = id;
            this.title = title;
            this.creationDate = creationDate;
            this.duration = duration;
            this.description = description;
            this.isTopRated = isTopRated;
    }
}
