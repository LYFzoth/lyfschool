import { ResolveFn } from '@angular/router';
import { SchoolService } from '../services/-school.service';

export const schoolInfoResolver: ResolveFn<any> = (route, state) => {
  return schoolService.getProducts(); }
