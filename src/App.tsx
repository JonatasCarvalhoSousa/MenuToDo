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
    Activity, 
    Edit,  
} from 'react-feather';

const App = () => {
    const [open, setOpen] = useState(true);
    const routerMatch = useRouteMatch();

    return (
        <>
            <Wrapper>
                <HeaderMenu>
                    <h1>Lista de Tarefas</h1>
                    <OptionMenu 
                        open={open} 
                        onClick={() => setOpen(!open)}>
                        <div />
                        <div />
                        <div />
                    </OptionMenu>
                </HeaderMenu>
                <h2>Abra o Menu, veja suas vantagens e cadastre suas tarefas</h2>
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
                        to='/historiaTodo'
                        style={{textDecoration: 'none'}}
                    >
                        <LinkElement>
                            <List color='#CACACA' />
                            <StrongText
                                color={routerMatch.path === "/roundconfig" ? "active" : "deactive"}
                            >Historia sobre Lista de Tarefas</StrongText>
                        </LinkElement>
                    </Link>

                    <Link 
                        to='/VantagensTodo'
                        style={{textDecoration: 'none'}}
                    >
                        <LinkElement>
                            <Activity color='#CACACA'/>
                            <StrongText
                                color={routerMatch.path === '/inspection' ? 'active' : 'deactive'}
                            >Vantagens sobre lista de tarefas</StrongText>
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
                            >Cadastrar tarefas</StrongText>
                        </LinkElement>
                    </Link>
                </LinksDiv>
            </Wrapper>
        </>
    );
}

export default App; 