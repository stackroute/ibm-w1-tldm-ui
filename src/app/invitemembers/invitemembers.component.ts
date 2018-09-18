import { Component, OnInit } from '@angular/core';
import { Community } from '../community';
import { CommunityService } from '../community.service';
import { User } from '../user';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';





export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-invitemembers',
  templateUrl: './invitemembers.component.html',
  styleUrls: ['./invitemembers.component.css']
})





export class InvitemembersComponent implements OnInit {

  community: Community;
  user: User;
  constructor(private communityService: CommunityService) {
    this.community = new Community();
    this.user = new User();
  }

  ngOnInit() {
  }


  emailPhoneNumberFormControl = new FormControl('', [
    Validators.required,
  ])

  addUser(userMail: string) {

    return this.communityService.inviteUsers(userMail).subscribe();
  }

}
