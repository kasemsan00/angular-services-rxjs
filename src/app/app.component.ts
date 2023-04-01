import { Component, OnDestroy } from '@angular/core';
import { UserNameService } from './user-name.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  public userName = 'Angular 8';
  private _subscription_user_name$: any;

  constructor(private _userNameService: UserNameService) {
    this._subscription_user_name$ = this._userNameService.execChange.subscribe(
      (value) => {
        this.userName = value;
      }
    );
  }
  changeUserName(name: string): void {
    this._userNameService.userNameChange(name);
  }
  ngOnDestroy(): void {
    this._subscription_user_name$.unsubscribe();
  }
}
