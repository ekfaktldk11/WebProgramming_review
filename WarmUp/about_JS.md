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
    