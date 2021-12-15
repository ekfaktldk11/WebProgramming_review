# What is HTML?
- HTML - Hypertext Markup Language
- <> 태그를 사용, 브라우저에게 헤더, 링크, 이미지 등등의 컨텐트를 어디에 위치시킬건지에 대한 구조적인 틀을 명시
- 브라우저는 HTML 파일을 보고 어떻게 컨텐츠들을 디스플레이 할건지 결정(content type)
- <> 태그는 syntax라고도 할 수 있음

# HTML 1 to 5
- 최초에 HTML은 color 이미지나 비디오 없이 text_based의 간단한 틀만을 가지는 형태로 나옴(HTML1)
- Mosaic사 로 인해 이미지가 곁들여지고 엄청난 파장을 일으킴(HTML2)
- 이후 스타일링으로 인한 크로스 브라우저의 호환성이 깨져버리고 코드가 엉망진창이 됨(HTML3)
- 이를 해결하기 위해 HTML에서 스타일링 을 분리 시켜 CSS에 스타일링을 명시하도록함 (HTML4)
- 위의 과정을 거쳐서 2012 이후 부터는 HTML5가 됨.
- HTML5은 W3C 과 웹 하이퍼텍스트 어플리케이션 테크놀로지 워킹 그룹 사이에서 협업하여 나온것
- HTML5 가이드라인
    - 새로운 기능은 HTML, CSS, the DOM, JS로 이루어져야함
    - 예전에는 존재했던 Flash같은 외부 플러그인의 필요를 줄임
    - 스크립트를 줄이고 마크업을 더 사용
    (get rid of codes, and more tags)
    - HTML5은 디바이스에 독립적(모바일이든 랩탑이든 데스크탑이든 다 호환 가능하도록)

# When you type an address into the URL bar, what happens?

- Relationship between Server and Clients
    - 서버는 모든 리소스를 가지고 있는 장치며 항상 네트워크에 연결되어 있어야함.
    - 클라이언트는 내가 사용하고있는 장치로, 노트북이나, 핸드폰 등등

- LAN, WAN
    - LAN은 로컬네트워크로, 집에서 사용하는 네트워크를 필요로 하는 모든 장치들을 연결하고 있음
    - WAN은 LAN 보다 좀 더 방대한 네트워크로, 같은 건물단위 같은, 집 보단 좀 더 큰 단위의 네트워크.
    - LAN은 하나의 사무실 단위의 네트워크라면, WAN은 이러한 사무실들을 여러개 보유하고 있는 건물이나 건물들을 연결하고 있는 단지내의 네트워크(ex. University)

- Client's request a web page -> Server's respond with the appropriate files
    - 한번의 요청으로 수많은 파일들을 한번에 받게됨

- URL - three parts
    - protocol : 어떻게 연결할지 ?
    - domain : 해당 웹페이지를 렌더링하는 서버
    - document(optional) : 필요한 파일의 구체적인 내용

- Protocols
    - HTTP : Hypertext Transfer Protocol
    - HTTPS : Secure Hypertext Transfer Protocol (Secure HTTP)
    - FTP : File Transfer Protocol
    HTTP(S) 는 기본적으로 HTML 파일을 받길 기대하지만 FTP는 any types of file을 받을 수 있음

- Domain Names
    - 내가 연결하고 싶은 엔티티의 식별함
    (ex. naver.com, google.com)
    - 각 엔티티는 서로다른 top-level domain을 가지고 있음
    (ex. .com, .co.kr, .org)
    https://www.icann.org/resources/pages/tlds-2012-02-25-en <- 에서 각 다른 타입의 탑 레벨 도메인을 확인 가능
    - 중요한 사실은 도메인네임이 기계가 식별할 수 있는 IP주소로 맵핑됨.

- DNS (Domain Name Server)
    - 실제 IP 주소로 사람이 입력하려고 하기가 쉽지않기에 (IPv4 처럼 긴 숫자를 다 외우고 다닐 수 없기에 ... IPv6는 훨씬 더 어려움)
    - 그래서 클라이언트가 입력한 URL을 DNS가 보고 IP주소로 맵핑시켜줌

- Document
    - URL은 구체적인 document를 요청할 수 있게 함. (ex. .com/contact.html, .org/Apple)
    - 구체적인 document를 적어주지 않아도 각 서버는 디폴트 리턴 값이 존재함. 그 문서는 바로 index.html (ex. naver.com == naver.com/index.html)

