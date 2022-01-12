import React from 'react';
import { CustomInput, CustomLabel } from './styles';

export interface IProps {
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputName: string;
}

const CheckBox = ({ onchange, inputName }: IProps) => {
    return (
        <CustomLabel>
            <CustomInput
                type="checkbox"
                className="filterInput"
                onChange={onchange}
            />
            {inputName}
        </CustomLabel>
    );
};

export default CheckBox;
