import styled from 'styled-components';
import Header from './Header';
import Main from './Main'

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(./fundo.jpg);
  background-attachment: fixed;
  background-size: 100% 100%;'
`;

function App() {
  return (
    <Base>
      <Header className="container" />
      <Main className="container" />
    </Base>
  );
}

export default App;
