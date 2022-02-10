/**
 * Created by Sherlock on 03.02.2022.
 */

import React, {useEffect, useState} from 'react';
import axios from "axios";
import SpiderBar from "../components";
import ViewImages from "../components/ViewImages";

const Result = (props) => {
    const [data, setData] = useState({});

    useEffect(() => {
        if (props.location.search?.split("batch_id=")[1]){
            axios.get("https://v2-analysis.chowis.com:3331/web-result/cndphair/" + props.location.search?.split("batch_id=")[1])
                .then((res) => {
                    if (res.data.body){
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

    console.log(data);

    const getBackgroundColor = (item, value) => {
        if (item === 'density' || item === 'hairloss' || item === 'scalpKeratin' || item === 'scalpRedness' || item === "thickness"){
            if (value >=0 && value <= 20){
                return 'excellent'
            } else if (value > 20 && value <= 30){
                return 'good'
            } else if (value > 30 && value <= 50){
                return 'moderate'
            } else if (value > 50 && value <= 80){
                return 'poor'
            } else if (value > 80){
                return 'very-poor'
            }
        }
    }

    return (
        <div>
            <div className="header">
                <div className="header-logo">
                    <img src="/images/logo.png" alt=""/>
                </div>
            </div>

            <div className="analysis-result">
                <div className="">
                    <div className="name-person">
                        <h5>ALEXANDer chuY - ANALYSIS Result</h5>
                    </div>
                    {/*<p className="date-analysis">June 22, 2020 - 05:30:20</p>*/}
                    <p className="date-analysis">{data.density && (data.density.date.substr(0, 10) + " " + data.density.time.substr(0, 5))}</p>
                </div>
            </div>

            <div className="process-part">
                <div className="icon-average">
                    <img src="/images/icon-average.png" alt="" className=""/>
                    <p>Average per age group</p>
                </div>

                <div className="pores">
                    <div className="title-hyd">
                        <h5>Density</h5>
                        <p>Result : <span className={`hyd-result ${getBackgroundColor('density', data.density?.value)}`}>{getBackgroundColor('density', data.density?.value)?.replace('-', ' ')}</span></p>
                    </div>

                    <div className="process-bar">
                        <div className="title-row">
                            <div className="box box-one">
                                <p>Excellent</p>
                            </div>
                            <div className="box box-two">
                                <p>Good</p>
                            </div>
                            <div className="box box-three">
                                <p>Moderate</p>
                            </div>
                            <div className="box box-four">
                                <p>Poor</p>
                            </div>
                            <div className="box box-five">
                                <p>Very poor</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{width: data.density?.value+"%"}} className={getBackgroundColor('density', data.density?.value)}/>
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
                        <p>Result : <span className={`hyd-result ${getBackgroundColor('hairloss', data.hairloss?.value)}`}>{getBackgroundColor('hairloss', data.hairloss?.value)?.replace('-', ' ')}</span></p>
                    </div>

                    <div className="process-bar">
                        <div className="title-row">
                            <div className="box box-one">
                                <p>Excellent</p>
                            </div>
                            <div className="box box-two">
                                <p>Good</p>
                            </div>
                            <div className="box box-three">
                                <p>Moderate</p>
                            </div>
                            <div className="box box-four">
                                <p>Poor</p>
                            </div>
                            <div className="box box-five">
                                <p>Very poor</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{width: data.hairloss?.value+"%"}} className={getBackgroundColor('hairloss', data.hairloss?.value)}/>
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
                        <h5>Scalp Keratin</h5>
                        <p>Result : <span className={`hyd-result ${getBackgroundColor('scalpKeratin', data.scalpKeratin?.value)}`}>{getBackgroundColor('scalpKeratin', data.scalpKeratin?.value)?.replace('-', ' ')}</span></p>
                    </div>

                    <div className="process-bar">
                        <div className="title-row">
                            <div className="box box-one">
                                <p>Excellent</p>
                            </div>
                            <div className="box box-two">
                                <p>Good</p>
                            </div>
                            <div className="box box-three">
                                <p>Moderate</p>
                            </div>
                            <div className="box box-four">
                                <p>Poor</p>
                            </div>
                            <div className="box box-five">
                                <p>Very poor</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{width: data.scalpKeratin?.value+"%"}} className={getBackgroundColor('scalpKeratin', data.scalpKeratin?.value)}/>
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
                        <h5>Scalp Redness</h5>
                        <p>Result : <span className={`hyd-result ${getBackgroundColor('scalpRedness', data.scalpRedness?.value)}`}>{getBackgroundColor('scalpRedness', data.scalpRedness?.value)?.replace('-', ' ')}</span></p>
                    </div>

                    <div className="process-bar">
                        <div className="title-row">
                            <div className="box box-one">
                                <p>Excellent</p>
                            </div>
                            <div className="box box-two">
                                <p>Good</p>
                            </div>
                            <div className="box box-three">
                                <p>Moderate</p>
                            </div>
                            <div className="box box-four">
                                <p>Poor</p>
                            </div>
                            <div className="box box-five">
                                <p>Very poor</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{width: data.scalpRedness?.value+"%"}} className={getBackgroundColor('scalpRedness', data.scalpRedness?.value)}/>
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
                        <p>Result : <span className={`hyd-result ${getBackgroundColor('thickness', data.thickness?.value)}`}>{getBackgroundColor('thickness', data.thickness?.value)?.replace('-', ' ')}</span></p>
                    </div>

                    <div className="process-bar">
                        <div className="title-row">
                            <div className="box box-one">
                                <p>Excellent</p>
                            </div>
                            <div className="box box-two">
                                <p>Good</p>
                            </div>
                            <div className="box box-three">
                                <p>Moderate</p>
                            </div>
                            <div className="box box-four">
                                <p>Poor</p>
                            </div>
                            <div className="box box-five">
                                <p>Very poor</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{width: data.thickness?.value+"%"}} className={getBackgroundColor('thickness', data.thickness?.value)}/>
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