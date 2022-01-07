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
      - color
      - background
          - background : url('../imgs/001.png');
      - alignment (글자 정렬)
          - left
          - right
          - center
          - justify : 해당 요소가 가지고 있는 모든 공간을 최대한 사용해서 ~
          -> word 파일 보면 문장마다 공백의 크기가 다른거 생각하면됨. 약간 공간에 아이템들을 고르게 분포시키는 듯한 느낌
      - line-height (줄 간격)
      - visibility (show enable/disable)

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
          - %, vw, vh(viewport-height (화면대비 높이))
          - em (for font): 1em(현재 사이즈), .75 또는 75% (현재 사이즈의 75% 정도)
          - rem (for font): 1rem(root element의 100% 사이즈 적용)

- Styling links & lists
  - Anchor Links
      - { text-decoration:none; } -> Anchor 태그의 [a]의 링크에 있는 밑줄을 없앰
  - 대부분 [a] 보단 [button] 으로 링크를 구현하는 경우가 많음
  - States
    - 어떤 링크는 파란색, 어떤 링크는 보라색 ... 왜일까 ?
        - a:link(또는 그냥 a) : 아직 방문하지 않은, 노멀한 상태
        - a:visited : 이미 방문한
        - a:hover : 마우스 커서를 링크위로 올렸을 경우 -> 터치스크린에는 적용불가
        - a:focus : tab 버튼으로 콘텐츠가 focusing 되었을 경우
        - a:active : 링크가 클릭된 순간(근데 클릭한 순간 다른 웹페이지로 가기 때문에 쓸모가 있을지는 잘...)
    - 위에 있는 링크의 상태들을 관리할 때 알아둬야할 규칙 (FE 코딩컨벤션 느낌)
        - a:hover 는 a:link 다음에 와야함
        - a:visited & a:active 는 a:hover 다음에 와야함
        - a:link -> a:hover -> a:visited or a:active
  - Styling Lists
    - font, margin ... 이거 말고도 사용할 수 있는 스타일링 특성이 많음
        - list-style-type : idx를 어떤 타입으로 할건지
            - [od] 의 default 는 넘버링
            - ul{ list-style-type:upper-alpha; } -> A, B, C ... / 말고도 lower-roman, upper-roman, decimal, decimal-leading-zero... etc
        - list-style-image
            - custom image를 사용할 때
            - ul { list-style-image: square url('icon.gif'); } -> 'icon.gif'로 오더링을 해줘, but 이 파일을 찾지 못하면 square로 오더링 해줘 
        - list-style-position
        - list-style(itself)
    - CSS3 tools
        - https://css3generator.com/ : 원하는 css 스타일 code를 생성해줌
        - https://chrispederick.com/

- Advanced Selectors (개별 및 그룹 스타일링)
  - Styling Specific Objects
      - type selectors
      - CSS selectors (tree 형태의 DOM을 이용)
          - Descendant selectors (자손 결합자) (nav a)
            : [nav]안의 모든 [a] 를 대상으로
          - Child selectors (자식 결합자) (nav > a)
            : [nav]바로 하위에 있는 [a] 를 대상으로
          - adjacent sibling (인접 형제 결합자) (h1 + ol)
            : [h1] 바로 뒤에 위치하면서 같은 부모를 공유하는 [ol] 을 대상으로
      - #id selectors
        - DOM에 존재하는 single element에 id 부여
        - CSS 보단 JS로 인한 id binding 할 때 자주 사용
        - [img src="" id="mainLogo" alt="logo"]
        -> #mainLogo{...}
      - .class Selector
        - DOM에 존재하는 특정 클래스에 대하여 ~
        - 썸네일 이미지 그룹짓고 스타일링 할 때를 예시로 들었네
        ex)
        [img src="cat.jpg" class="thumb" alt ="cat"]
        [img src="dog.jpg" class="thumb" alt ="dog"]
        -> .thumb{...}
  - classes(.) vs. ids(#)
      - class는 다수 사용가능
      - id 는 유니크, 한번만 사용가능 (can only be one page at a time)
  - Narrowing the scope
    - 페이지를 업데이트 시킬 수 록, class 및 id 네이밍 범주가 넓어질 수 있음
    - '.' 을 사용하여 범주를 좁혀주자
        - p.main -> main class를 사용하는 paragraphs(태그)들
        - header img.special -> [header] 하위에 있으며, special class를 사용하는 [img] 들
  - Expanding the scope
    - 여러가지 태그들을 한번에 스타일링 할 경우 ',' 을 사용
        - p, h1, #main, .special{...}
        - css overwrite 되면 가장 최신걸 참조함!
        - !important 를 사용해서 핸들링 가능!
  - etc
    - Universal (*) -> every element on the page
    - Attribute Selectors -> ex) a[href="info.html"]
        - Operators 사용해서 찾고자 하는 value를 찾음
            - ^A : A로 시작하는 ~
            - $A : A로 끝나는 ~
            - *A : (wildcard)  ex) a[href()="google"] -> href 에 "google"이 포함된 모든 [a] 에 대하여
            1. gif 파일을 사용하는 모든 [img] 에 대하여... img[src$ = '.gif']
            2. alt의 text 가 공백인 모든 [img] 에 대하여... img[alt^ = " "](내 추측)
            3. 특정한 sites로 링크되는 모든 링크(ex. [a])에 대하여... a[href^="http://~"]
    - Pseudo-Classes
    - Pseudo-Elements
    - classes & ids 함께 사용가능 -> [li class="special" id="main" class="dark" id="li.main"/]

