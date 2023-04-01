import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { UserNameService } from '../user-name.services';
import { startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-hello-input',
  templateUrl: './hello-input.component.html',
  styleUrls: ['./hello-input.component.css'],
})
export class HelloInputComponent {
  public subscription_user_name$: Observable<string>;

  constructor(private _userNameService: UserNameService) {
    this.subscription_user_name$ = this._userNameService.execChange.pipe(
      startWith('Angular 8')
    );
  }
  @Input() name: string | undefined;
}
