  import { Component, HostListener } from '@angular/core';
  import { SchoolService } from '../../services/-school.service';
  
  @Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: false
  })
  export class HomePageComponent {
    school: any[] = [];
    events: string[] = ["2020", "2021", "2022", "2023"];  
    stories = [
      { title: "Story 1", content: "This is the first story." },
      { title: "Story 2", content: "This is the second story." },
      { title: "Story 3", content: "This is the third story." }
    ];
    lastScrollTop = 0;
    scrollDirection: 'up' | 'down' = 'down';
    expandedSchool: string | null = null; 
    expandedSection: string | null = null;

    constructor(private schoolService: SchoolService) {}

    ngOnInit() {
      this.getSchool();
    }

    getSchool() {
      this.schoolService.getProducts().subscribe((response: any) => {
        this.school = response.school;
      });
    }

    toggleExpand(school: string) {
      this.expandedSchool = this.expandedSchool === school ? null : school;
    }

    toggleSection(section: string) {
      this.expandedSection = this.expandedSection === section ? null : section;
    }

    isAnyExpanded(): boolean {
      return this.expandedSchool !== null;
    }

    isSectionExpanded(): boolean {
      return this.expandedSection !== null;
    }

    activeIndex = 0;
    nextStory() {
      if (this.activeIndex < this.stories.length - 1) {
        this.activeIndex++;
      }
    }

    previousStory() {
      if (this.activeIndex > 0) {
        this.activeIndex--;
      }
    }
  }