- Response
    - res로 오는 많은 데이터들 중엔 보이지 않는 headers, cookies, form-data 등의 데이터들도 존재함
    - 서버는 "web pages"를 리턴하는 것이 아니라 "(lots of)files"를 리턴함 !
    - 서버는 가끔 요청을 수행하지 못할 때가 있는 데, 그때는 클라이언트에게 404(file not found), 500 등과 같은 에러 코드를 보냄
    - 404는 보통 클라이언트가 URL에 타이핑을 잘못한 경우임
    - 500은 서버에러로, 시간이 지나면 복구되는 경우가 많음

- Total process
    (1). 클라이언트의 URL 타이핑 후, request를 보냄
    (2). 브라우저는 DNS에 있는 도메인을 확인하며 IP 주소로 해당 도메인이 매핑된값을 리턴받게됨
    (3). 브라우저는 IP주소에 해당하는 서버로 HTTP 요청을 보냄
    (4). 서버는 요청된 파일을 찾고 이것을 response로 클라이언트에게 보내게 됨
    (5). 브라우저는 받은 파일들 중에 HTML 코드를 통해 웹페이지를 렌더링함. 이 과정에서 이미지나 다른 호환가능한 파일들을 요청하기 위해 3-4 멈춤(?)
    - 웹 페이지 마우스 우클릭 후, '검사' 항목을 통해 'Network'로 간 후, HTTP 요청했을 때 이 하나의 페이지를 만들기위해 많은 파일들이 리턴된 것을 확인 가능

- Summary
    - 모든 request & response cycle 은 클라이언트와 서버간의 수많은 커뮤니케이션을 통해 이루어짐 (하나의 리퀘스트는 한번의 커뮤니케이션을 통해 이루어지는 것이 아님)

# Differing Browsers
- 웹 개발자는 기본적으로 브라우저마다의 다른점을 알고 있어야함. 왜냐면 사람마다 사용하는 부라우저가 다르고, 웹 표준에 맞는 웹 파일들을 작성하더라도, 각 브라우저마다의 차이점들이 존재하기에 이것을 맞출 수 있어야 하기에

- 웹사이트를 개발할 때 하나의 브라우저를 기준으로 개발을 하겠지만 다양한 브라우저에서의 해당 웹사이트를 테스트하는 것도 중요

- Internet Explorer (feat. Edge)
    - 오랜 기간동안 Window OS 에 기본적으로 설치된 Internet Explorer 가 유명했었음
    - Ineternet Explorer는 Platform-dependent, Mac OS 에서는 제대로 작동하지 않음
    - 2015년에 Window 10이 나오게 되면서, Microsoft Edge가 IE를 대체하게 됨
    - 하지만 모든 사람들이 컴퓨터를 새로사거나 Window OS 를 10으로 업그레이드 하는 것이 아니므로 두 가지 모두 충족 시키는 웹 사이트를 개발해야함
    ※ IE은 2022년 6월 15일 공식지원 종료되어, 이후에는 IE를 실행해도 Edge 브라우저가 실행되며, 이에 맞는 개발을 진행해야함

- Google Chrome
    - 2008년, Google에서 개발한 Chrome이 출시 되었고, 대부부의 장치에서 사용 가능 (Window, Linux, macOS, iOS and Android)
    - Freeware Browser
    - 보안에 강한 Chrome *

- Firefox
    - Open-source browser (developed by Mozilla)
    - FF는 Windows, macOS, Linux, BSD-OS 에서 사용 가능

- rank of Browsers (2019.09 기준)
    - Chrome 62.9 %
    - Safari 15.97 %
    - FireFox 4.33 %
    - etc

- Accessibility
    - http://www.html5accessibility.com/ 에서 브라우저마다의 HTML5 features 들을 얼만큼 지원하는지에 대한 퍼센트 정보를 확인가능
    - 웹사이트를 개발한 후, 웹사이트에 대한 유지 보수도 중요하지만, 각 다른 브라우저마다 내 웹 사이트의 모든 표현이나 기능들이 잘 작동하는지 확인하고 이에 대한 핸들링도 웹개발자의 몫임

# Creating and Editing Your Files
1. 어떻게 파일 조직들을 구성할건지 ?
2. naming convention은 어떻게 할건지
    - under_scores, camelCase
    - No spaces, 대문자 소문자 규칙
    - etc
3. 어떤 editor를 사용할 건지?

