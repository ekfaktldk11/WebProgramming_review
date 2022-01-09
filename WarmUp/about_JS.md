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

