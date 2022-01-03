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

- Styling Your Text
  - Text Styling Option
      - font family (글꼴)
          - 각 브라우저마다 지원하지 않는 글꼴이 있기 때문에 alternative 글꼴을 넣어주는 것도 좋은 방법
              -> h1, span {
                font-family: Courier, Impact, Arial;
              } // 뒤로 갈수록 후순위 적용
      - font style (굵기? 기울어짐?)
          - normal : default
          - italic : 기울어짐
          - oblique : 각(?)
      - font variant 
          - normal 
          - small-caps : 단어 첫 글자의 크기를 다른 글자보다 크게하고, 소문자를 대문자화
      - font size (크기)
      - color, background ()
      - alignment (글자 정렬)
          - left
          - right
          - center
          - justify : 해당 요소가 가지고 있는 모든 공간을 최대한 사용해서 ~
          -> word 파일 보면 문장마다 공백의 크기가 다른거 생각하면됨. 약간 공간에 아이템들을 고르게 분포시키는 듯한 느낌
      - line-height (줄 간격)

- Display and Visibility - Part 1
  - Display is Key to Layout
      - 모든 요소들(</>)은 박스형태임
      - 요소마다의 Display가 각 다른 요소들에게 영향을 미침
  - Common Values
      - inline {display : inline;}
          - '이 글씨에 *이태릭* 효과를 주었다' 처럼 text 내에 특정 부분에만 스타일을 간단히 줄 때 많이 사용됨
          - 적당한 높이와 폭을 가지고 있음
          - width/height 적용 불가
          - margin/padding-top/bottom 적용 불가
      - block {display : block;}
          - 적당한 높이 & 전체 폭을 가지고 있음
          - 높이와 폭을 조정가능
          - block Tag는 무조건 한줄을 점유함 -> 다음 태그는 다음 줄로 가버림
      - inline-block {display:block;}
          - inline과 전반적으로 비슷
          - 동일 라인에 여러 태그를 붙일 때 사용
          - width/heigh 적용 가능
          - margin/padding-top/bottom 적용 가능
          - line-height 적용 가능
          - inline-block 끼리 공백이 생기게 되는데, 이때는 상위 div에 {font-size:0;} 을 적용하면 해결 가능
          - inline-block 끼리 높이가 안맞을 때, 상위 공백이 생기는데, 이때는 {vertical-align:---;} 값으로 top 부분을 맞춰주면 해결 가능 (또는 float:left;)
      - none {display:none;}
          - 해당 태그를 숨겨줌
          - css 파일 수정단계에서 웹 페이지의 검사 기능을 사용할때 활용하는 display value
  - Complementary Properties
      - float
          - : right -> 해당 요소를 가능한 최대로 오른쪽에 배치 시키고 픔
          - : left -> 해당 요소를 가능한 최대로 왼쪽에 배치 시키고 픔
      - clear (float로 인해 서로다른 요소들이 overlap(겹치는)되는 경우를 방지하기 위해)
          - : right -> { float : right } 가 주변에 없다는 것을 알려줌
          - : left -> { float : left } 가 주변에 없다는 것을 알려줌
          - : both -> { float : right } & { float : left } 가 주변에 없다는 것을 알려줌

- Display and Visibility - Part 2
  - Element Overflow
      - 웹 페이지의 크기가 줄고 늘어남에 따라 태그들의 크기는 변화하지만, 태그안에 글자가 있는 경우, 글자의 pixel이 그대로면 overflow 상황이 자주 발생 -> 핸들링이 필요
      - 4 values of Overflow
          - visible : 박스 밖으로 튀어나와도 그대로 보여주도록 할 경우
          - hidden : 박스 밖으로 나가는 것들은 숨길 경우
          - scroll : 수평 및 수직 스크롤바를 제공
          - auto : 필요한 만큼 스크롤바를 줌
  - Other Display Values
      - 최근부터 지원되는 { display : attr; } 들로, 아직은 모든 브라우저에서 지원되지는 않음
          - Table
              - table-like layout -> 실제 [table]은 아니지만 table 형식으로 요소들을 배치시키고 싶을 경우 사용
              - { display:table; }을 사용한 태그 안의 child 태그들은 { display:table-cell; }을 명시해줘야 함
          - Grid
          - Flexbox
  - Visibility
      - 하나의 요소를 보여지게 하거나 보여지지 않게 하거나 를 조정
      - { display:none; }은 해당 element 자체가 존재하지 않는 것 처럼 보이지만 { visibility:hidden; } 은 해당 요소의 공간은 존재. 콘텐츠 내용이 안보일 뿐.
      - Options include:
          - visible
          - hidden
          - collapse (only for table elements)

- Box Model
  - Height and Width
      - inline 태그의 width는 해당 요소 그자체의 폭 값을 가짐. -> [link] 면 link의 text가 차지하는 폭만큼을 폭으로 가짐
  - Border
      - 하나의 요소가 가지는 높이와 폭이 얼마만큼인지 눈으로 보고 싶으면 'border'를 사용한 결과화면을 보면됨
      - 웹 페이지의 마지막 output에는 'border'를 넣지 않더라도, 전체 요소에 border를 넣어서 각 요소가 얼만큼의 크기를 차지 하는지 계속 주시하면서 프로젝트를 진행하는 것이 좋음
      - border-width: 3px; -> 위아래, 양옆 전체적으로 3px 두께의 보더 적용
      - border-width: 3px 10px; -> 위아래 3px, 양옆 10px
      - border-width: 3px 10px 20px; -> top, left-right, bottom
      - border-width: 3px 10px 20px 1px; -> top, right, bottom, left(top 부터 시계방향)
  - Margin(요소들 사이의 거리)
      - '+' value를 주면 요소들끼리 서로 멀어짐
      - '-' value를 주면 요소들끼리 서로 가까워짐
  - Padding(한 요소안의 콘텐츠와 보더 사이의 거리)
      - '+' value를 주면 콘텐츠와 보더 사이의 거리가 멀어짐
      - '-' value를 주면 콘텐츠와 보더 사이의 거리가 가까워짐
  - Additive Height and Width
      - Actual width = margin + border + padding + width
      ex)
      div {
        width: 100px;
        height: 50px;
        padding: 10px;
        margin: 5px;
        border: 1px solid black;
      } -> Actual width : 132px(100+10+1+5+10+1+5)
      -> Actual height : 82px(50+10+1+5+10+1+5)
  - Centering an Element
      - 하나의 요소를 중앙정렬 하고 싶다면 -> margin: 0 auto; -> text 같은 경우엔 text-align으로 중앙 정렬하면 되지만, text가 아닌 요소들은 위와 같은 설정으로 중앙 정렬이 가능함
      - { display: block } (또는 block tag(? 이건 내 추측))만 적용가능
      - The element must not float
      - 고정되거나 특정한 위치 값을 가지면 안됨
      - 해당 요소는 width value가 auto가 아닌 특정한 값을 가져야함
  - box-sizing
      - div{width: 500px; border-width:50px}
      -> width : 테두리를 포함하지 않은 크기
      - div{width: 500px; border-width:50px; box-sizing:border-box;}
      -> width : 테두리를 포함한 크기
  - Measurements
      - Absolute (실제 측정가능한 사이즈로 지정) : px, mm, cm, pt, ...
      - Fluid (주변 요소들에 대하여 상대적인 사이즈로 지정): 
          - %, vw, vh
          - em (for font): 1em(현재 사이즈), .75 또는 75% (현재 사이즈의 75% 정도)
          - rem (for font): 1rem(root element의 100% 사이즈 적용)