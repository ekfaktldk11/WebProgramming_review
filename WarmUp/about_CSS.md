# CSS
> CSS : Cascading Style Sheets

## What This Course Will Cover
1. Why they are a better way
  - CSS를 사용하여 styling 하는 이유. (CSS 장점)
2. The syntax
  - CSS coding
3. Development Tools
  - CSS tools
4. Accessibility Issues
  - 장애가 있는 사람들에게 접근성이 좋은 CSS 적용

- Cascading Style Sheet
  - Browser Default Styling
      - 같은 html file 이라도 브라우저에 따라 룩이 다를 수 있음
          1. 브라우저 마다 지원하지 않는 태그들도 있기에
          2. 브라우저 마다의 default styles 가 다 다르기에

  - Adding Style
      1. Add style directly into the tags
      ex. [h1 style = "color:blue"]Styled Heading[/h1]
      -> 하지만 이 방법은 'seperate content from style' 규약에 위배됨

      2. internal / .css file
        - internal : html 파일 내부의 head section에 styling
        - .css file : [head] section 에 [link rel="stylesheet" href="style.css"] <- 이거로 html 파일과 css 파일을 서로 링킹 해줘야함  
        ex. selector {
          property:value;
        }
        ex. h1{
          color:blue;
        }
  
  - "Cascading" Style Sheet? -> CSS 에서 Cascading(계단식, 폭포) 의 의미
    - 브라우저의 스타일링 Cascading 단계
        1. browser default styling
        2. overwrite external style sheet(.css)
        3. internal style
          - html 파일 내부의 head section에 있는 스타일링 코드
        4. inline style
          - html element(=> tag)에 있는 스타일링 코드
    - Rule precedence (Cascading 우선순위)
      - 만약 하나의 selector가 두 개의 다른 css file 에 정의 되어 있는 경우엔 ?
      > 가장 최근에 참조한 css file에 우선권이 있음 -> 폴더의 파일 정렬을 파일 이름을 사전순으로 정렬 했다면, 가장 마지막에 참조한 css file의 스타일링이 적용됨
      - 만약 하나의 selector가 하나의 파일에 두번 정의 되어 있는 경우엔 ?
      > 이것도 마찬가지로 가장 마지막에 참조한 것으로 ... 예시를 보는게 빠를 것임
      ex1.
      h1{
        color: blue;
        font-family: Arial;
      }
      .
      .
      .
      h1{
        font-family: Times;
      }
      -> 파란색 글씨, 'Times' 글씨체

      ex2.
      h1{
        color: blue;
        font-family: Arial !important;
      }
      .
      .
      .
      h1{
        font-family: Times;
      }
      -> 파란색 글씨, 'Arial' 글씨체

  - zengarden.com -> css template 사이트

- Colors
  - Color Conventions
    - Color names(blue, red, yellow, etc.) 으로 컬러를 정의하는 건 별로 좋지 않은 생각임
    - 모든 브라우저가 'yellow' 색의 prop name이 'yellow'는 아님
    - 따라서 위 보단, 아래 방법들을 사용하는게 좋을 거임
        - Hexadecimal -> ex. #00000FF
        - rgb -> ex (100, 255, 232)
        - rgba -> ex (100, 0, 1, .5) (a 는 투명도)
  - Tip
    - 웹페이지 Color 꾸며줄 때, 웹페이지에 해당되는 부분을 드래그하고 '검사' 누르면 실시간으로 해당 부분의 색을 변경했을 때의 보여지는 룩을 볼 수 있음.
    - 이렇게 보여지는것을 보고 괜찮다면 탭에 보이는 색으로 css 파일 수정하면 좋을 거임
  - Color contrast (색 대비)
    - 특정한 부분을 강조하거나, 특별한 의미를 담을 때 color를 사용함
    - 이쁜 웹 페이지를 만들기위한 컬러링은 그 다지 좋은 생각이 아님
    - 해당 element의 특별화를 하면서도 웹 접근성을 고려한 컬러링이 필요함
    - 색 대비(?) 도 고려해줘야함
    -> http://webaim.org/resources/contrastchecker/
    - 의미만을 담기위한 컬러링은 관두자
    -> 색깔로 비율을 나타낸 그래프를 고려해보자. 이것을 흑백으로 프린트하면, 뭐가 뭔지 제대로 모르게 될거임

  - conclusion
      - web safe 색상을 사용하고, 규약에 어긋나지 않는 컬러링을 하자
      - webaim의 contrast checker로 내 사이트를 테스트해서 색 대비 가 적절한지 확인해보자

   