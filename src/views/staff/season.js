import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import Select from '../../components/select'
import MultiSelect from '../../components/multiSelect'
import Datetime from 'react-datetime'

function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
    })
}

const Season = props => {
    let noWinterWorkReturn = null

    if (props.firstApplication === true) {
        noWinterWorkReturn = props.application.preferToWork.some(function(v) {
            return v.id.toLowerCase().indexOf('no winter work but would like to return') >= 0
        })
    }

    let aFewWeeksOnly = null
    let planToNotReturn = null

    if (props.firstApplication === false) {
        aFewWeeksOnly = props.application.preferToWork.some(function(v) {
            return v.id.toLowerCase().indexOf('a few weeks only') >= 0
        })

        planToNotReturn = props.application.preferToWork.some(function(v) {
            return v.id.toLowerCase().indexOf('plan to not return') >= 0
        })
    }

    const destinationsAll = props.destinations.filter(
        m =>
            (m.season === props.application.season || m.season === 'YR') &&
            //Source market is filtered on jobtitle
            props.jobTitles.some(function(v) {
                return v.destination.indexOf(m.id) >= 0 && (v.season === props.application.season || v.season === 'YR')
            })
    )

    const destinations = removeDuplicates(destinationsAll, 'id')

    const firstJobTitlesAll = props.jobTitles.filter(
        m => (m.season === props.application.season || m.season === 'YR') && m.destination === props.application.firstDest
    )

    const firstJobTitles = removeDuplicates(firstJobTitlesAll, 'id')

    const secondJobTitlesAll = props.jobTitles.filter(
        m => (m.season === props.application.season || m.season === 'YR') && m.destination === props.application.secondDest
    )

    const secondJobTitles = removeDuplicates(secondJobTitlesAll, 'id')

    const thirdJobTitlesAll = props.jobTitles.filter(
        m => (m.season === props.application.season || m.season === 'YR') && m.destination === props.application.thirdDest
    )

    const thirdJobTitles = removeDuplicates(thirdJobTitlesAll, 'id')

    const fourthJobTitlesAll = props.jobTitles.filter(
        m => (m.season === props.application.season || m.season === 'YR') && m.destination === props.application.fourthDest
    )

    const fourthJobTitles = removeDuplicates(fourthJobTitlesAll, 'id')

    let preferToWork = []

    if (props.application.season.includes('S')) {
        preferToWork = props.keywords
            .filter(ap => ap.ids === 'PreferToWork_Summer')[0]
            .keywordValues.split(',')
            .map(s => ({
                id: s,
                name: s
            }))
    } else {
        preferToWork = props.keywords
            .filter(ap => ap.ids === 'PreferToWork_Winter')[0]
            .keywordValues.split(',')
            .map(s => ({
                id: s,
                name: s
            }))
    }

    if (props.firstApplication === false && props.noWinterWorkResign === true) {
        return null
    }

    const preferToWorkSection = (
        <Col sm="12" md="6" lg="6" xl="6" style={{ marginBottom: '15px' }}>
            <label htmlFor="preferToWork">I would like to request to work {props.application.season}</label>

            <MultiSelect
                valueKey="id"
                labelKey="name"
                options={preferToWork}
                onChange={v => {
                    props.handleMultiSelect('preferToWork', v)
                }}
                value={props.application.preferToWork === '' ? null : props.application.preferToWork}
                placeholder="Select"
                className="form-group form-group-select"
            />
        </Col>
    )

    if (props.noWinterWorkResign === true || planToNotReturn === true) {
        return (
            <Card>
                <CardHeader className="card-header-work"> Placement {props.application.season} </CardHeader>
                <CardBody className="no-padding-bottom">
                    <div className="form-row">{preferToWorkSection}</div>
                </CardBody>
            </Card>
        )
    }

    if (noWinterWorkReturn !== null && noWinterWorkReturn === true) {
        return (
            <Card>
                <CardHeader className="card-header-work"> Placement {props.application.season} </CardHeader>
                <CardBody className="no-padding-bottom">
                    <div className="form-row">{preferToWorkSection}</div>
                </CardBody>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader className="card-header-work"> Placement {props.application.season} </CardHeader>
            <CardBody className="no-padding-bottom">
                <div className="form-row">
                    {preferToWorkSection}

                    {aFewWeeksOnly === true && (
                        <React.Fragment>
                            <Col sm="12" md="2" lg="2" xl="2" className="form-group">
                                <label htmlFor="workPeriodStart">From</label>

                                <Datetime
                                    className={'custom-datepicker'}
                                    id="workPeriodStart"
                                    onChange={v => {
                                        props.handleDate('workPeriodStart', v)
                                    }}
                                    value={props.application.workPeriodStart}
                                    timeFormat={false}
                                    dateFormat="YYYY-MM-DD"
                                    closeOnSelect
                                    utc={true}
                                    inputProps={{ placeholder: 'YYYY-MM-DD' }}
                                />
                            </Col>
                            <Col sm="12" md="2" lg="2" xl="2" className="form-group">
                                <label htmlFor="workPeriodEnd">To</label>

                                <Datetime
                                    className={'custom-datepicker'}
                                    id="workPeriodEnd"
                                    onChange={v => {
                                        props.handleDate('workPeriodEnd', v)
                                    }}
                                    value={props.application.workPeriodEnd}
                                    timeFormat={false}
                                    dateFormat="YYYY-MM-DD"
                                    closeOnSelect
                                    utc={true}
                                    inputProps={{ placeholder: 'YYYY-MM-DD' }}
                                />
                            </Col>
                        </React.Fragment>
                    )}

                    <Col sm="12" md="12" lg="12" xl="12">
                        <CardHeader className="card-header-subwork">
                            For season {props.application.season} I wish to work in the following destinations / positions
                        </CardHeader>
                        <CardBody className="no-padding-bottom" />
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                        <label htmlFor="Choice">Choice</label>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                        <label htmlFor="firstDest">Destination</label>

                        <Select
                            isClearable={true}
                            valueKey="id"
                            labelKey="name"
                            options={destinations}
                            //onChange={props.handleAppField}
                            onChange={v => {
                                props.handleSelect('firstDest', v, 'id')
                            }}
                            value={props.application.firstDest}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                        {props.application.firstDest &&
                            props.application.firstDest !== '' &&
                            (props.application.firstDest === props.application.secondDest ||
                                props.application.firstDest === props.application.thirdDest ||
                                props.application.firstDest === props.application.fourthDest) && (
                                <b className="card-text text-danger">Destination can only be selected once</b>
                            )}
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                        <label htmlFor="firstJobTitle">JobTitle</label>

                        <Select
                            isClearable={true}
                            //  multi={true}
                            id="firstJobTitle"
                            valueKey="id"
                            labelKey="name"
                            options={firstJobTitles}
                            onChange={v => {
                                props.handleSelect('firstJobTitle', v, 'id')
                            }}
                            value={props.application.firstJobTitle}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                        {props.application.firstDest &&
                            props.application.firstDest !== '' &&
                            (!props.application.firstJobTitle || props.application.firstJobTitle === '') && (
                                <b className="card-text text-danger">Field is required</b>
                            )}
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                        <label htmlFor="Choice">Choice</label>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                        <label htmlFor="secondDest">Destination</label>

                        <Select
                            isClearable={true}
                            //  multi={true}
                            id="secondDest"
                            valueKey="id"
                            labelKey="name"
                            options={destinations}
                            onChange={v => {
                                props.handleSelect('secondDest', v, 'id')
                            }}
                            value={props.application.secondDest}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                        {props.application.secondDest &&
                            props.application.secondDest !== '' &&
                            (props.application.secondDest === props.application.firstDest ||
                                props.application.secondDest === props.application.thirdDest ||
                                props.application.secondDest === props.application.fourthDest) && (
                                <b className="card-text text-danger">Destination can only be selected once</b>
                            )}
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                        <label htmlFor="secondJobTitle">JobTitle</label>

                        <Select
                            isClearable={true}
                            //  multi={true}
                            id="secondJobTitle"
                            valueKey="id"
                            labelKey="name"
                            options={secondJobTitles}
                            onChange={v => {
                                props.handleSelect('secondJobTitle', v, 'id')
                            }}
                            value={props.application.secondJobTitle}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                        {props.application.secondDest &&
                            props.application.secondDest !== '' &&
                            (!props.application.secondJobTitle || props.application.secondJobTitle === '') && (
                                <b className="card-text text-danger">Field is required</b>
                            )}
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                        <label htmlFor="firstDest">Choice</label>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                        <label htmlFor="thirdDest">Destination</label>

                        <Select
                            isClearable={true}
                            //  multi={true}
                            id="thirdDest"
                            valueKey="id"
                            labelKey="name"
                            options={destinations}
                            onChange={v => {
                                props.handleSelect('thirdDest', v, 'id')
                            }}
                            value={props.application.thirdDest}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                        {props.application.thirdDest &&
                            props.application.thirdDest !== '' &&
                            (props.application.thirdDest === props.application.firstDest ||
                                props.application.thirdDest === props.application.secondDest ||
                                props.application.thirdDest === props.application.fourthDest) && (
                                <b className="card-text text-danger">Destination can only be selected once</b>
                            )}
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                        <label htmlFor="thirdJobTitle">JobTitle</label>

                        <Select
                            isClearable={true}
                            //  multi={true}
                            id="thirdJobTitle"
                            valueKey="id"
                            labelKey="name"
                            options={thirdJobTitles}
                            onChange={v => {
                                props.handleSelect('thirdJobTitle', v, 'id')
                            }}
                            value={props.application.thirdJobTitle}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                        {props.application.thirdDest &&
                            props.application.thirdDest !== '' &&
                            (!props.application.thirdJobTitle || props.application.thirdJobTitle === '') && (
                                <b className="card-text text-danger">Field is required</b>
                            )}
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                        <label htmlFor="Choice">Choice</label>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                        <label htmlFor="fourthDest">Destination</label>

                        <Select
                            isClearable={true}
                            //  multi={true}
                            id="fourthDest"
                            valueKey="id"
                            labelKey="name"
                            options={destinations}
                            onChange={v => {
                                props.handleSelect('fourthDest', v, 'id')
                            }}
                            value={props.application.fourthDest}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                        {props.application.fourthDest &&
                            props.application.fourthDest !== '' &&
                            (props.application.fourthDest === props.application.firstDest ||
                                props.application.fourthDest === props.application.secondDest ||
                                props.application.fourthDest === props.application.thirdDest) && (
                                <b className="card-text text-danger">Destination can only be selected once</b>
                            )}
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                        <label htmlFor="fourthJobTitle">JobTitle</label>

                        <Select
                            isClearable={true}
                            //  multi={true}
                            id="fourthJobTitle"
                            valueKey="id"
                            labelKey="name"
                            options={fourthJobTitles}
                            onChange={v => {
                                props.handleSelect('fourthJobTitle', v, 'id')
                            }}
                            value={props.application.fourthJobTitle}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                        {props.application.fourthDest &&
                            props.application.fourthDest !== '' &&
                            (!props.application.fourthJobTitle || props.application.fourthJobTitle === '') && (
                                <b className="card-text text-danger">Field is required</b>
                            )}
                    </Col>
                </div>
            </CardBody>
        </Card>
    )
}

export default Season
