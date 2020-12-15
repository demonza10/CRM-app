import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuList = [
    {
      "name": "Detail",
      "icon": '../../assets/icon/icon_menu/deals.svg'
    },
    {
      "name": "Contract",
      "icon": '../../assets/icon/icon_menu/contacts.svg'
    },
    {
      'name': 'Companies',
      'icon': '../../assets/icon/icon_menu/companies.svg'
    },
    {
      'name': 'Product',
      'icon': '../../assets/icon/icon_menu/products.svg'
    },
    {
      'name': 'Activity',
      'icon': '../../assets/icon/icon_menu/activities.svg'
    },
    {
      "name": "Dashboards",
      "icon": "../../assets/icon/icon_menu/dashboards.svg"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
