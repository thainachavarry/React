import React from 'react';
import styled from 'styled-components';

export const ContainerGeral = styled.nav` 
    max-width: 1240px;
    margin: 0 auto;

`;

export const Titulo = styled.h1`
font-size: 45px;
font-family: 'Roboto', sans-serif;
color: #612C94;
`;

export const ContainerTexto = styled.div`
width: 53%;
`;

export const ConteudoTextoHome = styled.p`
width: 94%;
font-size: 110%;
font-family: 'Open Sans', sans-serif;
`;

export const ContainerDentro = styled.nav`
display: inline-flex;
padding: 0 6px 10px 32px;
`;

export const ContainerCentroBotao = styled.div`
text-align: center;
margin-top: 12%;
`;

export const BotaoContato = styled.button`
background: rgb(97,44,148);
background: linear-gradient(168deg, rgba(97,44,148,1) 46%, rgba(118,45,186,1) 79%, rgba(104,11,194,1) 100%);
color:white;
width: 160px;
height: 40px;
padding:5px;
border: none;
font-family: 'Open Sans', sans-serif;
border-radius: 10px;
cursor:pointer;
margin-top: 2%;
margin-bottom: 10%;
`;

export const ContainerImagens = styled.div`
display: table ;
width: 20%
`;

export const Foot = styled.footer`
text-align: center;
margin: 0 auto;
margin-top: 5%;
width: 1240px;
border-top: solid 2px #612C94;

`;

