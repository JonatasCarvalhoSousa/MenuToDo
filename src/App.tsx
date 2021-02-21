import React, {useState} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {
    Wrapper,
    HeaderMenu, 
    OptionMenu,
    LinksDiv, 
    LinkElement, 
    StrongText,
} from '../src/styled';
import {
    Home, 
    List, 
    Delete, 
    Edit, 
    Check, 
} from 'react-feather';

const App = () => {
    const [open, setOpen] = useState(true);

    const routerMatch = useRouteMatch();

    return (
        <>

            <Wrapper>
                <HeaderMenu>
                    <OptionMenu 
                        open={open} 
                        onClick={() => setOpen(!open)}>
                        <div />
                        <div />
                        <div />
                    </OptionMenu>
                </HeaderMenu>

                <LinksDiv open={open}>
                    <Link 
                        to="/"
                        style={{textDecoration: 'none'}}
                    >
                        <LinkElement>
                            <Home color='#CACACA' />
                            <StrongText
                                color={routerMatch.path === '/' ? 'active' : 'deactive'}
                            >MENU</StrongText>
                        </LinkElement>
                    </Link>

                    <Link 
                        to='/cadastro'
                        style={{textDecoration: 'none'}}
                    >
                        <LinkElement>
                            <Edit color='#CACACA'/>
                            <StrongText
                                color={routerMatch.path === '/navigation' ? 'active' : 'deactive'}
                            >Cadastro de TODO</StrongText>
                        </LinkElement>
                    </Link>

                    <Link 
                        to='/lista'
                        style={{textDecoration: 'none'}}
                    >
                        <LinkElement>
                            <List color='#CACACA' />
                            <StrongText
                                color={routerMatch.path === "/roundconfig" ? "active" : "deactive"}
                            >Lista de Tarefas</StrongText>
                        </LinkElement>
                    </Link>

                    <Link 
                        to='/Delete'
                        style={{textDecoration: 'none'}}
                    >
                        <LinkElement>
                            <Delete color='#CACACA'/>
                            <StrongText
                                color={routerMatch.path === '/inspection' ? 'active' : 'deactive'}
                            >Deletar item da Lista</StrongText>
                        </LinkElement>
                    </Link>

                    <Link 
                        to='/check'
                        style={{textDecoration: 'none'}}
                    >
                        <LinkElement>
                            <Check color='#CACACA' />
                            <StrongText
                                color={routerMatch.path === '/roundhistory' ? 'active' : 'deactive'}
                            >
                                Check list
                            </StrongText>
                        </LinkElement>
                    </Link>

                </LinksDiv>
            </Wrapper>
        </>
    );
}

export default App; 