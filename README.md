## React 
<a name="readme-top"></a>

#### React 프로젝트 생성

    > workspace 폴더로 이동
      > npm install -g yarn
      > npm -v
         npm : 이 시스템에서 스크립트를 실행할 수 없으므로...
      > get-ExecutionPolicy
         Restricted : default설정값으로, 스크립트 파일을 실행할 수 없음.
      > set-ExecutionPolicy RemoteSigned
      > npm install -g yarn
      > yarn -v
      > yarn global add create-react-app
            windows 보안에서 랜섬웨어 설정 끄기
      > yarn create react-app app
      > cd app
      > git clone을 받았다면 yarn add react-scripts
      > yarn start


#### 리액트 라이프사이클

      페이지에 컴포넌트가 생성되고, 수정되고, 사라지는 순서를 의미한다.
      React에서 클래스 컴포넌트를 사용하면, 9개의 메소드를 통해
      작업 흐름을 제어할 수 있다.
      will 문구가 포함된 메소드는 작업 전을 의미하며,
      Did 문구가 포함된 메소드는 작업 후를 의미한다.

      마운트 -> 업데이트 -> 언마운트

   마운트(mount)
      페이지에 컴포넌트가 나타나는 것.

      constructor: 새로운 컴포넌트를 생성할 때마다 실행
         ↓
      getDerivedStateFromProps: props를 state에 넣을 때 사용, 컴포넌트가 마운트될 때와 업데이트 될 때 실행
         ↓
      render: 준비해놓은 UI를 랜더링할 때 사용
         ↓
      componentDidMount: 페이지에 컴포넌트가 나타난 후 실행

   업데이트(update)
      1. props 값에 변화가 있을 때
      2. state 값에 변화가 있을 때
      3. 부모 컴포넌트가 리랜더링될 때
      4. forceUpdate()를 사용하여 강제로 랜더링을 할 때

      1. 2. 3. 4. 에 따른 변화
         ↓
      getDerivedStateFromProps: props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용
         ↓
      shouldComponentUpdate: true 리턴 시 다음 라이프사이클 메소드 계속 실행, false 리턴 시 작업 중지
         ↓
      render: 컴포넌트 리랜더링
         ↓
      getSnapshotBeforeUpdate: 컴포넌트 업데이트 직전에 실행
         ↓
      componentDidUpdate: 컴포넌트 업데이트 후 실행

   언마운트(unmount)
      컴포넌트가 페이지에서 사라지는 것.
      
      componentWillUnmount: 컴포넌트가 페이지에서 사라지기 직전에 실행


#### ▶ 참조 투명성

      입력을 받아서 입력받은 그대로 출력하는 함수를 참조에 투명하다고 하며 순수 함수(pure function)라고 한다.
      하지만 입력을 받았을 때 다른 결과로 출력하거나 외부 함수에 영향을 끼치는 함수를 참조에 불투명하다고 한다.
      이렇게 순수 함수가 아닌 함수에서 Side-Effect가 발생한다.
      리액트는 모든 함수를 순수 함수로 유지할 것을 권장하고 있으며, 이로 인해 컴포넌트 재사용성이 좋아지고
      오류 검사 및 테스트도 좋아진다.

      const Component({data}) {
         return <p>data</p>;
      }



#### ▶ Side-Effect

      함수 내 특정 동작이 함수 외부에 영향을 끼쳐, 프로그램의 동작을 이해하기 어렵게 만드는 행위.
      이를 발생시키는 로직을 분리하여 개발하면 순수 함수화가 가능하다.

      1. setTimeout, setInterval
         예측하기 어려운 함수 종료 후 시점에서 어떤 작업을 하고 싶을 경우

      2. 서버 통신
         사용자가 요청했을 때 이후 또는 직전에 어떤 작업을 하고 싶을 경우


#### ▶ useEffect

      Side-Effect를 따로 관리하여 컴포넌트가 최대한 순수 함수를 유지할 수 있도록 도와주는 함수
      useEffect()는 랜더링이 모두 끝난 다음에 실행된다.

      랜더링 될 때 마다 실행
      useEffect(() => {})
      
      최초 랜더링(마운트)할 때만 실행
      useEffect(() => {}, [])   

      특정 컴포넌트 변경 시 실행
      useEffect(() => {}, [state])


#### ▶ Redux

      상태 관리 라이브러리이며, 리액트 뿐만 아니라 모든 JS코드에서 작동된다.
      Flux 패턴을 기반으로 생성되었기 때문에 단방향으로 동작하여,
      흐름을 파악하기 쉽고 예측 가능하다.


