# Building Dynamic Forms in Angular

**Summary:** This file covers topics related to "Building Dynamic Forms in Angular". Key snippets include: Implementing DropdownQuestion Control in Angular, Creating QuestionControlService for Dynamic Forms in Angular, Implementing DynamicFormComponent in Angular, Implementing QuestionService for Dynamic Forms in Angular, Implementing DynamicFormQuestionComponent in Angular.

---

## Implementing DropdownQuestion Control in Angular

**Description:** This code defines a DropdownQuestion class that extends QuestionBase to represent a dropdown select control in a dynamic form.

```TypeScript
import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}

```

---

## Creating QuestionControlService for Dynamic Forms in Angular

**Description:** This service creates FormGroup instances for dynamic forms based on the question model, specifying default values and validation rules.

```TypeScript
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}

```

---

## Implementing DynamicFormComponent in Angular

**Description:** This component serves as the main container for the dynamic form, presenting a list of questions and handling form submission.

```TypeScript
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}

```

```HTML
<form (ngSubmit)="onSubmit()" [formGroup]="form">

  <div *ngFor="let question of questions" class="form-row">
    <app-question [question]="question" [form]="form"></app-question>
  </div>

  <div class="form-row">
    <button type="submit" [disabled]="!form.valid">Save</button>
  </div>
</form>

<div *ngIf="payLoad" class="form-row">
  <strong>Saved the following values</strong><br>{{payLoad}}
</div>

```

---

## Implementing QuestionService for Dynamic Forms in Angular

**Description:** This service provides a set of questions for the dynamic form. In a real application, this might fetch data from a backend system.

```TypeScript
import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}

```

---

## Implementing DynamicFormQuestionComponent in Angular

**Description:** This component is responsible for rendering individual questions in a dynamic form based on the question model.

```TypeScript
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}

```

```HTML
<div [formGroup]="form">
  <label [attr.for]="question.key">{{question.label}}</label>

  <div [ngSwitch]="question.controlType">

    <input *ngSwitchCase="'textbox'" [formControlName]="question.key"
            [id]="question.key" [type]="question.type">

    <select [id]="question.key" *ngSwitchCase="'dropdown'" [formControlName]="question.key">
      <option *ngFor="let opt of question.options" [value]="opt.key">{{opt.value}}</option>
    </select>

  </div>

  <div class="errorMessage" *ngIf="!isValid">{{question.label}} is required</div>
</div>

```

---