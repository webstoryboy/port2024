"use client"
import React, { useState } from 'react';

export default function Page() {
    const [stores, setStores] = useState([]);

    const fetchStores = (region) => {
        fetch(`https://webstoryboy.github.io/starbucks_data/starbucks_details/starbucks_${region}_detail.json`)
            .then((response) => response.json())
            .then((data) => setStores(data.item))
            .catch((error) => console.error("Error fetching data:", error));
    };

    return (
        <main id='main'>
            <div className='stores__region'>
                <ul>
                    {/* <li onClick={() => fetchStores('seoul')}>서울특별시</li>
                    <li onClick={() => fetchStores('gyeonggi')}>경기도</li> */}
                    <li onClick={() => fetchStores('ulsan')}>울산광역시</li>
                    <li onClick={() => fetchStores('jeju')}>제주특별자치도</li>
                    <li onClick={() => fetchStores('busan')}>부산광역시</li>
                    <li onClick={() => fetchStores('incheon')}>인천광역시</li>
                    <li onClick={() => fetchStores('gwangju')}>광주광역시</li>
                    <li onClick={() => fetchStores('gangwon')}>강원도</li>
                    <li onClick={() => fetchStores('daejeon')}>대전광역시</li>
                    <li onClick={() => fetchStores('daegu')}>대구광역시</li>
                    <li onClick={() => fetchStores('chungnam')}>충청남도</li>
                    <li onClick={() => fetchStores('chungbuk')}>충청북도</li>
                </ul>
            </div>
            <div className='stores__list'>
                <div className='table' >
                    <table>
                        <tbody>
                            {stores.map((store, index) => (
                                <tr key={index}>
                                    <td className='num'>{index + 1}</td>
                                    <td className='img'>
                                        <span style={{ backgroundImage: `url(${store.image_urls[0]})` }}></span>
                                    </td>
                                    <td>{store.name}</td>
                                    <td>{store.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </main>
    );
}