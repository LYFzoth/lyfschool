import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-introduction',
  standalone: false,
  templateUrl: './questions-introduction.component.html',
  styleUrls: ['./questions-introduction.component.css'] // Corrected this
})
export class QuestionsIntroductionComponent {
  faqs = [
    {
      question: 'Сургалтын төлбөр хэд вэ?',
      answer: 'Сургалтын төлбөр хөтөлбөрөөс хамааран ялгаатай байдаг. Илүү дэлгэрэнгүй мэдээллийг сургуулийн вэбсайтаас авна уу.',
      isOpen: false,
    },
    {
      question: 'Сургалт танхимаар явагдах уу?',
      answer: 'Манай сургалт танхимаар болон цахимаар явагддаг.',
      isOpen: false,
    },
    {
      question: 'Элсэлтийн хугацаа хэзээ дуусах вэ?',
      answer: 'Элсэлтийн хугацаа сар бүрийн сүүлийн өдөр дуусна.',
      isOpen: false,
    },
    {
      question: 'Яаж элсэх вэ?',
      answer: 'Элсэхийн тулд манай вэбсайтад бүртгүүлж, шаардлагатай материалыг бүрдүүлнэ.',
      isOpen: false,
    },
    {
      question: 'Диплом олгох хугацаа хэд вэ?',
      answer: 'Диплом олгох хугацаа сургалтын төгсгөлийн дараа нэг сарын дотор гардаг.',
      isOpen: false,
    },
    {
      question: 'Сургалт ямар хэл дээр явагдах вэ?',
      answer: 'Сургалт Монгол болон Англи хэл дээр явагдах боломжтой.',
      isOpen: false,
    },
    {
      question: 'Шалгалт хэрхэн явагдах вэ?',
      answer: 'Шалгалт цахим болон танхимд хосолсон хэлбэрээр явагдана.',
      isOpen: false,
    },
  ];

  toggleAnswer(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
