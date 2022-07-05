import React, { ReactElement } from 'react';
import { FilterSectionT, VisualizationT } from '../types';
import { DEFAULT, DRAWER } from './constants';
import FilterAccordion from './FilterAccordion';
import FilterDrawer from './FilterDrawer';
const FilterSection = ({ item }: FilterSectionT) => {
    const renderField = (item: VisualizationT): ReactElement => {
        switch (item.appearance) {
            case DRAWER:
                return <FilterDrawer item={item} dataObject={{}} />;
            case DEFAULT:
                return <FilterAccordion item={item} dataObject={{}} />;

            default:
                return <FilterAccordion item={item} dataObject={{}} />;
        }
    };

    return <>{renderField(item)}</>;
};

export default FilterSection;