#### ▶ Flux 패턴

      Action이 발생하면 Dispatcher를 통해 Store에 변경된 값이 저장된다.
      View -> Action -> Dispatcher -> Store
        ↑_______________________________↓



#### Redux 패턴

      Flux와는 다르게 하나의 App에 하나의 Store가 존재하고, Flux 패턴을 좀 더 쉽게 사용할 수 있는 라이브러리이다.
      Components -> Action -> Reducer -> Store -> State
          ↑_________________________________________↓

      1. 컴포넌트(Components)
         Action이 발생한다.
         나중에 변경된 state를 반영하기 위해서 Store가 subscribe(구독)을 해놓는다.

      2. 액션(Action)
         변화가 필요할 때 발생시키는 신호.
         dispatch()로 감싸서 Reducer로 전달된다.
         Action에는 type(구분점)을 필수로 담고 필요한 데이터(파라미터)가 있다면 같이 담긴다.
         이후 리듀서에 전달되기 전에 Store에서 state를 가져와 Action과 함께 리듀서에 전달된다.

      3. 리듀서(Reducer)
         전달받은 Action에서 type을 가져온 뒤 구분하여 state를 변경하는 등
         알맞는 로직(함수)이 실행되는 순수 함수이다.

      4. 스토어(Store)
         state를 저장하는 저장소이며,
         subscribe 해놓은 컴포넌트로 가서 변경된 state 값을 전달해준다.


#### Redux를 사용하는 이유

      컴포넌트의 개수가 늘어나고 구조가 복잡해지면, 관리해야 하는 state가 늘어나고,
      이를 props로 계속 전달하다보면 가독성이 떨어지고 전달을 목적으로 하는 props의 개수가
      늘어나기 때문에 비효율적이다. 또한 props 이름을 변경하게 된다면 모든 props 이름을 수정해야 하므로
      유지보수 및 코드 관리가 좋지 않다.
      따라서 Redux 라이브러리를 사용하게 되면, 하나의 store에 모든 state와 로직을 저장할 수 있으며,
      원하는 컴포넌트에서 바로 사용할 수 있다. 또한 로직을 따로 분리하여 분업이 가능하고 단방향으로 동작하기 때문에
      흐름을 예측하기 쉽다.
      하지만 컴포넌트 구조가 단순하고 소규모 프로젝트일 경우 굳이 Redux 라이브러리를 사용할 필요 없으며,
      무분별하게 사용하면 코드가 오히려 복잡해질 수 있기 때문에,
      여러 곳에서 공용으로 사용되는 state나 초기화되지 않고 계속 유지되어야 하는 state일 경우에만 사용하는 것이 바람직하다.

#### Redux 원칙

      1. 1개의 App에 1개의 Store만 존재해야 한다.
         여러 개의 Stroe가 있을 경우 코드를 찾아서 수정하는 것이 매우 어려워진다.
         따라서 여러 개의 reducer를 조합하여 하나의 Store로 생성해야 하며, 조합할 때에는
         combineReducers()를 사용해서 하나의 store로 묶어준다.

      2. state는 불변성을 가져야 한다.
         기존의 state는 수정하지 않고 새로운 객체를 넣어주어야 변경이 감지된다.
         또한 라이프사이클에서 이전 state 값을 기억시키기 위해서도 새로운 객체를 전달하여
         불변성을 유지해야 하고, 불변성을 가져야 하는 이유는 좋은 성능을 위해서 깊은 탐색이 아닌
         얕은 탐색으로 검사하기 때문이다.

      3. 리듀서는 반드시 순수 함수로 만들어야 한다.
         입력값과 출력값이 똑같아야 하며, state는 변경하지 말고 action을 통해
         변경한 새로운 state 객체를 만든 뒤 리턴해야 한다는 뜻이다.
         date, random(), fetch() 등과 같이 실행할 때마다 다른 결과 값이 나타나는 작업은
         리듀서 함수 밖에서 처리해주어야 한다.
         이러한 작업은 추후 미들웨어에서 작업하게 된다.



