import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default-route',
  templateUrl: './default-route.component.html',
  styleUrls: ['./default-route.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DefaultRouteComponent {
  questions = [
    {
      question: 'How to create reactive forms?',
      answer: 'To create reactive forms, you must import the ReactiveFormsModule and define the form controls using FormGroup and FormControl.'
    },
    {
      question: 'How to add built-in validation for email in reactive form',
      answer: 'Use Angular\'s built-in Validators.email to validate an email field in a reactive form.'
    },
    {
      question: 'How to add built-in validation for required fields in reactive form',
      answer: 'Use Validators.required in the form control definition to mark a field as required in a reactive form.'
    },
    {
      question: 'How to add regex validation for reactive forms',
      answer: 'You can use Validators.pattern(regex) to apply custom regular expression validation in a reactive form.'
    },
    {
      question: 'How to generate routing',
      answer: 'You can generate routing by using Angular CLI commands like "ng generate module app-routing --flat --module=app".'
    },
    {
      question: 'How to configure routes with parameters',
      answer: 'In Angular, routes with parameters are defined like "/path/:param" and accessed in the component using ActivatedRoute.'
    },
    {
      question: 'What is DebounceTime in RxJS',
      answer: 'DebounceTime is an RxJS operator that delays the emission of values from an observable by a specified time, preventing rapid emissions.'
    },
    {
      question: 'What is pipe operator',
      answer: 'The pipe operator is used in RxJS to chain multiple operators together in a readable and functional manner.'
    },
    {
      question: 'What is distinctUntilChanged operator',
      answer: 'distinctUntilChanged is an RxJS operator that only emits values when the current value is different from the last emitted value.'
    },
    {
      question: 'What is filter operator in RxJs',
      answer: 'The filter operator in RxJS is used to filter the emitted values based on a provided condition or predicate.'
    }
  ];
}
