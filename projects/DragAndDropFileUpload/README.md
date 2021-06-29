# Drag & Drop File Upload

### Awesome

drag event에 대해서도 처음 알아보았고, FileReader()라는 API도 처음 사용해보았다.

처음 접하는 만큼 많이 생소했으나 영상과 함께 공식문서를 찾아보면서 필요한 함수 기능에 대해 정리해보았다.

[index.js](./index.js)의 62라인!

<br/>

### `Drag event`

[공식문서 : MDN](https://developer.mozilla.org/ko/docs/Web/API/Document/drag_event)

```javascript
// 드래그 가능한 대상에서 이벤트 발생
document.addEventListener("drag", () => {});

// 드롭 대상에서 이벤트 발생
document.addEventListener("dragover", (event) => {
  event.preventDefault();
});

// 드롭하려던 대상으로부터 벗어났을 때 이벤트 발생
document.addEventListener("dragleave", (event) => {
  event.preventDefault();
});

// 드롭이 발생 했을 때 이벤트 발생
document.addEventListener("drop", (event) => {
  event.preventDefault();
});
```

<br/>

### `FileReader()`

```javascript
let reader = new FileReader();

// 파일의 내용을 반환한다.
reader.result;

// 읽기 동작이 성공적으로 완료 되었을 때 발생한다.
reader.onload = () => {};

// 읽기 동작에 에러가 생길 때 마다 발생한다.
reader.onerror = () => {};

// 읽기 동작이 중단될 때 발생한다.
reader.onabort = () => {};

// 바이너리 파일을 Base64 Encode 문자열로 반환한다.
reader.readAsDataURL(data);
// data: image/jpg, image/png ...

// 텍스트 파일을 읽는다.
reader.readAsText(data);
```

<br/>

### `input[type="file"]`

파일을 읽기 위해서는 change라는 이벤트를 통해 발생시킨다.

```javascript
const input = document.querySelector("input");
input.addEventListener("change", () => {
  const file = input.files[0];
});
```
