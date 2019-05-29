## React JS fundamental

 - Just JavaScript
 - Composition : separately working
 - JSX : writing html with ReactJS
 - Unidirectional Dataflow : Data changes UI but No woring in opposite direction
----

Here cloning movie site using YTS.ag api

----
Transpier

    **Web Pack**

I m using "create react app"

 installation of create-react-app
 - `npm install -g create-react-app`
 - create-react-app {my-app} (8 or higher version of Node needed)
 - cd my-app/
 - npm start
 -> "http://localhost:3000/" (or pop up automatically)


### 1. Design Components



----

Props :  giving infromation to the child component


A main component has total data source


in case a component has many elements, it needs key unique.


----

Component LifeCycle

 - the order of components
 ex)
 1. Load Data
 2. processing Data
 3. ....


State : 리액트 컴포넌트 안에 있는 오브젝

loading state
- 필요한 데이터가 바로 즉시 존재하지 않는 경우
- 데이터 없이 Component만들고 API 에서 데이터들어오면 추가해줌


stateless component



Ajax
  fetch : get from url


Promise
 - Nicolas explains about Asynchronous
 - Promise is Asynchronous


Await : 해당 함수가 완료되면 다음을 실행함

Async :
