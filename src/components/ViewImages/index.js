import React, {useEffect, useState} from 'react';
import "./index.scss"
import {Carousel} from 'react-responsive-carousel';
import {calculateValue} from "../../tools";

const ViewImages = ({data}) => {

    const [selectedKey, setSelectedKey] = useState("");
    const [type, setType] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        setSelectedKey(Object.keys(data)[0]);
    }, [data])

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

    console.log(selectedKey)
    return (
        <div className="view-images">
            <div className="view-images-content">
                <h3>View Images</h3>

                <div className="view-images-result-info">
                    <h4> {selectedKey === "scalpRedness" ? "Sensitivity" : selectedKey === "scalpKeratin" ? "Dead skin cells" : selectedKey}</h4>
                    <h4 className={getBackgroundColor(selectedKey, calculateValue(selectedKey, data[selectedKey]?.value))}>{getBackgroundColor(selectedKey, calculateValue(selectedKey, data[selectedKey]?.value))?.replace('-', ' ')}</h4>
                </div>

                <div className="view-images-select">
                    <div className={`view-images-select-item ${type=== 0 ? "active" : ""}`} onClick={() => setType(0)}>
                        Captured Image
                    </div>
                    <div className={`view-images-select-item ${type=== 1 ? "active" : ""}`} onClick={() => setType(1)}>
                        Analyzed Image
                    </div>
                </div>

                <div className="view-images-carousel-content">
                    <Carousel selectedItem={selectedIndex} onChange={(index)=> {setSelectedIndex(index); setSelectedKey(Object.keys(data).filter(item => data[item]?.original_image_url)[index])}} autoPlay={false} showThumbs={false} showIndicators={false} showStatus={false}>
                        {Object.keys(data).filter(item => type === 0 ? data[item]?.original_image_url !== null : data[item]?.analyzed_image_url !== null).map(((item , index)=> (
                            <div className="view-images-carousel-item" key={item}>
                                <div className="view-images-carousel-item-content">
                                    <img alt="image" src={"https://" + (type === 0 ? data[item]?.original_image_url : data[item]?.analyzed_image_url)}/>
                                </div>
                            </div>
                        )))}
                    </Carousel>
                </div>

                <div className="view-images-select border">
                    {Object.keys(data).filter((item,index) => data[item]?.analyzed_image_url).map(((item , index)=> (
                        <div className={`view-images-select-item ${selectedIndex === index ? "active": ""}`} onClick={() => {setSelectedKey(item); setSelectedIndex(index)}}>
                            {item === "scalpRedness" ? "Sensitivity" : item === "scalpKeratin" ? "Dead skin cells" : item}
                        </div>
                    )))}

                </div>
            </div>
        </div>
    );
};

export default ViewImages;