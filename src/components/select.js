import React from 'react'
import ReactSelect, { components } from 'react-select'

const Option = props => {
    const { data } = props

    return (
        <div title={data.title}>
            <components.Option data={data} {...props} />
        </div>
    )
}

const Select = ({ options, onChange, value, disabled, valueKey, labelKey, placeholder, isClearable = false }) => {
    return (
        <ReactSelect
            className={`select ${disabled === true ? 'disabled' : ''}`}
            isDisabled={disabled}
            options={options}
            value={options && value ? options.find(option => option[valueKey] === value) : ''}
            onChange={onChange}
            getOptionLabel={option => option[labelKey]}
            getOptionValue={option => option[valueKey]}
            isClearable={isClearable}
            placeholder={placeholder ? placeholder : 'Select'}
            isOptionDisabled={option => option.disabled === true}
            components={{
                Option
            }}
        />
    )
}

export default Select
