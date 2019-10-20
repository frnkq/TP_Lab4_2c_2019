import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {

  customCaptcha: boolean = true;
  nA: number = null;
  nB: number = null;
  operator: string;
  operators = ["+", "-"];
  operation: string;
  constructor() { 
    this.nA = Math.floor(Math.random() * 10);
    this.nB = Math.floor(Math.random() * 10);
    this.operator = this.operators[(Math.floor(Math.random() * 2))];
    this.operation = this.nA+this.operator+this.nB;
  }

  ngOnInit() {
    this.Render();
  }

  Render() {
    console.log({original: this.operation, b64: btoa(this.operation)});

    document.getElementById("captcha").setAttribute("src", "data:image/png;base64,"+btoa(this.operation));
    // html2canvas(document.getElementById("captchaText"), {
    //   onrendered: function (canvas) {
    //     var screenshot = canvas.toDataURL("image/png");
    //     document.getElementById("captcha").setAttribute("src", screenshot);
    //   }
    // });

  }

}
