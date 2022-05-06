import { Component, OnInit } from '@angular/core';
//import { stringify } from 'querystring';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromService:string = "";
  images:any;// ["https://www.toucanbox.com/facts-for-kids/elephant-facts-pics/african-elephant.jpg", 
  //"https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/MA_00077427_yjtgnj.jpg"]

  //httpData:any;

  constructor(private imageService:ImageService) { }

  ngOnInit() {
    this.images = []
    //console.log(this.route.snapshot.params['name'])
  }

  // getWelcomeMessage(){
  //   this.service.executeHelloWorldBeanService(this.name).subscribe(
  //     response => this.handleSuccessfulResponse(response),
  //     error => this.handleErrorResponse(error)
  //   );
  // }

  // handleSuccessfulResponse(response){
  //   this.welcomeMessageFromService = response.message;
  // }

  // handleErrorResponse(error){
  //   this.welcomeMessageFromService = error.error.message
  // }

  applyFilter(val: string){
    this.imageService.getImage(val).subscribe(response => {
      this.images = response;
      //this.images = this.httpData['image_url'];
      }
    );
  }
}
