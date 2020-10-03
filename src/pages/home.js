import React from 'react';

import { OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';

export default function Home() {
    return (
        <>
            <HeaderContainer>
            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Break />
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>GET STARTED</OptForm.Button>
            </OptForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}