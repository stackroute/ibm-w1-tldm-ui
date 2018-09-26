import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../service/channel.service';
import { User } from '../model/user';
import { CommunityService } from '../service/community.service';
import { Channel } from '../model/channel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channeldialog',
  templateUrl: './channeldialog.component.html',
  styleUrls: ['./channeldialog.component.css']
})
export class ChanneldialogComponent implements OnInit {

  channel: Channel;
  users: User[];
  channelUser1: User[] = [];
  channelUsers: User[] = [];
  // communityUserLength: number;
  // channelUserLength: number;
  // notChannelUsers: User[] = [];
  // flag = false;
  // i = 0;
  // j = 0;

  constructor(private channelService: ChannelService, private communityService: CommunityService, private router: Router) { }

  ngOnInit() {
    this.communityService.getAllCommunityUsers().subscribe((data: User[]) => {
      this.users = data;
    });

    this.channelService.getChannelUsersByChannelName(this.channelService.channel.channelName).subscribe((data: User[]) => {
      this.channelUser1 = data;
      console.log(this.channelUser1)
    });


  }

  addChannelUsers(user: User) {
    this.channelUsers.push(user);
    console.log(user);
  }
   
  // channelUpdate() {
  //   this.communityUserLength = this.users.length;
  //   this.channelUserLength = this.channelUser1.length;

  //   while (this.i < this.channelUserLength) {
  //     while (this.j < this.communityUserLength) {
  //       if ((this.channelUser1[this.i].userId == this.users[this.j].userId)) {
  //         this.flag = true;
  //       }
  //       this.j = this.j + 1;

  //     }

  //     if (this.flag == false) {

  //       this.notChannelUsers.push(this.channelUsers[this.i]);
  //       console.log(this.notChannelUsers);
  //     }

  //     this.i = this.i + 1;
  //   }
  //   this.channelService.updateChannel(this.channelService.channel.channelId, this.channelUsers).subscribe((data) => {
  //     console.log(this.channel = data);
  //   });
  // }

  channelUpdate() {
    this.channelService.updateChannel(this.channelService.channel.channelId, this.channelUsers).subscribe((data) => {
      this.channel = data;
      console.log(this.channel);
     
    });
    
  

  }
  
 
} this.router.navigateByUrl('/dashboard');