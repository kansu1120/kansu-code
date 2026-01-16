<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Kansu Code</title>
  <!-- iPhoneで最初から小さめ表示、拡大禁止 -->
  <meta name="viewport" content="width=device-width, initial-scale=0.7, user-scalable=no">
  <style>
    body {
      margin: 10px;
      font-family: monospace;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 100vh;       /* 画面全体に固定 */
      overflow: hidden;     /* スクロール禁止 */
    }

    /* エディタ */
    #editor {
      width: 100%;          
      height: 160px;       
      font-size: 16px;     
      padding: 8px;
      box-sizing: border-box;
      margin-bottom: 8px;  
    }

    /* toolbar */
    #toolbar {
      position: absolute;  
      top: 170px;          
      left: 0;             /* 左端から */
      right: 0;            /* 右端まで */
      display: flex;
      flex-wrap: wrap;      /* 折り返し可能 */
      justify-content: flex-start; /* 左寄せ */
      background: #f9f9f9;
      border: 1px solid #ccc;
      z-index: 1000;
      padding: 4px;        /* ボタン同士の隙間 */
    }

    #toolbar button {
      font-size: 16px;      
      padding: 9px 13px;    
      margin: 2px;
      flex: none;           /* 横幅自動伸縮を防ぐ */
    }

    /* コピー用ボタンを少し目立たせる */
    #toolbar button#copy {
      background-color: #d0f0ff;
    }
  </style>
</head>
<body>

<textarea id="editor"></textarea>

<div id="toolbar">
  <button>()</button>
  <button>{}</button>
  <button>[]</button>
  <button>+</button>
  <button>-</button>
  <button>*</button>
  <button>/</button>
  <button>&lt;</button>
  <button>&gt;</button>
  <button>=</button>
  <button id="left">←</button>
  <button id="right">→</button>
  <button id="copy">コピー</button>
</div>

<script src="script.js" defer></script>

</body>
</html>
