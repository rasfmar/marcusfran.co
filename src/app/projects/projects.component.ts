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
        desc: 'Compact was my attempt at creating my own programming language using C++. I created a basic lexical analyzer and token parser. I had to refine my understanding of pointers, memory allocation, and garbage collection to optimize the interpreter.',
        links: [
          ['GitHub','https://github.com/rasfmar/Compact']
        ]
      },
      {
        name: 'AngularSandbox',
        icon: '/assets/img/Angular.png',
        desc: 'AngularSandbox is a web application developed in Angular to practice its full capabilities. You’ll find several different components with random functions.',
        links: [
          ['Link','#'],
          ['GitHub','https://github.com/rasfmar/Compact']
        ]
      },
      {
        name: 'RasfOS',
        icon: '/assets/img/Angular.png',
        desc: 'RasfOS is an operating system I built in the summer of 2019 exploring x86 Intel assembly to construct a basic operating system.',
        links: [
          ['GitHub','https://github.com/rasfmar/Compact']
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
