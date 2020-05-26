import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submenuopen(){
      if(document.getElementById("submenuid").style.display=="none")
        document.getElementById("submenuid").style.display="block";
      else
        document.getElementById("submenuid").style.display="none";
  }
  submenuoff(){
    window.addEventListener("click",function(e){
     if(document.getElementById("eventheaderid")!=(e.target)){
        if(document.getElementById("submenuid").style.display=="block")
          document.getElementById("submenuid").style.display="none";
      }
    });
  }
}
var obj=new HeaderComponent();
obj.submenuoff();
