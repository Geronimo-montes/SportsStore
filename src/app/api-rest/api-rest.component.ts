import { Component, OnInit } from "@angular/core";
import { ApiRestService } from "./api-rest.service";
import { UserModel, PruebaModel } from "./user.model";

@Component({
  selector: 'api',
  templateUrl: 'api-rest.component.html',
})
export class ApiRestComponet implements OnInit{
  constructor(public apiRestService: ApiRestService) {}

  ngOnInit() {
    this.apiRestService.getPrueba().subscribe(data => {
      this.prueba = data;
    });

    this.apiRestService.getUsers().subscribe(data => {
      this.users = data['data'];
    })
  }

  r(): void{
    console.log(this.prueba);
  }
  public users: UserModel[] = [];
  public prueba: PruebaModel[] = [];
}