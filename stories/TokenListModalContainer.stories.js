import { TokenListModalContainer } from "../components/TokenListModalContainer";

const WrapperComponent = () => {
  return (
    <div style={{height: '450px', width: '350px', background:'#D3D3D3', position: 'relative'}}>
      <TokenListModalContainer />
    </div>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/TokenListModal",
  component: WrapperComponent,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {};
