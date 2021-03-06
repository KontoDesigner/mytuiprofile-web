const handleResignHistoryField = (event, _this) => {
    const field = event.target.name
    const val = event.target.value

    let resignHistory = Object.assign({}, _this.state.resignHistory)
    resignHistory[field] = val

    _this.setState({ resignHistory })
}

const handleResignHistorySelect = (field, val, selector, _this) => {
    const id = val != null ? val[selector] : undefined

    let resignHistory = Object.assign({}, _this.state.resignHistory)
    resignHistory[field] = id

    _this.setState({ resignHistory })
}

const handleResignHistoryDatePicker = (field, date, _this) => {
    let val = ''

    //Picker
    if (date._d) {
        val = date._d
    }

    //Manual
    if (!date._d) {
        val = date
    }

    let resignHistory = Object.assign({}, _this.state.resignHistory)
    resignHistory[field] = val

    _this.setState({ resignHistory })
}

const handleStaffField = (event, _this) => {
    const field = event.target.name
    const val = event.target.value

    let staff = Object.assign({}, _this.state.staff)
    staff[field] = val

    _this.setState({ staff })
}

const handleStaffSelect = (field, val, selector, _this) => {
    const id = val != null ? val[selector] : undefined

    let staff = Object.assign({}, _this.state.staff)
    staff[field] = id

    _this.setState({ staff })
}

const handleStaffMultiSelect = (field, val, selector, _this) => {
    if (val) {
        // let vals = val.map(function(m) {
        //     return m[selector]
        // })

        let staff = Object.assign({}, _this.state.staff)

        staff[field] = val

        _this.setState({ staff })
    } else {
        let staff = Object.assign({}, _this.state.staff)

        staff[field] = null

        this.setState({ staff })
    }
}

const handleStaffDatePicker = (field, date, _this) => {
    let val = ''

    //Picker
    if (date._d) {
        val = date._d
    }

    //Manual
    if (!date._d) {
        val = date
    }

    let staff = Object.assign({}, _this.state.staff)
    staff[field] = val

    _this.setState({ staff })
}

module.exports = {
    handleResignHistoryField,
    handleResignHistorySelect,
    handleResignHistoryDatePicker,
    handleStaffField,
    handleStaffSelect,
    handleStaffDatePicker,
    handleStaffMultiSelect
}
