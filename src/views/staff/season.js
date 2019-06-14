import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import Select from '../../components/select'
import MultiSelect from '../../components/multiSelect'

const Season = props => {
    const destinations = props.destinations

    const firstJobTitles = props.jobTitles.filter(
        m => m.season === props.application.season && m.destination === props.application.firstDest && m.jobFamily === props.jobFamily
    )
    const secondJobTitles = props.jobTitles.filter(
        m => m.season === props.application.season && m.destination === props.application.secondDest && m.jobFamily === props.jobFamily
    )
    const thirdJobTitles = props.jobTitles.filter(
        m => m.season === props.application.season && m.destination === props.application.thirdDest && m.jobFamily === props.jobFamily
    )
    const fourthJobTitles = props.jobTitles.filter(
        m => m.season === props.application.season && m.destination === props.application.fourthDest && m.jobFamily === props.jobFamily
    )

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

    return (
        <Card>
            <CardHeader className="card-header-work"> Placement {props.application.season} </CardHeader>
            <CardBody className="no-padding-bottom">
                <div className="form-row">
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
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                        <label htmlFor="firstJobTitle">JobTitle</label>

                        <Select
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
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                        <label htmlFor="Choice">Choice</label>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                        <label htmlFor="secondDest">Destination</label>

                        <Select
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
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                        <label htmlFor="secondJobTitle">JobTitle</label>

                        <Select
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
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                        <label htmlFor="firstDest">Choice</label>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                        <label htmlFor="thirdDest">Destination</label>

                        <Select
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
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                        <label htmlFor="thirdJobTitle">JobTitle</label>

                        <Select
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
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                        <label htmlFor="Choice">Choice</label>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                        <label htmlFor="fourthDest">Destination</label>

                        <Select
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
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                        <label htmlFor="fourthJobTitle">JobTitle</label>

                        <Select
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
                    </Col>
                </div>
            </CardBody>
        </Card>
    )
}

export default Season
