import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { SchoolService } from '../services/-school.service';

export const newsResolver: ResolveFn<any> = (route, state) => {
  const schoolService = inject(SchoolService)
  return schoolService.getProducts
};
