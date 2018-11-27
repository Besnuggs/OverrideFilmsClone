import React from 'react'
import styled from 'styled-components'
import VimeoPlayer from '@u-wave/react-vimeo'

const Vimeo = styled(VimeoPlayer)`
position: relative;
padding-bottom: 56.25%;
padding-top: 0;
height: 0;
overflow: hidden;

iframe {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
`

export default Vimeo