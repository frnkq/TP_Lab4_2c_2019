import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {

  //arithmetics
  nA: number = null;
  nB: number = null;
  operator: string;
  operators = ["+", "-"];
  operationString: string;
  result: number = null;

  //captcha settings
  reverse: boolean = true;
  withNoise: boolean = true;

  userGuess: string;
  tries: number = 0;
  captchaDisabled: boolean = false;
  solved: boolean = false;

  onCorrectCaptcha: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    this.GenerateCaptcha();
  }

  ngOnInit() {
    this.Render();
  }

  GenerateCaptcha() {
    this.GenerateRandomNumbers();
    this.GetOperator();
    this.result = this.Resolve(this.operator, this.nA, this.nB, this.reverse);
    console.log(this.result);
    this.BiggerNumberFirst();
  }

  NewCaptcha()
  {
    this.GenerateCaptcha();
    this.Render();
  }

  CheckUserGuess()
  {
    if(this.tries == 3) this.DisableCaptcha(true);
    this.tries++;
    if(this.userGuess && Number.parseInt(this.userGuess) == this.result)
    {
      this.onCorrectCaptcha.emit();
      let captcha = document.getElementById('image');
      captcha.style.border = "3px solid lightgreen";
      this.solved = true;
    }
    else
    {
      let captcha = document.getElementById('image');
      captcha.style.border = "3px solid red";
        this.userGuess = null;
      this.DisableCaptcha();
    }
  }

  DisableCaptcha(longer?:boolean)
  {
    let timeLeft = longer? 10 : 3;
    this.captchaDisabled = true;

    let interval = setInterval(()=>{
      timeLeft--;
      console.log("disabling", timeLeft, longer);
      if(timeLeft <= 0)
      {
        this.captchaDisabled = false;
        document.getElementById('image').style.border= "1px solid black";
        clearInterval(interval);
      }
    }, 1000);
  }
  /**Arithmetics  */

  Resolve(operator: string, nA: number, nB: number, reverse?): number {
    switch (operator) {
      case "+":
        return reverse ? nA - nB : nA + nB;;
      case "-":
        return reverse ? nA + nB : nA - nB;
      default:
        return 0;
    }
  }

  BiggerNumberFirst() {
    if (this.nB > this.nA) {
      let aux = this.nA;
      this.nA = this.nB;
      this.nB = aux;
    }
  }

  GenerateRandomNumbers() {
    this.nA = Math.floor(Math.random() * 10);
    this.nB = Math.floor(Math.random() * 10);
  }

  GetOperator()
  {
    this.operator = this.operators[(Math.floor(Math.random() * 2))];
    this.operationString = this.nA + this.operator + this.nB;
  }
  /**Canvas */

  Render() {
    let canvas = document.getElementById('textCanvas');
    let tCtx = (document.getElementById('textCanvas') as any).getContext('2d');
    this.ClearCanvas(tCtx, canvas);
    this.DrawTextInCanvas(canvas, tCtx);
    if(this.withNoise) this.DrawNoiseOnCanvas(tCtx, canvas);
    this.CanvasToImage(tCtx);
  }

  CanvasToImage(tCtx) {
    let imageElem = (document.getElementById('image') as any);
    imageElem.src = tCtx.canvas.toDataURL();
    imageElem.style = "border:2px solid black;height:120px;width:120px;";
  }

  DrawTextInCanvas(canvas, tCtx) {
    tCtx.font = canvas.width / 4 + "pt Calibri";
    tCtx.fillStyle = "rgba(0,0,0,1)";
    tCtx.fillText(this.operationString + "=", 10, 70);
  }

  DrawNoiseOnCanvas(tCtx, canvas) {
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let opacity = .5;
    let number;
    for (x = 0; x < canvas.width; x++) {
      for (y = 0; y < canvas.height; y++) {
        number = Math.floor(Math.random() * 200);
        tCtx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
        tCtx.fillRect(x, y, 1.2, 1.2);
      }
    }
  }

  ClearCanvas(tCtx, canvas)
  {
    tCtx.clearRect(0, 0, canvas.width, canvas.height)
  }

}
