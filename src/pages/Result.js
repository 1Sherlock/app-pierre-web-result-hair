/**
 * Created by Sherlock on 03.02.2022.
 */

import React, {useEffect, useState} from 'react';
import axios from "axios";
import SpiderBar from "../components";
import ViewImages from "../components/ViewImages";
import {calculateValue} from "../tools";

const Result = (props) => {
    const [data, setData] = useState({});
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    useEffect(() => {
        if (props.location.search.includes('batch_id') && props.location.search.includes('customer_id')) {
            let temp = props.location.search?.split("&");
            let obj = {};
            temp[0] = temp[0].substr(1);
            console.log(temp)
            obj[temp[0].split('=')[0]] = temp[0].split('=')[1];
            obj[temp[1].split('=')[0]] = temp[1].split('=')[1];
            console.log(obj);
            axios.post("https://v2-app.chowis.com/api/customers/generate_token")
                .then(res => {
                    console.log(res.data.token);
                    axios.get("https://v2-app.chowis.com/api/customers/" + obj.customer_id, {
                        headers: {
                            'X-CHOWIS-TOKEN': res.data.token
                        }
                    })
                        .then(response => {
                            console.log(response)
                            setName(response.data.name);
                            setSurname(response.data.surname);
                        })
                })
            axios.get("https://v2-analysis.chowis.com:3331/web-result/cndphair/" + obj.batch_id)

                .then((res) => {
                    if (res.data.body) {
                        setData({
                            density: res.data.body.filter(item => item.measurement === "density")[0],
                            hairloss: res.data.body.filter(item => item.measurement === "hairloss")[0],
                            scalpKeratin: res.data.body.filter(item => item.measurement === "scalpKeratin")[0],
                            scalpRedness: res.data.body.filter(item => item.measurement === "scalpRedness")[0],
                            thickness: res.data.body.filter(item => item.measurement === "thickness")[0],
                        })
                    }
                    console.log(res);
                })
        }
    }, [])

    const getBackgroundColor = (item, value) => {
        if (item === 'density' || item === 'hairloss' || item === 'scalpKeratin' || item === 'scalpRedness' || item === "thickness") {
            if (value >= 0 && value <= 20) {
                return 'very-poor'
            } else if (value > 20 && value <= 40) {
                return 'poor'
            } else if (value > 40 && value <= 60) {
                return 'moderate'
            } else if (value > 60 && value <= 80) {
                return 'good'
            } else if (value > 80) {
                return 'excellent'
            }
        }
    }

    return (
        <div>
            <div className="header">
                <div className="header-logo">
                    <img src="/images/logo.svg" alt=""/>
                </div>
            </div>

            <div className="analysis-result">
                <div className="">
                    <div className="name-person">
                        <h5>{name && surname ? name + " " + surname + "-" : ""} ANALYSIS Result</h5>
                    </div>
                    {/*<p className="date-analysis">June 22, 2020 - 05:30:20</p>*/}
                    <p className="date-analysis">{data.density && (data.density.date.substr(0, 10) + " " + data.density.time.substr(0, 5))}</p>
                </div>
            </div>

            <div className="process-part">
                <div className="pores">
                    <div className="title-hyd">
                        <h5>Density</h5>
                        <p>Result : <span
                            className={`hyd-result ${getBackgroundColor('density', calculateValue('density', data.density?.value))}`}>{getBackgroundColor('density',calculateValue('density', data.density?.value))?.replace('-', ' ')}</span>
                        </p>
                    </div>

                    <div className="process-bar">
                        <div className="title-row">
                            <div className="box box-one">
                                <p>Very Poor</p>
                            </div>
                            <div className="box box-two">
                                <p>Poor</p>
                            </div>
                            <div className="box box-three">
                                <p>Moderate</p>
                            </div>
                            <div className="box box-four">
                                <p>Good</p>
                            </div>
                            <div className="box box-five">
                                <p>Excellent</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{width: calculateValue('density', data.density?.value) + "%"}}
                                 className={getBackgroundColor('density', calculateValue('density', data.density?.value))}/>
                        </div>
                    </div>

                    <div className="borders-row">
                        <div className="col-excellent">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-good">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-moderate">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-very-poor">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-poor">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                    </div>
                </div>

                <div className="pores">
                    <div className="title-hyd">
                        <h5>Hairloss</h5>
                        <p>Result : <span
                            className={`hyd-result ${getBackgroundColor('hairloss', calculateValue('hairloss', data.hairloss?.value))}`}>{getBackgroundColor('hairloss', calculateValue('hairloss', data.hairloss?.value))?.replace('-', ' ')}</span>
                        </p>
                    </div>

                    <div className="process-bar">
                        <div className="title-row">
                            <div className="box box-one">
                                <p>Very poor</p>
                            </div>
                            <div className="box box-two">
                                <p>Poor</p>
                            </div>
                            <div className="box box-three">
                                <p>Moderate</p>
                            </div>
                            <div className="box box-four">
                                <p>Good</p>
                            </div>
                            <div className="box box-five">
                                <p>Excellent</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{width: calculateValue('hairloss', data.hairloss?.value) + "%"}}
                                 className={getBackgroundColor('hairloss', calculateValue('hairloss', data.hairloss?.value))}/>
                        </div>
                    </div>

                    <div className="borders-row">
                        <div className="col-excellent">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-good">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-moderate">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-very-poor">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-poor">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                    </div>
                </div>

                <div className="pores">
                    <div className="title-hyd">
                        <h5>Dead skin cells</h5>
                        <p>Result : <span
                            className={`hyd-result ${getBackgroundColor('scalpKeratin', calculateValue('scalpKeratin', data.scalpKeratin?.value))}`}>{getBackgroundColor('scalpKeratin', calculateValue('scalpKeratin', data.scalpKeratin?.value))?.replace('-', ' ')}</span>
                        </p>
                    </div>

                    <div className="process-bar">
                        <div className="title-row">
                            <div className="box box-one">
                                <p>Very poor</p>
                            </div>
                            <div className="box box-two">
                                <p>Poor</p>
                            </div>
                            <div className="box box-three">
                                <p>Moderate</p>
                            </div>
                            <div className="box box-four">
                                <p>Good</p>
                            </div>
                            <div className="box box-five">
                                <p>Excellent</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{width: calculateValue('scalpKeratin', data.scalpKeratin?.value) + "%"}}
                                 className={getBackgroundColor('scalpKeratin', calculateValue('scalpKeratin', data.scalpKeratin?.value))}/>
                        </div>
                    </div>

                    <div className="borders-row">
                        <div className="col-excellent">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-good">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-moderate">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-very-poor">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-poor">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                    </div>
                </div>

                <div className="pores">
                    <div className="title-hyd">
                        <h5>Sensitivity</h5>
                        <p>Result : <span
                            className={`hyd-result ${getBackgroundColor('scalpRedness', calculateValue('scalpRedness', data.scalpRedness?.value))}`}>{getBackgroundColor('scalpRedness', calculateValue('scalpRedness', data.scalpRedness?.value))?.replace('-', ' ')}</span>
                        </p>
                    </div>

                    <div className="process-bar">
                        <div className="title-row">
                            <div className="box box-one">
                                <p>Very poor</p>
                            </div>
                            <div className="box box-two">
                                <p>Poor</p>
                            </div>
                            <div className="box box-three">
                                <p>Moderate</p>
                            </div>
                            <div className="box box-four">
                                <p>Good</p>
                            </div>
                            <div className="box box-five">
                                <p>Excellent</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{width: calculateValue('scalpRedness', data.scalpRedness?.value) + "%"}}
                                 className={getBackgroundColor('scalpRedness', calculateValue('scalpRedness', data.scalpRedness?.value))}/>
                        </div>
                    </div>

                    <div className="borders-row">
                        <div className="col-excellent">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-good">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-moderate">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-very-poor">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-poor">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                    </div>
                </div>

                <div className="pores">
                    <div className="title-hyd">
                        <h5>Thickness</h5>
                        <p>Result : <span
                            className={`hyd-result ${getBackgroundColor('thickness', calculateValue('thickness', data.thickness?.value))}`}>{getBackgroundColor('thickness', calculateValue('thickness', data.thickness?.value))?.replace('-', ' ')}</span>
                        </p>
                    </div>

                    <div className="process-bar">
                        <div className="title-row">
                            <div className="box box-one">
                                <p>Very poor</p>
                            </div>
                            <div className="box box-two">
                                <p>Poor</p>
                            </div>
                            <div className="box box-three">
                                <p>Moderate</p>
                            </div>
                            <div className="box box-four">
                                <p>Good</p>
                            </div>
                            <div className="box box-five">
                                <p>Excellent</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{width: calculateValue('thickness', data.thickness?.value) + "%"}}
                                 className={getBackgroundColor('thickness', calculateValue('thickness', data.thickness?.value))}/>
                        </div>
                    </div>

                    <div className="borders-row">
                        <div className="col-excellent">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-good">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-moderate">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-very-poor">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                        <div className="col-poor">
                            <div className="col-w-50"></div>
                            <div className="col-w-50"></div>
                        </div>
                    </div>
                </div>

                {/*<div className="sensitivity">*/}
                {/*    <div className="title-hyd">*/}
                {/*        <h5>Skin Sensitivity</h5>*/}
                {/*        <p>Result : <span className="hyd-result">Good</span></p>*/}
                {/*    </div>*/}

                {/*    <div className="process-bar">*/}
                {/*        <div className="title-row">*/}
                {/*            <div className="box">*/}
                {/*                <p>Very poor</p>*/}
                {/*            </div>*/}
                {/*            <div className="box">*/}
                {/*                <p>Poor</p>*/}
                {/*            </div>*/}
                {/*            <div className="box">*/}
                {/*                <p>Moderate</p>*/}
                {/*            </div>*/}
                {/*            <div className="box">*/}
                {/*                <p>Good</p>*/}
                {/*            </div>*/}
                {/*            <div className="box">*/}
                {/*                <p>Excellent</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="progress">*/}
                {/*            <div></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="borders-row">*/}
                {/*        <div className="col-w-20">*/}
                {/*            <div className="col-w-50"></div>*/}
                {/*            <div className="col-w-50"></div>*/}
                {/*        </div>*/}
                {/*        <div className="col-w-20">*/}
                {/*            <div className="col-w-50"></div>*/}
                {/*            <div className="col-w-50"></div>*/}
                {/*        </div>*/}
                {/*        <div className="col-w-20">*/}
                {/*            <div className="col-w-50"></div>*/}
                {/*            <div className="col-w-50"></div>*/}
                {/*        </div>*/}
                {/*        <div className="col-w-20">*/}
                {/*            <div className="col-w-50"></div>*/}
                {/*            <div className="col-w-50"></div>*/}
                {/*        </div>*/}
                {/*        <div className="col-w-20">*/}
                {/*            <div className="col-w-50"></div>*/}
                {/*            <div className="col-w-50"></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>


            <SpiderBar data={data}/>
            <ViewImages data={data}/>
        </div>
    );
};

export default Result;