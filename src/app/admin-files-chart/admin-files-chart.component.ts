import { Component, OnInit } from '@angular/core';
import { SourceType, originSource } from './mock-data.js';
import { Member } from '../member';
import { ContactService } from '../contact.services';

@Component({
  selector: 'app-admin-files-chart',
  templateUrl: './admin-files-chart.component.html',
  styleUrls: ['./admin-files-chart.component.css']
})
export class AdminFilesChartComponent implements OnInit {
  members;
  member: Member = {
    id: 1,
    firstName: '',
    lastName: '',
    label: '',
    enterprise: '',
    character: '',
    accounts: '',
    ban:'',
  }
  showMemberEditor = false
  

  //basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  dataTableOptions = {
    columns: [
        {
            field: 'firstName',
            header: '用户名称',
            fieldType: 'text'
        },
        {
            field: 'lastName',
            header: '昵称',
            fieldType: 'text'
        },
        {
            field: 'label',
            header: '用户标签',
            fieldType: 'text'
        },
        {
            field: 'enterprise',
            header: '企业用户',
            fieldType: 'date'
        },
        {
          field: 'character',
          header: '项目角色',
          fieldType: 'text'
        },
        {
          field: 'accounts',
          header: '账号体系',
          fieldType: 'text'
        },
        {
          field: 'ban',
          header: '是否禁用',
          fieldType: 'text'
        }
    ]
  };

  pager1 = {
    total: 100,
    pageIndex: 1,
    pageSize: 10
  };

  constructor(
    private contactService: ContactService
  ) {
    this.members = this.contactService.getMembers();
  }

  getBasicDataSource() {
    return JSON.parse(JSON.stringify(this.members));
  }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    originSource.slice(0, 6).map(member => {
      this.contactService.addToContact(member)
    })
  }
  
  onSearch(term) {
    console.log(term);
  }

  setTotal(number) {
    this.pager1.total = number;
  }

  setIndex(number: number) {
    this.pager1.pageIndex = number;
    console.log(this.pager1.pageIndex);
  }

  addMember() {
    this.showMemberEditor = true
  }

  onMemberSubmit() {
    this.hideMemberEditor()
  }

  onMemberCancel() {
    this.hideMemberEditor()
  }

  hideMemberEditor() {
    this.showMemberEditor = false
  }

}
