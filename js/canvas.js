export class Canvas{
    
    constructor(_canvasSize, _cellMargin, _squareMargin, _cellSize){
        this.canvasSize = _canvasSize;
        this.cellMargin = _cellMargin; 
        this.squareMargin = _squareMargin;
        this.cellSize = _cellSize;
        this.#generateCanvas();
    }
    
    #generateCanvas(){
        this.gameBoard.style.width = this.canvasSize + "px";
        this.gameBoard.style.height = this.canvasSize + "px";
        //gameBoard.style.left = "calc(50% - " + canvasSize/2 + "px)";
    }

    canvasSize = 400;
    cellMargin = 3;
    squareMargin = 4;
    cellSize = (this.canvasSize / 9) - (this.cellMargin);
    gameBoard = document.getElementById("game-board");
}