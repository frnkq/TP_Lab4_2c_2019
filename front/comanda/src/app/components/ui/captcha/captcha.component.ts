import { Component, OnInit } from '@angular/core';
import { createContext } from 'vm';
import { CompileShallowModuleMetadata } from '@angular/compiler';

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
  reverse: boolean = null;
  withNoise: boolean = true;

  constructor() {
    this.GenerateCaptcha();

    this.result = this.Resolve(this.operator, this.nA, this.nB, this.reverse);
    console.log(this.result);
  }

  ngOnInit() {
    this.Render();
  }

  GenerateCaptcha() {
    this.GenerateRandomNumbers();
    this.BiggerNumberFirst();
    this.GetOperator();
  }

  NewCaptcha()
  {
    this.GenerateCaptcha();
    this.Render();
  }


  /**Arithmetics  */

  Resolve(operator: string, nA: number, nB: number, reverse?): int {
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
    let tCtx = document.getElementById('textCanvas').getContext('2d');
    this.ClearCanvas(tCtx, canvas);
    this.DrawTextInCanvas(canvas, tCtx);
    if(this.withNoise) this.DrawNoiseOnCanvas(tCtx, canvas);
    this.CanvasToImage(tCtx);
  }

  CanvasToImage(tCtx) {
    let imageElem = document.getElementById('image');
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
