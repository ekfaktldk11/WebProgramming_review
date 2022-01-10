# Interactivity with Javascript

# Web Pages are built upon the DOM
- Document Object Model
- Structures documents like a tree
- Every node has one parent, and possibly many children

- The DOM and JS
  - 웹 페이지에 있는 콘텐츠들은 DOM에 의해 표현가능 (tree-like)
  - Scripting languages(JS) 가 DOM을 사용해서 doctype 문서들과 상호작용함

- JS가 DOM을 사용해서 doctype 문서들과 상호작용하는 방법
  - API(application programming interface)을 통해 DOM에 접근가능
  - 어떤 브라우저를 사용하든, 어떤 scripting language를 사용하든간에 the API is the same!

- The DOM objects/elements
  - document : 웹 페이지의 root
      - document.URI, document.height, document.links ...etc
  - element(요소) : tree-like 형식의 DOM 에서 node 역할을 하는 놈들
      - returned by a member of the API
  - nodeLIst : 요소들로 이루어진 그룹 또는 배열
      - document.getElementByTagName('p')
  - attribute : 요소(node)들의 attr
      - 동적으로 요소들의 attr을 바꾸거나 하면서 ..

- Specific APIs
    - document.getElementById(id)
    - document.getElementByClassName(class)
    - element.innerHTML (tag 안에 담긴 content를 조작)
    - element.style
    - element.setAttribute(attribute, value)
    - element.removeAttribute(attribute)

- Web source with JS
  - HTML5 & CSS3 는 서로 Interactivity(상호작용)가 약함. 끽해봐야 pseudo-class.
  - JS 와 결합해서 Interactivity 상승!
  - What can JS do? (that is CSS3 can't do)
      - HTML 요소를 읽고 수정 가능
      - 이벤트(키보드, 마우스 인터럽)에 대한 반응
      - validate data
      - 해당 사이트 방문자 검열
      - 쿠키생성
  
- Output
  - JS output
    - JS는 따로 빌트인 되어있는 출력함수가 존재하지 않음
    - Data is displayed via
        - window.alert() (alert 박스)
        - window.prompt() (alert와 비슷, 입력값을 받아올 수 있음))
        ex)
        [body]
          [script]
            var nm = prompt("What is your name? ");
            console.log(nm) // value that you typed
          [/script]
        [/body]
        - innerHTML() (HTML 요소)
        - console.log() (브라우저 콘솔창 출력)
    - document.write()
        - DOM에 요소를 추가
        ex)
        [body]
          [script]
            document.write([h1]Hello[/h1]");
          [/script]
        [/body]
        -> 스크린에 그대로 "Hello" h1 상태로 보여짐
        -> 잘 사용안함
    - innerHTML
        - DOM의 콘텐츠를 수정할때 자주 사용됨
          -> ex) element.innerHTML = "Time to learn JS";
          -> ex) [button onclick="document.getElementById('something').innerHTML = 'Cliked The Button';"]Button[/button]
        - 비슷한 기능을 하는 것이 : document.write()
    - Debugging (디버깅)
        - safari : 'Preferences' -> 'Advanced' Check the 'Show development' menu in menu box
        - Google Chrome : 'Developer' -> 'JS Console'
        - Firefox : 'Tools' -> 'Console'
        - Edge : F12

- Variables
  - 문자, 숫자, _, & 으로만 변수이름 설정 가능
  - 숫자로 시작 x
  - name, Name, naMe, NAME 들은 서로 다른 변수 취급
   
- Types
  - Number
      - 2, 2.0, 2.832 다 똑같은 Numerical values 로 취급 (int, float 구분 x)
      - var width = window.innerWidth;
      - var pi = 3.14;
  - String
      - var location = window.location; 
  - Boolean
      - var windowStatus = window.closed
  - Object
      - DOM 의 요소인 노드들은 각자의 attr을 가지는 obj 타입임
      - 
      var topic = document.getElementById('myID');
      topic.style.display="block";
  - Array
      - var links = document.getElementsByTagName('a'); -> links[0 ...]

- Operations and Expressions
  - Assume x = 12;
    - x == "12"; // true
    - x === "12" // false (check type also)
    - x !== 12 // false
  - && : and 
  - || : or

- Functions
  - Function call
      - 함수선언 자체로는 excute 되지 않음
      - 사용할 곳에 함수를 'call'
      - 함수를 'call' 하는 것은 프로그램 흐름 (program flow)를 바꾸는 행위 ~

