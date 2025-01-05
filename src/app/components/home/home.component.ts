import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const typing = this.el.nativeElement.querySelector('.typing');
    this.typewriter(typing);
  }

  typewriter(el: HTMLElement) {
    const text = el.innerHTML.split('');
    el.innerHTML = '';
    text.forEach((char, i) => {
      setTimeout(() => (el.innerHTML += char), 75 * i);
    });
  }
}
