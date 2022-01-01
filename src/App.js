import { BasicTitle } from './components/BasicTitle';
import { DefaultButton, HipsterButton, BetterButton } from './components/DefaultButton';

const App = () => {
  return (
    <>
      <BasicTitle>hello world</BasicTitle>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>click me</HipsterButton>
      <BetterButton message={'Hola'}></BetterButton>
    </>
  );
};

export default App;
