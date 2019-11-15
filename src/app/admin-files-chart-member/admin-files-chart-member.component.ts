import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Member } from '../member';

@Component({
  selector: 'app-admin-files-chart-member',
  templateUrl: './admin-files-chart-member.component.html',
  styleUrls: ['./admin-files-chart-member.component.css']
})
export class AdminFilesChartMemberComponent implements OnInit {
  @Input() member : Member;
  @Input() show : boolean;
  
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    label: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