- Browser Capabilities
  - Browsers Differ : 모든 브라우저가 HTML 규약에 일관되도록 진화하고 있지만, 각 브라우저마다의 display 및 adherence(고수)의 방식이 다름
  - 따라서 css 를 html에 입힌결과가 테스트 브라우저에 잘 보인다 하더라도, 다른 브라우저에도 잘 보이는지 check 하는건 필수임
  - Handling Stylistic Differences (브라우저마다 다른 display를 핸들링하는 방법)
    - use default style sheet
        - 지원하지 않는 css props 때문에 스타일링이 적용되지 않는 부분을 위해 default style sheet(.css)를 두는 것.
        - 가장 쉬운방법
        - default style sheet을 제일 먼저 참조하도록 본 style sheet 파일보다 상위에 존재하도록 배치
  - Handling Unsupported Properties
    - 모든 브라우저가 모든 HTML5 tags를 지원하는 건 아님
    - 마찬가지로 모든 브라우저가 모든 CSS3 properties를 지원하는건 아님
    - 브라우저 접두사를 사용하여 지원하지않는 CSS3 options를 핸들링
        - -webkit- : Android, Chrome, iOS, Safari
        - -moz-: Firefox
        - -ms- : internet Explorer
        - -o- : Opera
        ex)
        h1 {
          -webkit-border-radius: 10px 10px 10px 10px;
          border-radius: 10px 10px 10px 10px;
        }
    - 브라우저 접두사를 사용할 필요가 있는 properties들
        - column-count/column-gap (컬럼의수/컬럼간의 거리)
        - border-radius
        - gradient (color 그라데이션)
        - http://caniuse.com/ (참고 사이트)

- Designing for Accessibility
  - POUR guidelines (웹 접근성 4가지 유의점)
      - Perceivable (인지 가능한) : CSS 연관 多
          - img_tag 의 'alt' attr
          - video 또는 audio 에 captions 또는 transcripts 제공
          - 콘텐츠를 다양한 방식으로 표기 가능하도록 올바르고 적절한 semantic markup(= tag)을 사용
          - 적절한 색 대비를 사용해서 사용자들이 콘텐츠를 보는 것이 편하도록 coloring
      - Operable (작동 가능한)
          - 웹의 모든 기능이 키보드로 사용이 가능하도록
          - 유저들에게 비디오나 오디오에 대한 컨트롤을 제공
          - 컨텐츠의 갑작스런 발광 효과를 사용하지 않도록
          - 웹의 네비게이트 기능을 잘 이용할 수 있도록 기능을 제공 (홈으로 가기, 콘텐츠 찾기, 유저들이 현재 어느 위치에 있는지 확인 가능하도록)
      - Understandable (이해 가능한) : CSS 연관 多
          - 짧고 간결하며 직관적인 언어를 사용
          - 네비게이션 및 정보 구조는 일관적이고 알아볼 수 있도록
          - 오류에 대한 Alert, Solution 제공
      - Robust (탄탄한)
          - Is your site functional across various technologies -> 반응형 웹 생성( smart phone, screen reader, laptop, pensticks, etc...)
          - 웹 규격 준수
          - validator.w3c.org, wave.webaim.org 에서 검증

