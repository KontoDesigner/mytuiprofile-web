import React from 'react'
import ReactSelect from 'react-select'

const MultiSelect = ({ options, value, onChange, disabled, valueKey, labelKey }) => (
    <ReactSelect
        disabled={disabled}
        options={options}
        value={value}
        onChange={onChange}
        isMulti
        getOptionLabel={option => option[labelKey]}
        getOptionValue={option => option[valueKey]}
    />
)

export default MultiSelect
