import React, { useState } from 'react';
import "../Style/Style.css";
import gallery_01 from "../images/gallery_01.jpg";
import gallery_02 from "../images/gallery_02.jpg";
import gallery_03 from "../images/gallery_03.jpg";
import gallery_04 from "../images/gallery_04.jpg";
import gallery_05 from "../images/gallery_05.jpg";
import gallery_06 from "../images/gallery_06.jpg";

const Gallery = () => {
    const [filter, setFilter] = useState("all");

    const handleFilter = (newFilter) => {
        setFilter(newFilter);
    };

    const images = [
        { src: gallery_01, category: "hdpe" },
        { src: gallery_02, category: "sprinkle" },
        { src: gallery_03, category: "hdpe" },
        { src: gallery_04, category: "irrigation" },
        { src: gallery_05, category: "spray" },
        { src: gallery_06, category: "spray" },
    ];

    const filteredImages = filter === "all" ? images : images.filter(image => image.category === filter);

    return (
        <>
            <div id="gallery" className="gallery">
                <div className="container">
                    <div className="inner-title">
                        <h2>Our Gallery</h2>
                        <p>View Our Gallery</p>
                    </div>
                    <div className="row">
                        <div className="gallery-filter d-none d-sm-block">
                            <button className={`btn btn-default filter-button ${filter === 'all' && 'active'}`} onClick={() => handleFilter("all")}>All</button>
                            <button className={`btn btn-default filter-button ${filter === 'hdpe' && 'active'}`} onClick={() => handleFilter("hdpe")}>Dental</button>
                            <button className={`btn btn-default filter-button ${filter === 'sprinkle' && 'active'}`} onClick={() => handleFilter("sprinkle")}>Cardiology</button>
                            <button className={`btn btn-default filter-button ${filter === 'spray' && 'active'}`} onClick={() => handleFilter("spray")}>Neurology</button>
                            <button className={`btn btn-default filter-button ${filter === 'irrigation' && 'active'}`} onClick={() => handleFilter("irrigation")}>Laboratory</button>
                        </div>
                        <br />
                        {filteredImages.map((image, index) => (
                            <div key={index} className={`gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ${image.category}`}>
                                <img src={image.src} className="img-responsive" alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
