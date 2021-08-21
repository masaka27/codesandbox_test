import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  console.log(inputText);

  // div生成
  const div = document.createElement("div");
  div.className = "row";
  const li = document.createElement("li");
  li.innerText = inputText;

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });
  //  削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // alert("削除");
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    // console.log(deleteTarget);
    document.getElementById("list-a").removeChild(deleteTarget);
  });

  // ulタグの子要素に各要素を追加
  const ul_a = document.getElementById("list-a");
  ul_a.appendChild(li);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
};

document.getElementById("add-btn").addEventListener("click", () => {
  onClickAdd();
});
