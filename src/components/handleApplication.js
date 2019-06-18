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
        fApplication.firstJobTitle &&
        fApplication.firstJobTitle !== '' &&
        ((fApplication.firstDest === fApplication.secondDest && fApplication.firstJobTitle === fApplication.secondJobTitle) ||
            (fApplication.firstDest === fApplication.thirdDest && fApplication.firstJobTitle === fApplication.thirdJobTitle) ||
            (fApplication.firstDest === fApplication.fourthDest && fApplication.firstJobTitle === fApplication.fourthJobTitle))
    ) {
        return false
    }

    if (
        fApplication.secondJobTitle &&
        fApplication.secondJobTitle !== '' &&
        ((fApplication.secondDest === fApplication.firstDest && fApplication.secondJobTitle === fApplication.firstJobTitle) ||
            (fApplication.secondDest === fApplication.thirdDest && fApplication.secondJobTitle === fApplication.thirdJobTitle) ||
            (fApplication.secondDest === fApplication.fourthDest && fApplication.secondJobTitle === fApplication.fourthJobTitle))
    ) {
        return false
    }

    if (
        fApplication.thirdJobTitle &&
        fApplication.thirdJobTitle !== '' &&
        ((fApplication.thirdDest === fApplication.firstDest && fApplication.thirdJobTitle === fApplication.firstJobTitle) ||
            (fApplication.thirdDest === fApplication.secondDest && fApplication.thirdJobTitle === fApplication.secondJobTitle) ||
            (fApplication.thirdDest === fApplication.fourthDest && fApplication.thirdJobTitle === fApplication.fourthJobTitle))
    ) {
        return false
    }

    if (
        fApplication.fourthJobTitle &&
        fApplication.fourthJobTitle !== '' &&
        ((fApplication.fourthDest === fApplication.firstDest && fApplication.fourthJobTitle === fApplication.firstJobTitle) ||
            (fApplication.fourthDest === fApplication.secondDest && fApplication.fourthJobTitle === fApplication.secondJobTitle) ||
            (fApplication.fourthDest === fApplication.thirdDest && fApplication.fourthJobTitle === fApplication.thirdJobTitle))
    ) {
        return false
    }

    //s
    if (
        sApplication.firstJobTitle &&
        sApplication.firstJobTitle !== '' &&
        ((sApplication.firstDest === sApplication.secondDest && sApplication.firstJobTitle === sApplication.secondJobTitle) ||
            (sApplication.firstDest === sApplication.thirdDest && sApplication.firstJobTitle === sApplication.thirdJobTitle) ||
            (sApplication.firstDest === sApplication.fourthDest && sApplication.firstJobTitle === sApplication.fourthJobTitle))
    ) {
        return false
    }

    if (
        sApplication.secondJobTitle &&
        sApplication.secondJobTitle !== '' &&
        ((sApplication.secondDest === sApplication.firstDest && sApplication.secondJobTitle === sApplication.firstJobTitle) ||
            (sApplication.secondDest === sApplication.thirdDest && sApplication.secondJobTitle === sApplication.thirdJobTitle) ||
            (sApplication.secondDest === sApplication.fourthDest && sApplication.secondJobTitle === sApplication.fourthJobTitle))
    ) {
        return false
    }

    if (
        sApplication.thirdJobTitle &&
        sApplication.thirdJobTitle !== '' &&
        ((sApplication.thirdDest === sApplication.firstDest && sApplication.thirdJobTitle === sApplication.firstJobTitle) ||
            (sApplication.thirdDest === sApplication.secondDest && sApplication.thirdJobTitle === sApplication.secondJobTitle) ||
            (sApplication.thirdDest === sApplication.fourthDest && sApplication.thirdJobTitle === sApplication.fourthJobTitle))
    ) {
        return false
    }

    if (
        sApplication.fourthJobTitle &&
        sApplication.fourthJobTitle !== '' &&
        ((sApplication.fourthDest === sApplication.firstDest && sApplication.fourthJobTitle === sApplication.firstJobTitle) ||
            (sApplication.fourthDest === sApplication.secondDest && sApplication.fourthJobTitle === sApplication.secondJobTitle) ||
            (sApplication.fourthDest === sApplication.thirdDest && sApplication.fourthJobTitle === sApplication.thirdJobTitle))
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
