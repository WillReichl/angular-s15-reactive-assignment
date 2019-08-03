import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenProjectNames = ['Test'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        this.validateProjectNames.bind(this)
      ])
    });
  }

  onSubmit() {

  }

  validateProjectNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      if (control.value === 'Test') {
        resolve({ projectNameForbidden: true});
      } else {
        resolve(null);
      }
    });
    return promise;
  }
}
