document.addEventListener("DOMContentLoaded", () => {
  const editor = document.getElementById("editor");
  const buttons = document.querySelectorAll("#toolbar button");

  // ----- ボタン入力機能 -----
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const text = btn.textContent;
      const start = editor.selectionStart;
      const end = editor.selectionEnd;

      // カーソル移動ボタン
      if (btn.id === "left") {
        editor.setSelectionRange(start - 1, start - 1);
        editor.focus();
        return;
      }

      if (btn.id === "right") {
        editor.setSelectionRange(start + 1, start + 1);
        editor.focus();
        return;
      }

      // 文字挿入
      editor.value =
        editor.value.slice(0, start) +
        text +
        editor.value.slice(end);

      editor.setSelectionRange(start + text.length, start + text.length);
      editor.focus();
    });
  });

  // ----- Enter + スニペット + 自動インデント -----
  editor.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const start = editor.selectionStart;
      const end = editor.selectionEnd;

      const lines = editor.value.slice(0, start).split("\n");
      const currentLine = lines[lines.length - 1].trim();

      // スニペット辞書
      const snippets = {
        "for": "for (int i = 0; i < n; i++) {\n    ",
        "if": "if (condition) {\n    "
      };

      // スニペット判定
      if (snippets[currentLine]) {
        e.preventDefault();
        const before = editor.value.slice(0, start - currentLine.length);
        const after = editor.value.slice(end);

        editor.value = before + snippets[currentLine] + after;
        editor.setSelectionRange(
          before.length + snippets[currentLine].length,
          before.length + snippets[currentLine].length
        );
        return;
      }

      // 通常のインデント（スペース4個）
      e.preventDefault();
      const indent = "    ";
      editor.value =
        editor.value.slice(0, start) + "\n" + indent + editor.value.slice(end);
      editor.setSelectionRange(
        start + 1 + indent.length,
        start + 1 + indent.length
      );
    }
  });
});