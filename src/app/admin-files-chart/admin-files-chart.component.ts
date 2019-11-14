import { Component, OnInit } from '@angular/core';
import { SourceType, originSource } from './mock-data.js';
@Component({
  selector: 'app-admin-files-chart',
  templateUrl: './admin-files-chart.component.html',
  styleUrls: ['./admin-files-chart.component.css']
})
export class AdminFilesChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSearch(term) {
    console.log(term);
  }

  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
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
}