- Code Placement (코드 배치를 어떤식으로 ~)
    - HTML 코드랑 CSS 코드 따로 두듯이, JS 코드를 별개 파일에 ~ 
    - HTML 코드안에 JS 코드를 작성할 때엔 [head][/head] 안에 function을 정의 하고, [body][/body] 안에 function call 하는식의 코드 작성!
    - 
    ex)
    [head]
      [script src="../js/one.js"][/script]
    [/head]
    [body]
      [h1]Functions[/h1]
      [script]
        message();
      [/script]
    [/body]
    - 교수 추천으로는 테스트 동안에는 같은 html 파일내에서 작성하고 테스트가 끝나면 외부 파일로 옮긴다네

- Folder Structure. Organazing Your Code
  - Folder Structure
      - HTML
      - CSS
      - Images
      - JavaScript
  - ex)
    - Project1
      - contact.html
      - css
        - style1.css
        - style2.css
      - images
        - img1.jpg
        - img2.png
      - index.html
      - interests.html
      - js
        - func1.js
        - func2.js
      - photos.html
      ...

- Events
  - onclick
    - 유저가 HTML 요소를 클릭했을 경우
    - [div onclick = "message()"]some text[/div]
  - onmouseover
    - 유저가 마우스로 HTML 요소위를 hover 할 경우
  - onresize
    - 브라우저 윈도우 사이즈가 리사이즈 되었을 경우((마우스 커서로)웹 페이지의 크기를 조정할 경우)
  - onload
    - 브라우저가 웹페이지 로딩을 끝냈을 경우
  - Using Quotes
    - [div onclick = "message('Hi')"][/div]
  - DOM is always listening for events 이기 때문에 step by step(linear order)으로 처리하는 몇몇 프로그램과 달리 DOM 은 run continuously ~
  - More Events
    - Mouse Events
        - ondblclick(따블 클릭)
        - onmousedown
        - onmouseenter
        - onmouseleave
        - onmousemove
        - onmouseout
        ...
    - Keyboard Events
        - onkeydown
        - onkeypress
        - onkeyup
        ...
    - Frame Events
        - onload
        - onresize
        - onscroll
        - onerror
        ...
    - 더 많은 정보를 원하면 ?
    -> https://developer.mozilla.org/en-US/docs/Web/Events

- This
  - 왜 우리는 요소를 참조하는 special keywords(this)를 사용해야 할까?
      - 함수를 사용하여 스마트한 프로그래밍을 함
      - 함수로 하여금 어떤 정보를 사용해야 할지 알려주기 위해 나온 것이 'this' 임
  - "this" -> reference itself (자기자신을 가리킴)
  - DOM에 존재하는 모든 객체들은 자동적으로 "this" 키워드를 가지고 있음
  - DOM의 요소들(객체들)의 정보(attr)에 접근할 때 "this" 키워드는 엄청난 도움을 줌
  - this 없이는 함수로 하여금 자신이 어떤 데이터를 사용하는지 알기 어렵게됨
  - this 는 함수 밖에서도 사용됨
  - ex) [a onclick="this.~"] 에서 this 키워드는 해당 위치에서 가장 가까운 open tag(tag a)를 찾아감

- JS Arrays

- JS Iteration (for, while)

- Flow of Control (if - condition)

- Common Errors
    - Debugging JS code
        - 브라우저는 JS errors 를 최대한 숨기려하기 때문에 어떤 에러인지는 직접 잘 찾아야 함
    - Two classes of errors
        - Syntactic
            - break rules of JS
            : getElement*s*ById() -> getElementById()
            - missing '{' or '}'
            - undefined variable
        - Logic
            - 알고리즘
            - typos