#### Middleware

      Redux의 기능을 확장시켜서 Action을 전달받아 로직을 처리한다.
      Reducer로 가기 전에 API 호출 및 예측 불가능한 로직들을 처리한 뒤 Reducer로 Action을 전달하여
      state가 update된다. 이로 인해 Reducer는 순수 함수를 유지할 수 있게 된다.
      즉, Reducer로 가기 전에 서버에 데이터 요청을 해서 값을 가져오라는 뜻이다.
               
                  API
                   ↕
      Components -> Action -> Middleware -> Reducer -> Store -> State
          ↑_______________________________________________________↓


      1. 컴포넌트(Components)
         Action이 발생한다.
         나중에 변경된 state를 반영하기 위해서 Store가 subscribe(구독)을 해놓는다.

      2. 액션(Action)
         변화가 필요할 때 발생시키는 신호.
         dispatch()로 감싸서 Reducer로 전달된다.
         Action에는 type(구분점)을 필수로 담고 필요한 데이터(파라미터)가 있다면 같이 담긴다.
         이후 리듀서에 전달되기 전에 Store에서 state를 가져와 Action과 함께 middleware가 작동한다.

      3. 미들웨어(Middleware)
         Action과 state를 전달받아서 Side Effect 코드를 실행한다.
         이후 Action과 state를 리듀서로 전달한다.

      4. 리듀서(Reducer)
         전달받은 Action에서 type을 가져온 뒤 구분하여
         state를 변경하는 등 알맞는 로직(함수)이 실행된다.

      5. 스토어(Store)
         state를 저장하는 저장소이며,
         subscribe 해놓은 컴포넌트로 가서 변경된 state 값을 전달해준다.


#### 정리

      Component에서 버튼을 클릭해서
      해당 액션이 발생하고
      액션을 미들웨어가 가로채서
      type이 "가져와 서버 데이터!"일 때
      type에 맞는 saga 함수가 실행되어 API를 통해 데이터를 가져오고,
      가져온 데이터와 type을 reducer에게 전달하여 그 다음 어떤 로직을 수행할 지 알게 하고,
      store의 state에 미들웨어에서 가져온 데이터를 넣어주고,
      구독한 Component에 state를 전달해준다.


#### Routing

      클라이언트가 요청한 URL을 분석하여 알맞는 페이지로 응답하는 것.
      여러 페이지로 구성된 웹 애플리케이션을 만들 때 사용한다.

#### 정리

      여러 개의 페이지로 이루어진 홈페이지이다.
      클라이언트가 서버에 요청을 보내면 서버에서 랜더링한 뒤 클라이언트에 응답해주는
      SSR(Server Side Rendering) 방식을 사용한다.
      매번 이동 시 새로고침되기 때문에 깜빡임 현상이 발생할 수 밖에 없다.

#### MPA(Multiple Page Application)

      Component에서 버튼을 클릭해서
      해당 액션이 발생하고
      액션을 미들웨어가 가로채서
      type이 "가져와 서버 데이터!"일 때
      type에 맞는 saga 함수가 실행되어 API를 통해 데이터를 가져오고,
      가져온 데이터와 type을 reducer에게 전달하여 그 다음 어떤 로직을 수행할 지 알게 하고,
      store의 state에 미들웨어에서 가져온 데이터를 넣어주고,
      구독한 Component에 state를 전달해준다.

#### SPA(Single Page Application)

      하나의 페이지로 이루어진 애플리케이션을 의미하며,
      페이지를 딱 한 개만 받아온 뒤 필요한 데이터만 받아와서 화면을 업데이트하는 것.
      링크를 클릭하면 경로가 바뀌며 히스토리에도 남기 때문에 클라이언트 입장에서는
      여러 페이지가 존재하는 것처럼 보인다.
      하지만 경로가 바뀌어도 주소창의 경로만 변경되고 기존 페이지는 유지하며
      다른 페이지의 데이터를 보여주게 되는 것이다.
      CSR(Client Side Rendering) 방식을 사용한다.
      페이지 이동(불러오기)에 대한 속도가 굉장히 빠르다. 그러나 비어 있는 HTML문서가 먼저 도착한 뒤
      JS 연산 및 데이터 요청이 시작되기 때문에, 데이터 분석 또는 검색 엔진 적용이 어렵다.


#### SPA 구조

      1. BrowserRouter로 감싸기
      2. Routes로 감싸기
      3. Route로 경로 및 실행할 컴포넌트 설정하기
      4. Link를 사용하여 이동하기

#### URL 파라미터와 쿼리스트링

      - URL 파라미터(useParams())
         URL에 경로로 작성하여 값을 전달하는 방식

      - 쿼리 스트링(useSearchParams())
         URL 경로 뒤에 ?로 시작하여 key=value 형식으로 값을 전달하거나
         값이 여러 개일 경우 &를 연결하여 값을 전달하는 방식
   
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>