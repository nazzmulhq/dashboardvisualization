import React from 'react';
import {
    CHECKBOX,
    DATE,
    DATE_RANGE,
    DATE_TIME,
    DROPDOWN,
    DROPDOWN_WITH_CHECKBOX,
    FilterOptionType,
    NUMBER,
    RADIO,
    TEXT,
    TIME
} from './constants';
import DateField from './Date';
import DateRangeField from './DateRange';
import DateTimeField from './DateTime';
import DropdownField from './Dropdown';
import NumberField from './Number';
import CheckboxField from './SelectAll/Checkbox';
import DropdownWithCheckbox from './SelectAll/DropdownWithCheckbox';
import RadioField from './SelectOne/Radio';
import TextField from './Text';
import TimeField from './Time';
export default function RenderField(field: FilterOptionType) {
    switch (field.appearance) {
        case TEXT:
            return <TextField {...field} />;

        case NUMBER:
            return <NumberField {...field} />;

        case DATE_RANGE:
            return <DateRangeField {...field} />;

        case RADIO:
            return <RadioField {...field} />;

        case CHECKBOX:
            return <CheckboxField {...field} />;

        case DROPDOWN:
            return <DropdownField {...field} />;

        case DATE:
            return <DateField {...field} />;

        case TIME:
            return <TimeField {...field} />;

        case DATE_TIME:
            return <DateTimeField {...field} />;

        case DROPDOWN_WITH_CHECKBOX:
            return <DropdownWithCheckbox {...field} />;

        default:
            return <> default </>;
    }
}
