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
  
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    label: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
    this.addToContact(this.profileForm.value);
  }

  addToContact(member) {
    member.dob = new Date()
    window.alert('Your member has been added to the cart!');
    this.contactService.addToContact(member);
  }

  ngOnInit() {
  }

}
