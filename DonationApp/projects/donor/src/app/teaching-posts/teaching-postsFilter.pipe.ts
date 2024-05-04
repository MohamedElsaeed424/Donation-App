import { Pipe, PipeTransform } from '@angular/core';
import { TeachingPost } from './teaching-post.model';

@Pipe({
  name: 'teachingPostFilter'
})
export class TeachingPostFilterPipe implements PipeTransform {
  transform(teachingPosts: TeachingPost[], subject: string, area: string, governorate: string): TeachingPost[] {
    if (!teachingPosts) {
      return [];
    }

    const subjectFilter = subject ? subject.toLowerCase() : '';
    const areaFilter = area ? area.toLowerCase() : '';
    const governorateFilter = governorate ? governorate.toLowerCase() : '';

    return teachingPosts.filter(teachingPost => {
      return (
        (!subjectFilter || teachingPost.subject.toLowerCase().includes(subjectFilter)) &&
        (!areaFilter || teachingPost.area.toLowerCase().includes(areaFilter)) &&
        (!governorateFilter || teachingPost.governorate.toLowerCase().includes(governorateFilter))
      );
    });
  }
}
