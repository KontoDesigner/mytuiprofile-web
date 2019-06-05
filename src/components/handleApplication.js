const handleApplicationSelect = (stateProp, field, val, selector, _this) => {
    const id = val != null ? val[selector] : undefined

    let application = Object.assign({}, _this.state[stateProp])

    application[field] = id

    switch (field) {
        case 'firstDest':
            application.firstJobTitle = null
            break
        case 'secondDest':
            application.secondJobTitle = null
            break
        case 'thirdDest':
            application.thirdJobTitle = null
            break
        case 'fourthDest':
            application.fourthJobTitle = null
            break
        default:
    }

    _this.setState({ [stateProp]: application })
}

const handleApplicationMultiSelect = (stateProp, field, val, _this) => {
    if (val) {
        let application = Object.assign({}, _this.state[stateProp])

        application[field] = val

        _this.setState({ [stateProp]: application })
    } else {
        let application = Object.assign({}, _this.state[stateProp])

        application[field] = null

        _this.setState({ [stateProp]: application })
    }
}

const handleApplicationInput = (stateProp, field, val, _this) => {
    let application = Object.assign({}, _this.state[stateProp])

    application[field] = val.target.value

    _this.setState({ [stateProp]: application })
}

module.exports = {
    handleApplicationSelect,
    handleApplicationMultiSelect,
    handleApplicationInput
}
