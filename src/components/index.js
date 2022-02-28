import React from 'react';
import "./spiner.scss";
import {calculateValue} from "../tools";

const SpiderBar = ({data}) => {
    return (
        <div className="spider-bar">
            <div className="spider-bar-content">
                <h3>Tap measurement to view product recommendation</h3>
                <div className="huge-circle  circle">
                    <div className="large-circle circle">
                        <div className="big-circle circle">
                            <div className="medium-circle circle">
                                <div className="small-circle circle"/>
                            </div>
                        </div>
                    </div>

                    <div className="result third"><span className="dot"
                                                        style={{right: calculateValue('density', data.density?.value) + "%"}}/>
                    </div>
                    <div className="result fourth"><span className="dot"
                                                         style={{right: calculateValue('hairloss', data.hairloss?.value) + "%"}}/>
                    </div>
                    <div className="result fifth"><span className="dot"
                                                        style={{right: calculateValue('scalpKeratin', data.scalpKeratin?.value) + "%"}}/>
                    </div>
                    <div className="result sixth"><span className="dot"
                                                        style={{right: calculateValue('scalpRedness', data.scalpRedness?.value) + "%"}}/>
                    </div>
                    <div className="result seventh"><span className="dot"
                                                          style={{right: calculateValue('thickness', data.thickness?.value) + "%"}}/>
                    </div>
                </div>

                <div className="result-info">
                    <div>
                        <div className="result-info-item">
                            <div className="result-info-item-color result-info-item-color-excellent"/>
                            Normal
                        </div>
                        <div className="result-info-item">
                            <div className="result-info-item-color result-info-item-color-good"/>
                            Pay attention to care
                        </div>
                    </div>
                    <div>
                        <div className="result-info-item">
                            <div className="result-info-item-color result-info-item-color-moderate"/>
                            Need to care
                        </div>
                        <div className="result-info-item">
                            <div className="result-info-item-color result-info-item-color-very-poor"/>
                            Intensive care needed
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SpiderBar;