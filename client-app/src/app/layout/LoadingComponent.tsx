import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

interface Props {
    inverted?: Boolean;
    content?: string;
}

function LoadingComponent({ inverted = true, content = 'Loading...' }: Props) {
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content}></Loader>
        </Dimmer>
    )
}

export default LoadingComponent
