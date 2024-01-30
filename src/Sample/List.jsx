import React from "react";
import { List,StandardListItem,ListMode } from '@ui5/webcomponents-react';

;

const onSelectionChange = (event) => {
    const { targetItem } = event.detail;
    console.log(targetItem.dataset.custom);
};
const ListItem = () => {
    return (
        <List mode={ListMode.MultiSelect} onSelectionChange={onSelectionChange}>
            <StandardListItem additionalText="3" data-custom="custom value of list item 1">
                List Item 1
            </StandardListItem>
            <StandardListItem additionalText="2" data-custom="custom value of list item 2">
                List Item 2
            </StandardListItem>
            <StandardListItem additionalText="1" data-custom="custom value of list item 3">
                List Item 3
            </StandardListItem>
        </List>
    );
}

export default ListItem;