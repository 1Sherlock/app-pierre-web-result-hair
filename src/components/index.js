import React from 'react';
import "./spiner.scss";

const SpiderBar = ({data}) => {
    return (
        <div className="spider-bar">
            <div className="spider-bar-content">
                <h3>Overall Result</h3>
                <div className="huge-circle  circle">
                    <div className="large-circle circle">
                        <div className="big-circle circle">
                            <div className="medium-circle circle">
                                <div className="small-circle circle"/>
                            </div>
                        </div>
                    </div>

                    <div className="result third"><span className="dot" style={{right: data.density?.value +"%"}}/></div>
                    <div className="result fourth"><span className="dot" style={{right: data.hairloss?.value + "%"}}/></div>
                    <div className="result fifth"><span className="dot" style={{right: data.scalpKeratin?.value +"%"}}/></div>
                    <div className="result sixth"><span className="dot" style={{right: data.scalpRedness?.value +"%"}}/></div>
                    <div className="result seventh"><span className="dot" style={{right: data.thickness?.value +"%"}}/></div>
                </div>

                <div className="result-info">
                    <div>
                        <div className="result-info-item">
                            <div className="result-info-item-color result-info-item-color-excellent"/>
                            Very poor
                        </div>
                        <div className="result-info-item">

                            <div className="result-info-item-color result-info-item-color-good"/>
                            Poor
                        </div>
                        <div className="result-info-item">

                            <div className="result-info-item-color result-info-item-color-moderate"/>
                            Moderate
                        </div>
                        <div className="result-info-item">

                            <div className="result-info-item-color result-info-item-color-poor"/>
                            Good
                        </div>
                        <div className="result-info-item">

                            <div className="result-info-item-color result-info-item-color-very-poor"/>
                            Excellent
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SpiderBar;