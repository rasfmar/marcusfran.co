import { Component, OnInit } from '@angular/core';

declare function slick(): any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Object;

  constructor() { 
    this.projects = [
      {
        name: 'Compact',
        icon: '/assets/img/Angular.png',
        desc: 'Compact is my attempt at creating my own programming language using C++. I created a basic lexical analyzer and token parser. I had to refine my understanding of pointers, memory allocation, and garbage collection to optimize the interpreter.',
        links: [
          ['GitHub (WIP)','https://github.com/rasfmar/Compact']
        ]
      },
      {
        name: 'AngularSandbox',
        icon: '/assets/img/Angular.png',
        desc: 'AngularSandbox is a web application developed in Angular to practice its full capabilities. You’ll find several different components with random functions.',
        links: [
          ['Link','https://honorable.pw'],
          ['GitHub (WIP)','https://github.com/rasfmar/AngularSandbox']
        ]
      },
      {
        name: 'Small',
        icon: '/assets/img/Angular.png',
        desc: 'Small is a virtual machine I will begin working on in C++. It will feature its own allocated memory, registers, flags, and machine language utilizing an emulated CPU and ALU\'s operations and software interrupts with I/O access.',
        links: [
          ['GitHub (WIP)','https://github.com/rasfmar/Small']
        ]
      },
      {
        name: 'DrawingOS',
        icon: '/assets/img/Angular.png',
        desc: 'DrawingOS is an "operating system" I created with x86 Intel assembly and compiled with nasm. It is intended for DOS and only features a drawing application which can be controlled with the keyboard.',
        links: [
          ['GitHub (not updated)','https://github.com/rasfmar/RasfOS']
        ]
      },
    ];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    slick();
  }

}
