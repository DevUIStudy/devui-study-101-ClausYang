import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Member } from '../member';
import { Output, EventEmitter } from '@angular/core';
import { ContactService } from '../contact.services';

@Component({
  selector: 'app-admin-files-chart-member',
  templateUrl: './admin-files-chart-member.component.html',
  styleUrls: ['./admin-files-chart-member.component.css']
})
export class AdminFilesChartMemberComponent implements OnInit {
  @Input() member : Member;
  @Input() show : boolean;
  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
  }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    label: new FormControl(''),
  });

  onSubmit() {
    this.addToContact(this.profileForm.value);
  }

  addToContact(profileForm) {
    if (profileForm.profileForm === '' || profileForm.lastName === '')
      return
    let member = this.member
    member.id = member.id ? member.id : this.contactService.getMembers().length + 1
    member.firstName = profileForm.firstName
    member.lastName = profileForm.lastName
    member.label = profileForm.lable
    console.log(member.id)
    member.id = this.contactService.getMembers().length + 1
  
   
    this.contactService.addToContact(member);
  }

}
