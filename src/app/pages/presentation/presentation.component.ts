import { Component } from '@angular/core';
import { projects } from './data';
import { HttpClient } from '@angular/common/http';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  projects = projects
  form = this.fb.group({
    from_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  enviarEmail() {
    if (this.form.valid) {

      const templateParams = {
        from_name: this.form.get('from_name')?.value,
        message: this.form.get('email')?.value,
        subject: this.form.get('subject')?.value,
        email: this.form.get('message')?.value

      }
      emailjs.send("service_vl2iekm", "template_uw229xi", templateParams, "r3ocscHRk4fkhLflj").then(() => {
        console.log("email enviado");
        this.form.reset();
      })
    }

  }
}

