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
  - 보안에 강한 Chrome \*

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

  - [head] : 유저가 눈으로 확인 불가능한 것의 대부분이 여기에 포함됨 -> meta data 같은 사용자들이 신경쓰지 않는 것들
  - [body] : 유저에게 보여지는 부분으로 html5의 대부분의 태그들이 여기에 속함
    -> Display content

- Three part of a well-formed document

  - Doctype : 사용할 HTML의 버전

    [!DOCTYPE html]

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
  - start tag 와 close tag 사이에 text를 타이핑할 여지가 없는 tag들 (ex. [image])은 self closing tag를 사용
- Display
  - display types의 가장 보편 적인 두 가지는 block & inline
  - block 태그는 높이와 폭에 대한 값을 특정할 수 있음 (default : whole width) -> 서로다른 block 태그를 다른 라인에 출력
  - inline 태그는 높이와 폭에 대한 값을 특정할 수 없음 (해당 element를 포함할 수 있는 충분한 크기를 알아서 사용) -> 서로다른 inline 태그를 같은 라인에 출력
- Common Tags

- Headings (block) - h1, h2, ..., h6 
  - 이 태그들은 syntax & semantics 둘 다 가지고 있음 - syntax : 브라우저야 h1 태그에 해당하는 text들은 가장 크고 가장 두꺼운 글씨체로 만들어줘 - semantics : h1의 내용은 h5의 내용보다 훨씬 더 중요하다는 것을 암시(또는 의미함)

    - Paragraphs (block)
      - [p] ... [/p]
      - p tag 내부에는 오직 inline elements만 들어갈 수 있음 (text, some pictures ...)
    - Divs (block)
      - [div] ... </div>
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
      - title : 브라우저 탭에 보여지는 text
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

- 어떻게 하면 사람들에게 접근성이 좋은 웹 페이지를 만들지? (How to Design)

  - 코딩하기 전에 페이지 디자인을 먼저 구성
  - <div> 로 블록단위를 나눔 (그룹화)
    (ex. 
    <div class = "header">...</div>
    <div class = "section">...</div>
    <div class = "footer">...</div>)

- header tag

  - <header>는 페이지의 title 또는 navigation links를 달아 둘때 사용됨
  - 'head' 태그는 메타데이터를 위한 것, 'header' 태그와 헷갈리지 않도록 !

- nav tag
  - <nav>는 같은 웹 페이지 그룹 내의 다른 페이지로 가는 링크(href)를 달아 둘 때 사용(또는 페이지 안에있는 부분으로 가는 ~)
  - 페이스북, 네이버 같은 다른 페이지로 가는 링크를 달아둘 때 사용하는 것이 아님!
  (ex.
  <nav>
    <ul>
      <li><a herf="overview">Overview</a></li>
      <li><a herf="history">History</a></li>
    </ul>
  </nav>
  )
  - 보통 <nav> 는 <header> 안에 있음
- footer tag

  - copyright data, related documents, links to Corp. social media etc 를 달아 둘 때 사용하는 태그.
  - 페이지 제일 아래에 위치
  (ex.
  <footer>
    &copy; 2021 by Jindorry<br>
    <a href="http://www.jindol.com">My SNS</a>
  </footer>
  )

- figure tag

  - More semantics than <img>.
  - 캡션을 넣을 수 있음(<figcaption>)
  - 다양한 리소스를 첨부가능 (ex. gif) -> (확실치는 않은 내용)

  (ex.
  <figure>
    <img src="sunset.gif" alt = "Incheon sunset">
    <figcaption> A sunset over Incheon shore
    </figcaption>
  </figure>
  )
  - 근데 <figcaption> 은 잘 사용안한다네

- Other New Tags

  - Structural Elements
    : article, aside, main, menuitem, summary, section
  - Form Elements
    : datalist, keygen, output
  - InputTypes
    : color, date, email, list
    - 모바일 폰으로 입력칸을 채울 때 입력내용에 따라 키보드가 다르게 팝업되는데, 이게 위의 color, date ... 의 타입을 사용해서 구현된 것임
  - Graphics Elements
    : canvas, svg
  - Media Elements
    : audio, embed, source, track, video

