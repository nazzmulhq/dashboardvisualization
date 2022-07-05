import React, { ReactElement } from 'react';
import { FilterOptionType } from '../constants';
import DropdownMultipleField from '../SelectAll/Dropdown';
import DropdownSingleField from '../SelectOne/Dropdown';

export default function DropdownField(prop: FilterOptionType) {
    const renderDropdown = (field: FilterOptionType): ReactElement => {
        return field.multiple ? <DropdownMultipleField {...prop} /> : <DropdownSingleField {...prop} />;
    };

    return <React.Fragment>{renderDropdown(prop)}</React.Fragment>;
}
