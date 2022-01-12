import React from 'react';
import { BiSortUp } from 'react-icons/bi';
import { CheckBoxButton } from './style';

const FilterCheckBoxButton = (props: any) => {
    return (
        <CheckBoxButton
            type="button"
            id="check-box-button"
            // eslint-disable-next-line react/destructuring-assignment
            onClick={() => props.onClick()}
        >
            <i>
                <BiSortUp size="25px" />
            </i>
            <span>Filtrar Resultados</span>
        </CheckBoxButton>
    );
};

export default FilterCheckBoxButton;
