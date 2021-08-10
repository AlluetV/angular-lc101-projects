import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

    handleTakeOff() {
      let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
      if (result) {
        this.color = 'blue';
        this.height = 10000;
        this.width = 0;
        this.message = 'Shuttle in flight.';
        this.takeOffEnabled = false;
      }
    }

    handleLand() {
      let result = window.confirm('The shuttle is landing. Landing gear engaged');
      if (result) {
         this.color = 'green';
         this.height = 0;
         this.width = 0;
         this.message = 'The shuttle has landed.';
         this.takeOffEnabled = true;
      }
   }

   handleAbortMission() {
    let result = window.confirm('Do you want to abort the mission?');
      if (result) {
        this.color = 'red';
        this.height = 0;
        this.width = 0;
        this.message = 'Mission aborted';
        this.takeOffEnabled = true;
      }
    }

    moveRocket(rocketImage, direction) {
      if (direction === 'right') {
         let movement = parseInt(rocketImage.style.left) + 10 + 'px';
         rocketImage.style.left = movement;
         this.width = this.width + 10;
      }

      if (direction === 'left') {
        let movement = parseInt(rocketImage.style.left) - 10 + 'px';
        rocketImage.style.left = movement;
        this.width = this.width - 10;
     }

     if (direction === 'up') {
        let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
        rocketImage.style.bottom = movement;
        this.height = this.height + 10;
      }

      if (direction === 'down') {
        let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
        rocketImage.style.bottom = movement;
        this.height = this.height - 10;
      }

      if(this.width >= 450 || this.width <= 0 || this.height <= 10010 || this.height >= 10330){
        this.color= 'orange';
      }else{
        this.color = 'blue';
      }
        
   }

}


