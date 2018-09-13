import { Component } from '@angular/core';
import { GitHubService } from './github.service';
import { filter, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  styleUrls: ['./github.component.css'],
  templateUrl: './github.component.html',
  providers: [GitHubService]
})

export class GitHubComponent {
  searchControl: FormControl = new FormControl();

  isLoading = false;

  users = [];

  constructor(private _githubService: GitHubService) { }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.

    this.searchControl.valueChanges
      .pipe(filter(text => text.length >= 3),
    debounceTime(400), distinctUntilChanged())
      .subscribe(value => {
        this.isLoading = true;
        this._githubService.getGitHubData(value)
          .subscribe(data => {
          this.isLoading = false;
          this.users = data.items;
          console.log(this.users);
      });
    });
  }

}
