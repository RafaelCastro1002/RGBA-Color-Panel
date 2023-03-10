import { Panel, TitlePanel } from './styles'

export type BackgroundRGBA = {
    red: number
    green: number
    blue: number
    alpha: number
}

type Props = {
    background: BackgroundRGBA
}

const ColorPanel = ({ background: { red, blue, green, alpha }}: Props) => {
    return (
        <Panel style={{
            backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`
        }}>
            <TitlePanel>{`
                <ColorPanel
                    red={${red}}
                    green={${green}}
                    blue={${green}}
                    alpha={${alpha}} />
            `}</TitlePanel>
        </Panel>
    )
}

export default ColorPanel