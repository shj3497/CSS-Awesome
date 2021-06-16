## AnimationEffects

참고사이트 : [Online Tutorials](https://www.youtube.com/watch?v=Xrx9v6DhzDo)

<br/>

### Awesome

처음 애니메이션을 보았을 때 두개의 원 사이에서 점을 움직여야한다 생각했다.  
하지만 점이 움직이는게 아니라 박스안에 멈춰있는 형태를 만들고 이 박스 전체를 회전시킴으로서 애니메이션을 구현한 걸 보고 충격..

<br/>

### `background: linear-gradient() `

[MDN : linear-gradient](<https://developer.mozilla.org/ko/docs/Web/CSS/linear-gradient()>)

linear-gradient() 함수는 두개 이상의 색이 직선을 따라 점진적으로 변화하는 이미지를 생성한다.

ex)

```CSS
*{
  background: linear-gradient(#e66465, #9198e5);
}
/*
default: 상단에서 하단으로 색이 점차 변화한다.
다른 사용법은 MDN사이트 참조
*/
```

<br/>

### `box-shadow`

[MDN : box-shadow](https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow)

box-shadow 속성은 거의 모든 요소의 테두리에서 그림자를 드리울 수 있도록 도와준다.

#### offset-x, offset-y

그림자의 위치를 설정하는 두개의 length값  
두 값이 모두 0이면 그림자가 요소 바로 뒤쪽에 위치하며, blur-radius or spread-radius가 존재하면 흐려지는 효과를 볼 수 있다.

#### blur-radius

크면 클수록 그림자 테두리가 흐려지므로 크기는 더 커지고, 색은 더 밝아진다.
더 밝아진다 == 흐릿해진다.

ex)

```CSS
/* offset-x | offset-y | color */
*{
  box-shadow: 60px -16px teal;
}

/* offset-x | offset-y | blur-radius | color */
*{
  box-shadow: 10px 5px 5px black;
}
```

<br/>

### `-webkit-box-reflect(Non-standard)`

[MDN : -webkit-box-reflect](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-box-reflect)

한개의 특정방향의 요소의 내용을 반영 할 수 있다.

#### values

반영 방향을 나타내는 키워드  
above, below, right, left

#### length

반사의 크기를 나타낸다.

#### image

반사에 적용 할 마스크를 설명

ex)

```CSS
/* values | length | image */
*{
  -webkit-box-reflect: below 1px linear-gradient(#0001, #0004);
}
```

<br/>

### `animation`

[MDN : animation](https://developer.mozilla.org/ko/docs/Web/CSS/animation)

다수의 스타일을 전환하는 애니메이션을 적용
