import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isFormLoading: boolean = false;
  subjectOptions = [
    { text: 'Hire Developers', value: 'COMPANIES' },
    { text: 'Developers Support', value: 'DEVELOERS' },
    { text: 'Partnerships', value: 'PARTNERSHIPS' },
    { text: 'General Query', value: 'GENERAL' },
    { text: 'Others', value: 'OTHERS' },
  ];
  contactFormGroup: FormGroup;

  constructor(
    private readonly http: HttpClient,
    private readonly formBuilder: FormBuilder
  ) {
    this.contactFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      sendEmailCopy: [true, Validators.required],
    });
  }

  submitConatctForm() {
    this.contactFormGroup.markAllAsTouched();
    console.log({ ...this.contactFormGroup.value });
    if (this.contactFormGroup.valid) {
      console.log('Form is valid');
    }
  }
}
