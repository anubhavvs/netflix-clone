import React from 'react';
import { useContent } from '../hooks';
import { BrowserContainer } from '../containers/browse'

export default function Browse() {
    const { series } = useContent('series');
    const { films } = useContent('films');

    return (
        <p>Browse Page</p>
    )
}