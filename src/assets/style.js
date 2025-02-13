import styled from "styled-components";

export const Component = styled.div `
    background-position: center;
    background-size: cover;
    background-image: url(${(props) => props.wallpaper});
    display: ${(props) => props.display};
    direction: ${(props) => props.direction};
    cursor: ${(props) => props.cursor};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}%;
    height:${(props) => props.height}em;
    position:${(props) => props.position};
    margin:${(props) => props.margin};
    margin-top:${(props) => props.mt}em;
    overflow:${(props) => props.scroll};
    overflow-y:${(props) => props.scrollY};
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background} !important;
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    -webkit-backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    opacity:${(props) => props.opacity};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    scale:${(props) => props.scale};
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
`

export const NavBar = styled.div `
    width: ${(props) => props.size}%;
    padding-top: ${(props) => props.py}em;
    padding-bottom: ${(props) => props.py}em;
    padding-left: ${(props) => props.px}em;
    padding-right: ${(props) => props.px}em;
    margin-top: .7em;
    border: 1.5px solid #197686;
    background: #031E23;
    border-radius: ${(props) => props.radius}em;
`

export const Portal = styled.div `
    margin-top: ${(props) => props.mt}em;
    width: ${(props) => props.size}em;
    padding-top: ${(props) => props.py}em;
    padding-bottom: ${(props) => props.py}em;
    padding-left: ${(props) => props.px}em;
    padding-right: ${(props) => props.px}em;
    border: 1px solid #0E464F;
    background: #041E23;
    border-radius: ${(props) => props.radius}em;
`

export const FormPortal = styled.div `
    margin-top: ${(props) => props.mt}em;
    width: ${(props) => props.size}em;
    padding-top: ${(props) => props.py}em;
    padding-bottom: ${(props) => props.py}em;
    padding-left: ${(props) => props.px}em;
    padding-right: ${(props) => props.px}em;
    border: 1px solid #0E464F;
    background: #08252B;
    border-radius: ${(props) => props.radius}em;
`

export const Text = styled.text`
    position:${(props) => props.position};
    font-size:${(props) => props.size}em !important;
    opacity:${(props) => props.opacity};
    scale:${(props) => props.scale};
    color: ${(props) => props.color};
    z-index: ${(props) => props.index};
    line-height: ${(props) => props.lnh};
`

export const MeterBar = styled.div`
    width: 100%;
    height: 5px;
    display: flex;
    overflow: hidden;
    justify-content: start;
    align-items: center;
    border-radius: 2em;
    background: #093239;
    margin-top: ${(props) => props.mt}em;
`

export const Meter = styled.div`
    width: ${(props) => props.count}%;
    height: inherit;
    border-radius: 4px;
    background: #24A0B5;
    transition: all .3s ease;
`

export const SpaceBetween = styled.div `
    width: 100%;
    height: 4px;
    background: #07373F;
    border-radius: 2em;
    margin: 1em auto;
`

export const Padx = styled.div `
    padding-left: .35em;
    padding-right: .35em;
`

export const Icon = styled.img`
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}em;
    position:${(props) => props.position};
    margin-top:${(props) => props.mt}em;
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    position:${(props) => props.position};
    scale:${(props) => props.scale};
    cursor:${(props) => props.cursor};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    left:${(props) => props.botom}em;
    transform:${(props) => props.transform}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
`