- Pseudo-Classes
  - DOM 구조에 의해 동적으로 파생되는 요소들
  ex) a:hover{}
  - Pseudo-Classes의 종류
    - Link
        - :link, :visited
    - User Action (꼭 link가 아니여도 다른 태그들에 적용 가능한 것도 많음)
        - :hover, :active, :focus
    - Forms (or interfaces) (체크박스가 선택되거나 ...)
        - :enabled, :checked, :disabled
    - Structural/Positional
        - :first-child, :last-child, :nth-child(# or even/odd), :only-child, :empty
        - :first-of-type, :last-of-type, :only-of-type
  - DOM 구조에 명시되어있지는 않지만 웹 페이지의 특별한 부분을 스타일링 해주기 위해 사용되는 Pseudo-Classes 들
    - Textual
        - :first-letter, :first-line
    - Positional/Generated
        - :before, :after
    - Fragments
        - ::selection

- Transitions (프로페셔널한 css 를 적용하는데 중추적인 역할을 하는 것 같음!)
  - CSS 속성을 변경할 때 애니메이션 속도를 조절하는 방법을 제공하는 것
  - Properties
    - transition-property : size, color, position, etc...
    - transition-duration : transition의 지속시간
    - transition-timing : 애니메이션 변화의 속도
    - transition-delay : transition이 시작되기전에 얼마나 wait 할지
  - 이거 사용할 때 인터넷의 예시 보면서 사용하자구
  - 근데 이런것들은 먼저 웹의 좋은 접근성이 확보되 이후에 고려되야할 엑스트라 항목 이란것을 알아두자

- Transforms
  - 요소의 회전, 크기 조절, 기울이기, 이동 효과 등을 부여
  - 2D options
      - translate (이동)
      - rotate (: #deg)
      - scale (확장)
      - skew
      - matrix
  - 3D rotate (rotateX/Y/Z/3d)

- Positioning
  - Position Properties (top, bottom, left, right)
      - static : default-value
      - relative : 상대적 위치
      - absolute : 정확한 위치(좌표)
          - 다른 요소들이 어디에 위치해 있든간에 무시하고 해당 좌표에 배치
      - fixed : 고정된 위치
          - 화면을 스크롤링 해도 그냥 고대로 위치해 있음
          - 주로 팝업 박스에 사용됨
          - 네비게이션 bar 같은 거
          - Drawer 같은거 배치할 때 유용할 것이라 생각이 듬
      - z index : 웹 화면은 보면 2차원적이지만 z index 를 통해 2차원인 면위에 면을 쌓는 듯한 스타일링을 할 수 있음 (이미지 검색해보면 바로느낌옴)

- Accessible Navigation
  - Navigation
      - Banner
      - Search box
      - Main navigation box
      - Content well
  - 페이지의 [title] 설정을 통해 유저들이 지금 내가 어디페이지에 있는지 알 수 있도록 ~
  - 적절한 제목배치, 계층 구조로 페이지를 구성하여 사용자의 네비게이션을 위한 탐색시간을 줄일 수 있도록 ~
  - link descriptions
  - Proper heading hierarchy
      - 적절한 nested Headings ! -> [h1] 안에 [h2] .. [h2] 안에 [h3] .. 
      ex) [h1][/h1]
            [h2][/h2]
              [h3][/h3]
              [h3][/h3]
            [h2][/h2] ...
      - 단지 [h3] 의 룩이 맘에 들어서 heading hierarchy를 무시하고 [h3]을 남발해버리는 경우가 많은데 이건 정말 안좋은 생각임
      - 이처럼 tag의 semantic 을 무시하는 html 작성을 지양해야함, 위 같은 경우엔 class 로 일관된 텍스트 스타일링을 해주는 것이 좋음
  - Off-page headings
    - 첫 렌더링 페이지에선 보이지 않지만, tab을 통해 웹 요소들에 접근하면 보이도록하는 요소 -> 이를 통해 해당 페이지의 핵심 내용으로 바로 접근할 수 있도록 해줄 때 매우 유용함
    - 웹 페이지에도 서론 본론이 있는데 Off-page headings 로 스크롤 상단부분의 서론을 스킵하고 본론으로 바로 접근할 때 사용
    
    ex)
    .offpage{
      position: absolute;
      left: -1000px;
    }
    - Off-page headings 사용할 때, {display:none} or {visibility:hidden} 사용하지 말기 -> 해당 웹 페이지를 리뷰하려는 사람에게 혼동을 줄 수 있음

  - Meaningful link text
      - 의미론적으로 적절한 링크 텍스트를 사용하자
      -> "here", "click here", "read this", "more" 이런 것 보단 좀 더 해당 링크에 대한 직관적인 text가 좋을 거임

  - Make sure that you're planning for everyone
    - 웹 개발을 마무리하기 전에 최대한 많은 사람들에게 웹 페이지를 제공할 수 있도록 해야함 
    - 마우스로 밖에 접근할 수 없는 상황을 생각해보거나 ... 단색밖에 존재하지 않는 웹 페이지를 생각해보거나 ...

- little tiny tweaks -> make it look a little bit more professional
  - A | B | C
      - A, B, C 전체에 border-right 적용
      - :last-child {border-right:none;} 적용
  - sub-menu
      - 첫 렌더링시엔 보이진 않지만, 마우스 커서를 올렸을 때(:hover), 보여지는 sub-menu들 -> display:none 에서 display: block 으로 변경
      
      ex)
      nav li ul{
        position: absolute;
        display: none;
        width: inherit;
      }

      nav li:hover ul{
        display: block;
      }