- <div>는 페이지의 부분부분을 그룹화 할 때만 사용하는 것이 좋고, 그룹내의 태그들은 그 보여줄 데이터에 맞는 태그들을 사용하는 것이 좋음

# Every web page has three main parts
- Doctype : 브라우저야 난 html5를 사용할 것이야
- Meta-Data : 어떤 언어를 사용하고, 페이지의 title은 무엇이고 ~
- Displayable content : 페이지위의 컨텐츠들

# ! + Tab
- html 기본양식 채워줌

# Images - it's more than the tag
- 다양한 파일 타입들을 지원
  - .jpg & .jpeg, GIF and PNG
  - SVG & BMP(bitmap)
  - 파일 확장자를 반드시 포함시켜야함
- 모든 이미지는 다운로드 되기 때문에 파일 사이즈가 페이지 렌더링 속도에 영향을 줌
- 모든 이미지는 브라우저에 로드되기 위해 HTTP 요청을 수행

- Image Sizes
    - 디폴트로는, 브라우저가 해당이미지와 똑같은 픽셀 사이즈로 로드시킴
    - 픽셀 사이즈가 너무 크면 화면을 이리 저리 스크롤링해야지만 전체 픽셀을 확인 가능함
    - 제일 빠른 해결법은, 파일 에디터(그림판같은 것)를 사용해서 이미지 파일의 픽셀사이즈를 줄이는 것 (잘 사용안하는 방법)
    - <img>의 height & width attributes를 사용해서 변경해도됨 <img width="50%" height="100px"> 처럼
    - 높이, 폭의 값을 'px' 보단 '%' 를 사용하는 것이 반응형 웹페이지를 설계할 때 좋음

- Alternative Text Atrribute (alt)
  - 이미지 파일이 제대로 로드되지 않았을 때 대체되는 text
  - 'alt' 는 작성하는 것이 좋음 -> 검색 엔진이 이 컨텐츠가 뭔지 이해하도록 도울 수 있음 -> 자동차 사이트를 찾고있는 브라우저 사용자가 검색 창에 자동차를 치면 해당 'alt'에 'car'가 포함된 사이트를 우선순위에 올려둘 수 있으니까 (?) 라는 내 예상
  - 'alt'엔 어떤 text를 넣어야 할까?
      - 명확하고 간결한 text
      - 중복되는 text를 포함하지 않도록
      - "Picture of..", "graphic of .." 이런거 사용 NO NO! 간결하지 않음
      - 도무지 입력할 text가 생각나지 않다면, alt = "" 처럼 비워놔도 좋지만, 모든 'alt' 를 비워두진 않도록 하자



# Favicons (브라우저 탭의 페이지 아이콘이나 로고 :airplane: <- 뭐 요런 것들 )
- image/log/icon 을 <title>의 왼쪽에 넣을 때 사용
- 반드시 <head> 내부에 있어야함
- icon image 또는 .png 만 사용가능
(ex. 
<link rel="icon" type="image/png" href="logo.png" />
)

# Hyperlinks
- <a> (Anchor links)
    - <a href="http://www.ajou.ac.kr">Ajou Univ</a>
    - <a>는 hyper-reference & content가 필요함
        - href : reference to location of new content
        - content : 하이퍼링크 형태로 보여지는 text or image
- Types of links
  - Absolute reference
      - <a href="http://www.ajou.ac.kr">Ajou Univ</a> 같은 형태
      - fully formed의 url을 href 에 넣었을 경우
      - url에는 protocol, host, document 총 세가지 part가 있음

  - Relative ref
      - 같은 폴더에 있는 로컬파일에 링킹
      -> <a href="page2.html">Second Page</a>
      - 다른 "docs"라는 폴더에 있는 로컬파일에 링킹(html파일이면 로컬내의 html파일로 링킹되어 브라우저에 보여짐)
      -> <a href="docs/page2.html">Second Page</a>
      - 같은 파일 내의 다른 위치로 링킹
      -> <a href="#history">History section</a> -> 같은 페이지에 특정 블록으로 jump -> Embedded Link 라고도 함