# The DOM (Document Object Model)
- DOM is a tree-like structure
- HTML is built on the DOM
- 여기에 'DOM 이미지 필요'
- DOM의 root element인 html을 만들 때 우리는 크게 두 가지 부분으로 나눌 수 있음
    - <head> : 유저가 눈으로 확인 불가능한 것의 대부분이 여기에 포함됨 (ex. <title>) -> meta data 같은 사용자들이 신경쓰지 않는 것들
    - <body> : 유저에게 보여지는 부분으로 html5의 대부분의 태그들이 여기에 속함
    -> Display content

- Three part of a well-formed document
    - Doctype : 사용할 HTML의 버전
    
    <!DOCTYPE html>

    HTML5 이전에는 위처럼 간단히 작성못하고 추가적으로 적어야할 구체적인 내용들이 필요했음
    
    - Head : Meta data
        - language, title of pages
        - Supporting files (ex. JS, CSS)
    - Body : Diplayable content
        - 페이지 구성의 대부분
        - tree 형태로의 작성
        - body에도 종종 메타데이터가 포함되기도 함

    - validator.w3.org
    위 사이트로 들어가면 내가 작성한 html 파일이 유효한지, 아니면 어떤 부분이 문제인지 확인가능. html 파일을 디버깅 해주는 툴 같은 느낌

# HTML5 Tags and Syntax
- closing tags
    - start tag 와 close tag 사이에 text를 타이핑할 여지가 없는 tag들 (ex. <image />)은 self closing tag를 사용
    
- Display
    - display types의 가장 보편 적인 두 가지는 block & inline
    - block 태그는 높이와 폭에 대한 값을 특정할 수 있음 (default : whole width)
    - inline 태그는 높이와 폭에 대한 값을 특정할 수 없음 (해당 element를 포함할 수 있는 충분한 크기를 알아서 사용)
        
- Common Tags
    - Headings (block)
        - <h1>, <h2>, ..., <h6>
        - 이 태그들은 syntax & semantics 둘 다 가지고 있음
        - syntax : 브라우저야 <h1> 태그에 해당하는 text들은 가장 크고 가장 두꺼운 글씨체로 만들어줘
        - semantics : <h1>의 내용은 <h5>의 내용보다 훨씬 더 중요하다는 것을 암시(또는 의미함)
    - Paragraphs (block)
        - <p> ... </p>
        - p tag 내부에는 오직 inline elements만 들어갈 수 있음 (text, some pictures ...)
    - Divs (block)
        - <div> ... </div>
        - pargraph보다 크면서 서로 관련이 있는 컨텐트들 단위로 나누고 싶을 때 <div> 단위로 나눔
  
  - More tags
      - Ordered lists (명시적인 순서를 매길 경우, 숫자(default) 또는 로만 숫자, 알파벳(대문자, 소문자))
          - <ol>
                <li> Item 1 </li>
                <li> Item 2 </li>
            </ol>
      - Unordered lists (도형같은 것으로 순서를 매길 경우)
          - <ul>
                <li> Item 1 </li>
                <li> Item 2 </li>
            </ul>
      - Line breaks : <br> -> '/n'
          - html 파일에 태그사이에 엔터를 쳐도 브라우저는 인식이 불가 -> <br> 사용
      
  - attributes
      - name/value pairs : name="values"
      - always specified in the start tag
      - 'class' : 클래스로 특정한 그룹의 엘리먼트들에게 properties를 적용
      - 'id' : 페이지에 있는 하나의 element에 유니크한 id를 줌
      - 'style' : 시각적 스타일을 특정하지만 이거로 하기보단 그냥 css로 꾸며줌
      - accesskey : 페이지에 있는 하나의 element를 빠르게 activate 또는 focus 할때 사용
      - etc
  
  - Images
      - Images (inline)
          <img src = "image1.jpg" alt = "image of Colleen"/>
      - 불러온 이미지의 사이즈가 너무크거나 작으면 이미지가 ugly 하게 렌더링 될 가능성이 높기에 이미지 에디터 같은 것으로 보여주고 싶은 이미지를 원하는 픽셀값으로 조정후에 적용하는 것도 좋은 방법
      - image Attributes
          - src : image filename
          - alt : alternative text, 이미지 불러오기를 실패한 경우 보여줄 text
          - title : 마우스 커서를 올렸을 경우 보여지는 text
          - class : extra formatting (ex. for size of content etc...), group of elements
          - href : link to urls

  - Special Entities
      - tag가 '<' & '>' 를 사용하기 때문에 ...
          - < (보다 작다) : &lt;
          - > (보다 크다) : &gt;
          - blank space : &nbsp;
          - & : &amp;
          - etc
          
# Semantic Tags











