// import { BasicTitle } from './components/BasicTitle';
// import { DefaultButton, HipsterButton, BetterButton } from './components/DefaultButton';
import ComplexTitle from "./components/ComplexTitle";

const App = () => {
  return (
    <>
      <div style={{ padding: '2rem' }}>
        <ComplexTitle />
      </div>
      {/* <BasicTitle>hello world</BasicTitle>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>click me</HipsterButton>
      <BetterButton message={'Hola'}></BetterButton> */}
    </>
  );
};

export default App;
