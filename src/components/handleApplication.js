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

const handleApplicationDatePicker = (stateProp, field, date, _this) => {
    let val = ''

    //Picker
    if (date._d) {
        val = date._d
    }

    //Manual
    if (!date._d) {
        val = date
    }

    let application = Object.assign({}, _this.state[stateProp])

    application[field] = val

    _this.setState({ [stateProp]: application })
}

const validSave = (fApplication, sApplication) => {
    //f
    if (fApplication.firstDest && fApplication.firstDest !== '' && (!fApplication.firstJobTitle || fApplication.firstJobTitle === '')) {
        return false
    }

    if (fApplication.secondDest && fApplication.secondDest !== '' && (!fApplication.secondJobTitle || fApplication.secondJobTitle === '')) {
        return false
    }

    if (fApplication.thirdDest && fApplication.thirdDest !== '' && (!fApplication.thirdJobTitle || fApplication.thirdJobTitle === '')) {
        return false
    }

    if (fApplication.fourthDest && fApplication.fourthDest !== '' && (!fApplication.fourthJobTitle || fApplication.fourthJobTitle === '')) {
        return false
    }

    //s
    if (sApplication.firstDest && sApplication.firstDest !== '' && (!sApplication.firstJobTitle || sApplication.firstJobTitle === '')) {
        return false
    }

    if (sApplication.secondDest && sApplication.secondDest !== '' && (!sApplication.secondJobTitle || sApplication.secondJobTitle === '')) {
        return false
    }

    if (sApplication.thirdDest && sApplication.thirdDest !== '' && (!sApplication.thirdJobTitle || sApplication.thirdJobTitle === '')) {
        return false
    }

    if (sApplication.fourthDest && sApplication.fourthDest !== '' && (!sApplication.fourthJobTitle || sApplication.fourthJobTitle === '')) {
        return false
    }

    //f
    if (
        fApplication.firstDest &&
        fApplication.firstDest !== '' &&
        (fApplication.firstDest === fApplication.secondDest ||
            fApplication.firstDest === fApplication.thirdDest ||
            fApplication.firstDest === fApplication.fourthDest)
    ) {
        return false
    }

    if (
        fApplication.secondDest &&
        fApplication.secondDest !== '' &&
        (fApplication.secondDest === fApplication.firstDest ||
            fApplication.secondDest === fApplication.thirdDest ||
            fApplication.secondDest === fApplication.fourthDest)
    ) {
        return false
    }

    if (
        fApplication.thirdDest &&
        fApplication.thirdDest !== '' &&
        (fApplication.thirdDest === fApplication.firstDest ||
            fApplication.thirdDest === fApplication.secondDest ||
            fApplication.thirdDest === fApplication.fourthDest)
    ) {
        return false
    }

    if (
        fApplication.fourthDest &&
        fApplication.fourthDest !== '' &&
        (fApplication.fourthDest === fApplication.firstDest ||
            fApplication.fourthDest === fApplication.secondDest ||
            fApplication.fourthDest === fApplication.thirdDest)
    ) {
        return false
    }

    //s
    if (
        sApplication.firstDest &&
        sApplication.firstDest !== '' &&
        (sApplication.firstDest === sApplication.secondDest ||
            sApplication.firstDest === sApplication.thirdDest ||
            sApplication.firstDest === sApplication.fourthDest)
    ) {
        return false
    }

    if (
        sApplication.secondDest &&
        sApplication.secondDest !== '' &&
        (sApplication.secondDest === sApplication.firstDest ||
            sApplication.secondDest === sApplication.thirdDest ||
            sApplication.secondDest === sApplication.fourthDest)
    ) {
        return false
    }

    if (
        sApplication.thirdDest &&
        sApplication.thirdDest !== '' &&
        (sApplication.thirdDest === sApplication.firstDest ||
            sApplication.thirdDest === sApplication.secondDest ||
            sApplication.thirdDest === sApplication.fourthDest)
    ) {
        return false
    }

    if (
        sApplication.fourthDest &&
        sApplication.fourthDest !== '' &&
        (sApplication.fourthDest === sApplication.firstDest ||
            sApplication.fourthDest === sApplication.secondDest ||
            sApplication.fourthDest === sApplication.thirdDest)
    ) {
        return false
    }

    return true
}

module.exports = {
    handleApplicationSelect,
    handleApplicationMultiSelect,
    handleApplicationInput,
    handleApplicationDatePicker,
    validSave
}
