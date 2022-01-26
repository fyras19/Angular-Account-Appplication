import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  id?: number;
  account: Account = new Account();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.account = new Account();

    this.id = this.route.snapshot.params['id'];


    this.accountService.getAccount(this.id!)
      .subscribe(data => {
        console.log(data);
        this.account = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['accounts']);
  }

}
