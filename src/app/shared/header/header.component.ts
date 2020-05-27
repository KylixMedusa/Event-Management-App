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
  headerchange(){
    window.addEventListener('scroll',function(e){
      var pos=this.window.scrollY;
      var heights = this.window.innerHeight;
      var widths = this.window.innerWidth;
      var changeheight=heights-80;
      if(widths>=800)
      {
        if(pos>=changeheight)
        {
          this.document.getElementById("wrap").classList.add("change");
        }
        else
        {
          this.document.getElementById("wrap").classList.remove("change");
        }
      }
      })
  }
}
var obj=new HeaderComponent();
obj.submenuoff();
obj.headerchange();
