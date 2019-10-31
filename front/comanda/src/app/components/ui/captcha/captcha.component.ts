import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
  disabledTimeLeft: number = 0;
  captchaDisabled: boolean = false;
  solved: boolean = false;

  @Output() onCorrectCaptcha: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    this.GenerateCaptcha();
  }

  ngOnInit() {
    this.Render();
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

  GenerateCaptcha() {
    this.GenerateRandomNumbers();
    this.GetOperator();
    this.result = this.Resolve(this.operator, this.nA, this.nB, this.reverse);
    console.log(this.result);
    this.BiggerNumberFirst();
  }


  Render() {
    let canvas = document.getElementById('textCanvas');
    let tCtx = (document.getElementById('textCanvas') as any).getContext('2d');
    this.ClearCanvas(tCtx, canvas);
    this.DrawTextInCanvas(canvas, tCtx);
    if(this.withNoise) this.DrawNoiseOnCanvas(tCtx, canvas);
    this.CanvasToImage(tCtx);
  }

  NewCaptcha()
  {
    this.GenerateCaptcha();
    this.Render();
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

  CheckUserGuess()
  {
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
        this.userGuess = null;

        let multiplyTimeBy = null;
        if(this.tries >= 3)
          multiplyTimeBy = 2;

        this.DisableInput(3, this.DisableCaptcha, this.ReenableCaptcha, multiplyTimeBy);
    }
  }
  ReenableCaptcha()
  {
        this.captchaDisabled = false;
        console.log("reenabling....");
        document.getElementById('image').style.border= "1px solid black";

  }
  DisableCaptcha()
  {
      
      let captcha = document.getElementById('image');
      captcha.style.border = "3px solid red";
      this.NewCaptcha();
  }
  DisableInput(time: number, onDisabled:()=>void, onReenabled:()=>void, multiplyTimeBy?:number)
  {
    this.disabledTimeLeft = multiplyTimeBy? time * multiplyTimeBy : time;
    console.log("before", this.disabledTimeLeft);
    if(multiplyTimeBy)
      console.log("multiplying time", this.disabledTimeLeft); 

    this.captchaDisabled = true;
    onDisabled.bind(this/*el*/)();
    console.log("after disablign", this.disabledTimeLeft);

    let interval = setInterval(()=>{
      this.disabledTimeLeft--;
      if(this.disabledTimeLeft <= 0)
      {
        onReenabled.bind(this/*el*/)();
        this.disabledTimeLeft = 0;
        clearInterval(interval);
      }
      console.log("inside interval", this.disabledTimeLeft);
    }, 1000);
  }


  ClearCanvas(tCtx, canvas)
  {
    tCtx.clearRect(0, 0, canvas.width, canvas.height)
  }

}
