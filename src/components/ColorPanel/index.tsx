import { Panel, TitlePanel } from "./styles";

export type BackgroundRGBA = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

type Props = {
  background: BackgroundRGBA;
};

const ColorPanel = ({ background: { red, blue, green, alpha } }: Props) => {
  return (
    <Panel
      data-cy="color-panel"
      style={{
        backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`,
      }}
    >
      <TitlePanel>
        {`<ColorPanel`}
        <br />
        &emsp;&emsp;{`red={${red}}`}
        <br />
        &emsp;&emsp;{`green={${green}}`}
        <br />
        &emsp;&emsp;{`blue={${blue}}`}
        <br />
        &emsp;&emsp;{`alpha={${alpha}} />`}
      </TitlePanel>
    </Panel>
  );
};

export default ColorPanel;