- Targets
  - <a>는 target attribute를 통해 특정 목적의 행동을 취할 수 있음
      - _self : default action
      - _blank : open in new tab or window
      - _top & _parent : multiple windows frames 에 사용됨

# Multimedia
- video tag
  - video tag는 'src' 또는 <source> 로 비디오 소스를 가져올 수 있음
  - 자주 같이 사용되는 attr
      - height, width
      - autoplay
      - loop : 영상 끝나면 알아서 다시 재생될지 말지
      - controls : 유저가 영상을 멈추고 다시 재생시키는 권한을 줄지 말지
  - <video> 를 지원하지 않는 브라우저를 사용하는 유저들에게 "여기에는 재생되는 영상이 있어야해!" 라는 걸 알려주기 위해선 <video>"here, A video should be located!"</video> 처럼 해 주는 것이 좋음

- audio tag
  - audio file : .mp3, .wav 지원
  - 자주 같이 사용되는 attr
      - autoplay, controls, loop
      - buffered
      - muted
      - volume

- Setiting clips
  - 특정한 시간대의 오디오나 비디오를 재생하고 싶을 때 'src' 확장자뒤에 아래 내용을 추가 (ex. .mp3#t = 15:35)
      - .ext#t =5, 25 (5 to 25 sec)
      - .ext#t =, 39 (처음부터 39초 까지)
      - .ext#t =, 1:38:45 (1분38초에 시작해서 45초 동안)
      - .ext#t =42 (42초 부터 시작)

※ HTML5 이후로 <video> 가 나왔기 때문에, 이 <video>를 지원하지 않는 브라우저가 존재함. 이런 브라우저들은 'Flash' 같은 plugin이 필요함

- Accessibility issues
  - <video> or <audio> 사용할 때, 지원하지 않는 브라우저를 사용하는 유저들을 위해 plugin 으로의 링크를 제공해주자
  - text decriptions을 포함하자
  - 멀티미디어 리소스를 남발하면 산만해질 수 있음

- Tables
  - 코딩전에 테이블 레이아웃을 디자인
      - rows & columns 설정
      - 어떤 특정한 rows/columns 를 확장(span) 할지
  - [table]
      - [th]...[/th] - attr_name_of_table (=table headings / auto bold)
      - [tr]...[/tr] - the rows
      - [td]...[/td] - the columns
  - Spanning Multiple Cells
      - 테이블의 grid 형태가 온전치 않을때 Span 을 사용
      - rowspan/colspan attr 사용해서 조정
  - The Border Attribute
      - [table] 에는 많은 attr이 있지만 .html 에서는 table attr을 이용하여 하는 스타일링을 피하고 .css으로 꾸며주는게 좋음
      (그냥 왠만하면 .html 에서의 스타일링은 피하고 .css 에서 스타일링 하는 게 좋을 거임)
  - Captions
      - 테이블에 특정한 텍스트를 링크할 때 h2 or h3 같은 heading을 넣는 것 보다는 caption 태그를 사용하는 것이 더 의미론적(semantics)으로 명확함

- Useful tags
    - for Generic(포괄적인 ~ 그룹형성)
        - [p] 
        - [div]
        - 위 태그들은 내 코드를 조직화 및 부분화를 잘 시켜줌
    - Semantic(Generic 내에서도 의미가 있는 부분) 
        - [header]
        - [nav]
        - [footer]
        - [figure]
    - Block Tags
        - Containers
            - [artice], [aside], [section], [main], etc
            - 의미가 비슷한 것들을 함께 넣을 때 사용하는 태그들
            - Generic 처럼 보이지만 코딩하다보면 그게 아니라는 것을 알게됨
        - [hr] : horizontal rule (do not contain any text at all)
            - 블록간의 공간을 나타내줄 때 사용
            - bottom border line 같은 느낌 (얇은 회색 직선)
        - [address]
            - default 로 *이탤릭체*로 보여짐
            - screen readers 같은 assistive devices가 빠르고 쉽게 내 address에 접근할 수 있도록 도와줌
        - [blockquote] -> 'cite' attr
            - 인용문을 표시할 때 사용하는 태그
            - default로 들여쓰기가 됨
            - 'cite' attr 은 인용문의 출처를 표시할 때 사용 -> cite="url"
            - 또 인용문의 출처를 적을 때 'cite' *tag* 를 사용하던데 이건 예시같은거 확인해 보자
        - [details] with [summary]
            - drop down 형태로 숨겨진 텍스트를 확인할 때 사용 (with summary tag)
            - firefox 에서는 지원을 안해서 그냥 열린채로 보여짐
    - Inline Tags
        - [span]
            - 대표적인 인라인 태그
            - 정해진 역할이 없음
            - styling with css
        - [cite] : 기울어진 글씨체, 하이퍼 링크 형태
        - [abbr] : abbreviation tag
            - 텍스트에 커서를 올리면 올라오는 네모 박스에 텍스트를 작성할 때 사용
        - [time] 
            - 브라우저에게 이 글이 언제 작성된 것인지 알려줌
            - datetime 을 표기할 때 사용
            - ex. [time datetime="2021-12-22T:07:15:15+09:00"]
            -> 서울 타임존에 있는 2021년 12월 22일 07시 15분 15초를 의미
        - [code]
            - 컴퓨터 코드의 일부분을 나타낼 때 사용
            - 기계언어, 파일 이름 등 컴퓨터가 인식할 수 있는 모든 문자열이 컴퓨터 코드에 포함됨
        - [sub] & [sup] (subscript & superscript)
            - 수학 공식을 적을 때 사용

- Tags that need "more" : JS와 함께 작성되어야 의미 있는 Tag들
  - [button]
  - [meter] : 'min', 'max', 'value' 이 세가지의 attr의 값을 정해서 value/(max-min) 비율로 누운 형태의 막대 그래플를 색칠(?)
  - [progress] : 진행 상태를 나타냄 [lllllll----] 요런 느낌으로
  - [iframe] : 다른 웹페이지를 보여주는 viewer 느낌
      - 'src' attr 에 있는 url의 웹페이지를 뷰어 형태로 보여줌
  - [bdo] (bi-directional orientation - 양방향)
      - 글자 거꾸로 쓸때 (난진석 -> 석진난)
      - dir = "rtl"(rigth to left) / "ltr"
  - [map] with [area] -> area tag로 클릭가능한 영역을 생성

- 가능한 한 가장 구체적인 태그를 사용(html의 모든 태그 기능을 굳이 사용하는 것을 지양)
- Validator 자주 사용하고, 또 많은 브라우저에 실행해보자

- Accessibility
  - 접근성이 좋은 웹페이지를 만드는게 정말 중요
  - 접근성이 좋은 웹페이지를 만드는 개발자가 가져야할 덕목
      - 항시 웹 접근성을 평가
      - 장애인들도 온라인 인프라를 접근할 수 있도록
          - 인지 장애 -> 정서불안, 난독증, 환공포증, 트라우마(PTSD)관련
          - 시각 장애 -> 글자크기, 색맹(약)컬러링
          - 청각 장애 -> 볼륨조절, 영상자막
          - 입력 관련 -> 키보드, 마우스
          - screen reader(화면 낭독 소프트웨어)가 대표적임
      - 변화하는 기술에 관심을 가짐
  - 그래서 접근성이 좋은 웹페이지란 게 뭔데?
      - 방대한, 가능한 한 많은 사람들이 접근하고 사용할 수 있는 웹
      - 사용자라는 것은 여러 장애인들을 포함
      - 접근 가능한 사용자들에게 제공하는 웹이 아닌 사용자들에게 접근 가능한 웹을 제공하는 마인드를 장착
      - 디바이스 환경에 독립적인 웹을 구축(모바일, 랩탑 etc)
      - 웹 규격을 고수(준수)
      - W3C WCAG 2.0 (Web Content Accessibility Guidelines) 의 네 가지 원칙!
          - Perceivable (인지가능한)
          - Operable (작동가능한)
          - Uderstandable (이해가능한)
          - Robust (탄탄한)
      - 화려하고 멋진 것에 초점을 두기보단 기본을 고수하고 기본에 충실한 것
      - HTML5 tag 들의 의미에 초점을 두어서 웹을 구성 
          - HTML5 의 tag들은 모두 만들어진 데는 다 이유가 있음
          - 각 tag들이 어디에서 적절하게 쓰이는 지 확실히 알고 필요에 따라 .html을 구성하면 좀 더 사용자들이 이해하기 쉽고 접근성이 좋은 웹구성이 가능함

- Validating Your Site (사이트 인증) (w3.validator 사용해서 ~)
    - validate 하는 이유 ?
        - 내가 개발한 웹 코드들이 보기엔 nice 할 수 도 있겠지만 여기서 check를 끝내는게 아님
        - 브라우저는 웹 코드의 에러를 발견하고 고치도록 프로그램 되어있음
        - 각 브라우저들 마다 웹 코드의 에러를 발견하고 고치는 과정이 다르고 모든 사람이 내가 테스트한 브라우저를 사용하는 것이 아니기 때문에 모든 브라우저에 대한 validation이 필요함
        - 내가 만든 웹사이트가 점점 더 복잡해 질 수록 숨겨진 문제들이 많아질 확률이 높음
    - Three approaches of Validation
        - validate by uri(or url)
            - validator에 내 사이트의 uri를 입력해서 확인
            - 유명한 사이트일 수록 여기서 뜨는 오류들이 많은 경향이 있음
            - 이 오류들을 체크해서 해결하지 않으면 안되는 것들에 대한 핸들링이 필요할 거임
        - validate by Filename
            - .html 파일 업로드
        - validate by Direct Input
            - 이거는 validator에 html code ctrl + c , v
    ※ 여기서 잠깐!
    - uri <-> url 차이 ?
        - uri 는 특정 리소스를 식별하는 통합 자원 식별자 (uniform resource identifier)를 의미, 웹 기술에서 사용하는 논리적 또는 물리적 리소스를 식벼랗는 고유한 문자열 시퀀스 ex. ISBN 0-486-12345-8
        - url 은 웹 주소 라고도 하며, 컴퓨터 네트워크 상에서 리소스가 어디 있는지 알려주기 위한 규약 (uri에 포함되는 개념)
        - uri 는 특정 리소스를 식별할 수 있는 정도의 레벨이고, url은 특정 리소스의 위치까지 특정할 수 있어야 함
        ex. naver.com/index.html (uri 이자 url)
        ex. naver.com/index (not url but uri) -> 이 경우엔 서버 내부에서 이를 처리해주어 index.html로 가리키게 함
    - Accessibility Validation
        - wave.webaim.org 에서 접근성 validation
        - 여기선 file 업로드나 코드 고대로 넣을 수 없고, url로 넣어줘야함
        - 위 사이트에 들어가서 url을 검색하는 것 보단, wave 확장프로그램 다운 받아서 validation 하고 싶은 사이트에 들어가서 버튼 하나 딸깍누르면 해당 페이지에서 accessibility validation 이 가능함
        - accessibility validation 에서 주로 나오는 에러
            - missing alternative text ([image]의 attr 인 'alt'에 할당된 text가 없을 경우) -> 매번 언급하는 것이지만, 이미지가 불러와 지지 않았을 때, 사용자들에게 혼란을 일으킬 수 있을 경우, [image] 에 있는 'alt' attr에 적절한 text를 넣어주는 것이 정말 중요 
            - empty links ([link]의 attr인 'href' 에 할당된 url 정보가 없을 경우)
            - redundant links ([link]의 attr인 'href' 에 불필요한 정보가 포함된 경우(불필요한 매개변수 들)) -> 이 url 을 주소창을 공유하거나 입력하면 원하는 웹사이트를 열 수는 있지만, 때로는 불필요한 문자열이 방해가 될 수 있음

- Testing your Site with Funkify
  - wave 처럼 확장프로그램으로 다운 후 버튼 하나로 딸깍
  - 장애나 트라우마를 가진 사람들이 이 웹페이지를 사용했을 때의 상황들을 재현하여 해당되는 사람들에게 웹페이지의 접근성에 대한 정성적 평가를 할 때 사용됨

- Hosting Your Site (내가 개발한 웹 사이트를 인터넷에 올려서 사람들이 볼 수 있게끔)
  - Domain Names
      - 도메인 네임은 1년 단위가 아닌 수년단위로 구매
      - 보편적으로 .com 을 구매하지만, .net, .biz 등 여러가지 해도 문제는 되지않음
      - 도메인 네임 그 자체로는 쓸모가 없음. 호스팅 서비스 없는 도메인 네임으로는 유저가 사이트에 있는 정보들을 확인 불가함(유저들이 브라우저에 렌더링되는 해당 파일들을 받아오지 못함)
  - Hosting Compainy
      - 호스팅이란 내 도메인 네임과 연결되는 (맵핑 되는) registered IP addr 이 필요함
      - 호스팅 서비스는 다양함 : Free(recommended at the first time), Mid-range, Full-service
      - Free hosting service
          - 도메인 네임에 대해 필요한 컨트롤이 없거나 적음
          - Limited tools : 기능이 적음 (뭐 이메일 기능이 없음 -> 내 도메인을 사용하는 이메일 기능)
          - Advertising and redirects : 광고가 여기 저기 들어가 있고, 내 사이트의 사용자로 인해 typo 가 발생하면(?) 친절한 경고를 주는 대신, 사용자에게 광고 사이트로 리다이렉트 해주는 경우가 발생
          - 하지만 Free service 만으로도 친숙한 룩과 느낌을 받을 수 있음
      - Paid hosting service (mid-range, full-service)
          - 수 많은 기능들을 사용할 수 있음 (해당 도메인의 이메일, 이메일 필터 기능)
          - 도메인 만의 데이터베이스, 리스트 서버, 이메일 등을 가지고 싶으면 paid services 를 이용하는 것이 좋음
          - technical support is avaliable -> 이메일 chat 같은 기능들
          - 하지만 paid service를 사용하기 전에 free service 한번 사용해 보고 그 다음에 결정하는 것이 좋음 -> free service 에서 제공하는 기능및 서포트만으로도 충분할 수 있기에

- CPanel
  - 내가 만든 웹사이트를 웹에 올릴 때 사용하는 인터페이스
      - Connecting to CPanel
          - CPanel 계정 생성 (url 하나당 계정이 하나 생성되나 봄)
          - CPanel에 연결하기 위해선 내 cPanel account 를 위한 url이 필요 -> domain name or hosting service domain name
          - CPanel 계정의 비밀번호는 꼭 어디 적어두라. 이거 잊어버리면 문제가 많아짐
      - CPanel의 File Manager 를 통해 웹 파일을 관리
      - File manager에 있는 public_html(or public) 디렉토리에는 사람들에게 보여져도 괜찮은 파일들만을 올려두자
      -> public_html 폴더에 image.html을 올림 / blarblar.com/image.html 을 입력하면 해당 파일이 브라우저에 렌더링 되는 것을 확인 가능함
      - 여기서 내 파일이 제대로 보여지지 않는다면 ??
          - wrong url을 입력했거나
          - CPanel에 파일을 올렸을 때 transfer가 오작동을 일으켰거나 -> 이 경우는 warning message 를 주기 때문에, 이런 message를 잘 확인하자
          - read access 가 없거나 -> CPanel 에서 파일 업로드 할 때 read access 에 대한 조정이 가능하니 여기 설정에 유의(User? Group? World?)
          - 예를들어 image.html을 올렸을 경우, html 소스내에 [img] 의 src attr 의 이미지 파일 루트를 확인해서 CPanel의 File manager에도 해당 루트에 파일이 있어야함 
      - CPanel의 버전은 내가 paid / free hosting service를 사용하는지에 따라 다름
      - 하지만 이 교수님은 CPanel로 파일 관리하는것을 비추함. 웬만하면 로컬에서 작업하라고 함
      - CPanel 관련해서는 나중에 웹 퍼블리싱할때 자세하게 알아보자
