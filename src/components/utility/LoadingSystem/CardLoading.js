import React from 'react';
import { Panel, Placeholder } from 'rsuite';

const CardLoading = () => {
    const { Paragraph } = Placeholder
    return (
        <div>
            <Panel>
                <Paragraph active/>
                <Panel>
                    <Paragraph active/>
                </Panel>
            </Panel>

        </div>
    );
};

export default CardLoading;