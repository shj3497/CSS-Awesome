## Magnetic Button

참고사이트 : [Coding Snow](https://www.youtube.com/watch?v=f7PgUPNKMkI&t=26s)
<br/>

### Awesome

0. `⭐⭐⭐⭐⭐`  
   document.querySelectorAll('')로 받아온 배열은 진짜 배열이 아니다!  
   그래서 map함수는 작동하지 않는다.  
   이를 사용하기 위해서는 유사배열을 진짜 배열로 바꿔주어야 하는데  
   Array.from(btns)을 사용하여 진짜 배열로 바꿔줘서 자바스크립트의 배열에서 사용할 수 있는 함수들을 사용해주면 된다.

```javascript
const btns = document.querySelectorAll(".btn");

// Uncaught TypeError: btns.map is not a function
btns.map((item) => console.log(item));

Array.from(btns).map((item) => console.log(item));
```

1. mousemove, mouseout이라는 이벤트를 가지고 transform하여 동작시켰다.

```javascript
addEventListener("mousemove", () => {});
addEventListener("mouseout", () => {});
```

2. e.pageX, e.payeY  
   문서의 왼쪽 상단을 기준으로 마우스 좌표값들

3. getBoundingClientRect()  
   해당 버튼의 위치값을 계산한다.

4. 좌표값 계산

```javascript
// position.left, top, width, height 는 고정된 값이다.
const x = e.pageX - position.left - position.width / 2;
const y = e.pageY - position.top - position.height / 2;
```

### 이벤트 처리

```javascript
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const position = btn.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;
    console.log(position.left); // 324
    console.log(position.width); // 310
    btn.children[0].style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
  });
});

btns.forEach((btn) => {
  btn.addEventListener("mouseout", (e) => {
    btn.children[0].style.transform = `translate(0px, 0px)`;
  });
});
```