- Symple Forms
  - [form]은 유저들에게 피드백을 받을 수 있도록 할 때 유용
  - [form]은 새로운 요청-응답 사이클을 추가 (http request) -> form - submit 을 통해 http request에 추가적인 파라미터(데이터)를 함께 전달가능. 
  - 
  [form]
    [label for="name"]Name[/label]
    [input type='text' id='name' name='name'][br/]
  [/form]
    -> Name [   ] / 이런형태로 만들어짐.
    -> 여기서 빈칸을 눌러도 빈칸이 activated되고, Name 부분을 눌러도 빈칸이 activated됨.
    -> 여기서 이게 왜 중요하냐면, 모바일 사용자들은 화면이 작기 때문에 이에 편리함을 주기위해 빈칸(input - text)을 activated할 수 있는 영역을 넓게 함.
  - Form attributes
      - type
      - name
      - id
  - Input Types (not all supported for all browser)
    - 모바일 폰으로 보면 각 input 타입마다 다른 키보드가 팝업됨
    - 유효하지 않은 인풋이 들어오면(number인데 str이 들어오든지) submit시 -> 중단 (또 이게 지원되는 브라우저가 있고 아닌 것도 있나봄) -> invalid 한 텍스트 칸에 focused 되어서 오류가 뭔지 박스형태로 알려줌 (크롬)
    - input types를 지원하지 않는 브라우저는 그냥 전부 text로 취급 (safari 가 그런 것 같던데)
      - textfield
      - email
      - password
      - radiobutton
      - checkbox
      - submit
      - number
      - range
      - color
      - date
      - url (http ~ 같은 형식으로 입력받길 기대)
  - Attributes
    - name
        - 모든 인풋 타입에는 name attr이 존재해야함
    - id
        - used for labels
        - used for by JS (identifier)
    - value
        - button : 버튼 위에 작성된 text
        - textfield : default value를 가지고 있기에, 만약 이 인풋 텍스트에 어떠한 값도 입려되지 않으면 이 default value를 가지고 서버로 전송
    - placeholder

- Simple Validation
  - 어떤 value를 검증할 것 인지 ..?
    - input의 타입
    - input의 format
        - 유효한 email 주소인지.. 유요한 url 인지..
        - 전화번호가 공백을 가지는지?
  - 어떻게 검증할 것 인지 ..?
    - input types 사용
        - type = 'email', 'number', 'url'
    - HTML5 attr 사용
        - required(입력필수), placeholder, min, max
    - JS function 사용
        - custom condition...
  - required
      - 텍스트칸 비어있으면 submit 중단
      - 개발 테스트시, 이 required 속성으로 인한 문제가 많이 발생할 수 있으니 'novalidate' 속성과 함께 쓰임
      - [form novalidate ... -> form 내부 input 태그들의 모든 required attr을 무시
  - pattern
      - input type='text' 일 경우에만 적용가능
      - 정규표현식 사용
          - [0-9]{5} : number만을 사용하되, 자리수는 5자리
          - [0-9]{5} : number만을 사용하되, 자리수는 13 ~ 16 사이 (credit card 패턴)
          - [a-zA-Z]+ : 알파벳 텍스트만 사용하고 적어도 하나이상의 알파벳이 있어야함
          - placeholder로 미리 위 패턴을 암시해 줘야함
          - http://html5pattern.com/ 에서 여러 패턴 확인 가능
    - Limiting number
        - min, max and step
        - range
    - Pattern vs Limiting ?
        - 5 자리의 숫자(five digit)
            - input = number + min & max
            -> [input type="text" pattern="[0-9]{5}"]
            - input = text + pattern
            -> [input type="number" min="10000" max="99999"]

- Comparing Two Inputs (비밀번호 재입력, 이메일 재입력)
  - 보통 두번째 필트값이 입력되는 순간 두 가지 값이 서로 같은지 다른지를 판별 (oninput & onchange)
      - oninput : 매 타이핑 마다 event 발생
      - onchange : 타이핑이 다 끝나고 그 텍스트 칸에 대한 focus가 벗어났을 때 event 발생
  - form.html 확인해서 어떻게 두 인풋을 비교하고, submit에 대한 핸들링 하는지 확인

- Checkboxes
  - can select one or more option per group!
  - 하나의 체크박스내의 모든 항목들은 같은 'name'을 공유(사용)
  - [label][input type="checkbox" name="food" value="kale" /]Kale[/label]
  - [input type="checkbox" name="food" value="kale" /]Kale
  - 위 두개의 다른 점은, 작은 체크박스를 누를 때 불편함이 있으니 그것을 [label]로 감싸서, Kale 이라는 텍스트를 눌러도 체크박스가 되도록 함
  - 모든 인풋 타입에 적용가능하고, 이거 엄청 사용됨
  - checked : default로 체크된 값

- Radio Buttons
  - can select one option per group!
  - 라디오 버튼이나 체크박스나 'name' 으로 그룹을 나눔
  - checked : default로 체크된 값
  - 
  ex) 이런식으로 활용 가능
  if (document.getElementById("id1".checked){
    document.getElementById("id2").style.display="inline";
  }
  else{
    document.getElementById("id2").style.display="none";
  }