## 3D Rotation Animation Effe

참고사이트 : [Online Tutorials](https://www.youtube.com/watch?v=bqL4FqihRQg&list=PLMt6uTaCmO156iTJeeDEFTfMrJ55qT5Vq&index=16&t=171s)

<br/>

### Awesome

HTML과 CSS로 물체르 3D로 느껴지게 처음 작업 해보았는데, 각 기능에 대한 설명을 이해가 되지만, 어떤 부분에 이 기능을 넣어야 정확하게 동작하는건지는 다른 프로젝트를 진행하며 조금 더 느껴봐야겠다.

<br/>

### `perspective: `

perspective : 투영점

보고 있는 사람의 위치를 추정하여 투영점을 명시한다. >> 물체로 부터 z축만큼 떨어진 거리를 의미하는것 같다.

3D효과를 위한 가장 중요한 설정은 투영점(perspective)를 지정하는 것 이다.

<br/>

### `과정`

1. 코드를 보면 .box라는 div를 3d관점으로 느껴지게 `transform-style: preserve-3d;`를 설정해주었다.

2. 이후 원근감을 위해서 `perspective: 1000px`로 하여금 z축으로부터 1000px만큼 떨어져서 사용자가 보게끔 설정해주었다.

3. 이후 4개의 평면(span)들을 감싸고 있는 div 또한 3d관점으로 느껴지게 `transform-style: preserve-3d`를 설정하였다.

4. 4개의 평면(span태그)들은 각각 x축으로 +45도씩 회전시키며 위치를 잡아주었다.

5. 이후 이 물체를 y축으로 틀어서 보기위해 .box라는 div에서 `transform: rotateY(-45deg)`를 설정하여 입체적으로 보이게 만들어 주었다.

6. 이후 회전시키는 애니매이션을 만들기 위해 x축으로 회전하는 animation효과를 넣어 주었다.
