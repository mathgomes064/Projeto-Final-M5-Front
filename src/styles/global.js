import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
:root{
    --color-primary: #06C3BD;
    --color-primary-focus: #00EEE6;
    --background-color: #AFC5CC;
    --premium-detail: #FCCA46;
    --grey-1:#B1AFAF;
    --grey-2: #D9D9D9;
    --grey-3: #F1F1F1;
    --white: #FFFFFF;
    --black: #000000;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input, select, option {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: 'Inter', sans-serif;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default Global;
