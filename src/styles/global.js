import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing:0;
    outline:0;
}
:root{
    --color1: #dcdcdc;
    --color2: #002e4f;
    --color3: #0065a2;
    --color4: #00a5ff;
    --color5: #00efff;
    --color6: #312e38;
    --color7: #ffffff;
}
body{
    background-color:var(--color7);
    color:#312e38;
    -webkit-font-smoothing:antialiased !important
}
body, input, button{
    font-family:'Nunito', sans-serif;
    font-size:16px;
}
h1, h2, h3, h4, h5, h6, strong{
    font-weight:600;
}
button {
    cursor: pointer;
}
a{
    text-decoration:none;
}
`;
