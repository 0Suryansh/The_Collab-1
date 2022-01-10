import { React, useState } from "react";

import Accordion from 'react-bootstrap/Accordion';
import './TheKnowledgeHunt.css';
const Demo = () => {
    const [currentActiveKey, setCurrentActiveKey] = useState(null);

    const toggleActiveKey = (key) => {
        setCurrentActiveKey(currentActiveKey === key ? null : key);
    };
    return <>
        <div className="accordion-container">
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0" className="active">
                    <Accordion.Header className={(currentActiveKey === "0") ? "active" : ""}>Pool A: Class VI-VIII</Accordion.Header>
                    <Accordion.Body>
                        <h5>Social Science, Science and Maths NCERT book of class 6-8</h5>
                        <div className="subjects">
                            <div className="subject">
                                <ul>
                                    {/* mention "heading " class for subject name */}
                                    <li className="heading">History(5Q)</li>
                                    <li>Kingdoms, Kings, and Early Republic</li>
                                    <li>Building, Paintings, and Books</li>
                                    <li>The Delhi Sultans</li>
                                    <li>The Mughal Empires</li>
                                    <li>Women Caste and Reform</li>
                                    <li className="heading">Geography(5Q)</li>
                                    <li>Our Country India</li>
                                    <li>Motions of the Earth</li>
                                    <li>Natural Vegetation and wildlife</li>
                                    <li>Agriculture</li>
                                    <li>Mineral and power resources</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Polity and Governance(10Q)</li>
                                    <li>Panchayat Raj</li>
                                    <li>Urban Administration</li>
                                    <li>Understanding media</li>
                                    <li>Judiciary</li>
                                    <li>Law and Social justice</li>
                                    <li>The Indian Constitution</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Science (20Q)</li>
                                    <li>Microorganisms</li>
                                    <li>The cell</li>
                                    <li>Friction</li>
                                    <li>Sound</li>
                                    <li>Light</li>
                                    <li>Electric current and circuits</li>
                                    <li>Different kinds of materials</li>
                                    <li>Rain thunder and lightning</li>
                                    <li>Multiplication of plants</li>
                                    <li>Magnets</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Economics and finance(10Q)</li>
                                    <li>Understanding Marginalised</li>
                                    <li>Urban livelihood</li>
                                    <li>Rural livelihood</li>
                                    <li>Markets around us</li>
                                    <li>Struggles for equality</li>
                                    <li>Public facilities</li>
                                </ul>
                            </div>
                            <div className="subject last">
                                <ul>
                                    <li className="heading">Mathematics(10Q)</li>
                                    <li>Algebra</li>
                                    <li>Ratio and proportion</li>
                                    <li>Mensuration</li>
                                    <li>Exponents and powers</li>
                                    <li>Triangle and its properties</li>
                                    <li>Rational Numbers</li>
                                    <li>Algebraic Expression</li>
                                </ul>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className={currentActiveKey === "1" ? "active" : ""}>
                    <Accordion.Header>Pool B: Class IX-X</Accordion.Header>
                    <Accordion.Body>
                    <h5>Social Science, Science and Maths NCERT book of class 6-8</h5>
                        <div className="subjects">
                            <div className="subject">
                                <ul>
                                    {/* mention "heading " class for subject name */}
                                    <li className="heading">History(5Q)</li>
                                    <li>Kingdoms, Kings, and Early Republic</li>
                                    <li>Building, Paintings, and Books</li>
                                    <li>The Delhi Sultans</li>
                                    <li>The Mughal Empires</li>
                                    <li>Women Caste and Reform</li>
                                    <li className="heading">Geography(5Q)</li>
                                    <li>Our Country India</li>
                                    <li>Motions of the Earth</li>
                                    <li>Natural Vegetation and wildlife</li>
                                    <li>Agriculture</li>
                                    <li>Mineral and power resources</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Polity and Governance(10Q)</li>
                                    <li>Panchayat Raj</li>
                                    <li>Urban Administration</li>
                                    <li>Understanding media</li>
                                    <li>Judiciary</li>
                                    <li>Law and Social justice</li>
                                    <li>The Indian Constitution</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Science (20Q)</li>
                                    <li>Microorganisms</li>
                                    <li>The cell</li>
                                    <li>Friction</li>
                                    <li>Sound</li>
                                    <li>Light</li>
                                    <li>Electric current and circuits</li>
                                    <li>Different kinds of materials</li>
                                    <li>Rain thunder and lightning</li>
                                    <li>Multiplication of plants</li>
                                    <li>Magnets</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Economics and finance(10Q)</li>
                                    <li>Understanding Marginalised</li>
                                    <li>Urban livelihood</li>
                                    <li>Rural livelihood</li>
                                    <li>Markets around us</li>
                                    <li>Struggles for equality</li>
                                    <li>Public facilities</li>
                                </ul>
                            </div>
                            <div className="subject last">
                                <ul>
                                    <li className="heading">Mathematics(10Q)</li>
                                    <li>Algebra</li>
                                    <li>Ratio and proportion</li>
                                    <li>Mensuration</li>
                                    <li>Exponents and powers</li>
                                    <li>Triangle and its properties</li>
                                    <li>Rational Numbers</li>
                                    <li>Algebraic Expression</li>
                                </ul>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className={currentActiveKey === "2" ? "active" : ""}>
                    <Accordion.Header>Pool C: Class XI-XII - College</Accordion.Header>
                    <Accordion.Body>
                    <h5>Social Science, Science and Maths NCERT book of class 6-8</h5>
                        <div className="subjects">
                            <div className="subject">
                                <ul>
                                    {/* mention "heading " class for subject name */}
                                    <li className="heading">History(5Q)</li>
                                    <li>Kingdoms, Kings, and Early Republic</li>
                                    <li>Building, Paintings, and Books</li>
                                    <li>The Delhi Sultans</li>
                                    <li>The Mughal Empires</li>
                                    <li>Women Caste and Reform</li>
                                    <li className="heading">Geography(5Q)</li>
                                    <li>Our Country India</li>
                                    <li>Motions of the Earth</li>
                                    <li>Natural Vegetation and wildlife</li>
                                    <li>Agriculture</li>
                                    <li>Mineral and power resources</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Polity and Governance(10Q)</li>
                                    <li>Panchayat Raj</li>
                                    <li>Urban Administration</li>
                                    <li>Understanding media</li>
                                    <li>Judiciary</li>
                                    <li>Law and Social justice</li>
                                    <li>The Indian Constitution</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Science (20Q)</li>
                                    <li>Microorganisms</li>
                                    <li>The cell</li>
                                    <li>Friction</li>
                                    <li>Sound</li>
                                    <li>Light</li>
                                    <li>Electric current and circuits</li>
                                    <li>Different kinds of materials</li>
                                    <li>Rain thunder and lightning</li>
                                    <li>Multiplication of plants</li>
                                    <li>Magnets</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Economics and finance(10Q)</li>
                                    <li>Understanding Marginalised</li>
                                    <li>Urban livelihood</li>
                                    <li>Rural livelihood</li>
                                    <li>Markets around us</li>
                                    <li>Struggles for equality</li>
                                    <li>Public facilities</li>
                                </ul>
                            </div>
                            <div className="subject last">
                                <ul>
                                    <li className="heading">Mathematics(10Q)</li>
                                    <li>Algebra</li>
                                    <li>Ratio and proportion</li>
                                    <li>Mensuration</li>
                                    <li>Exponents and powers</li>
                                    <li>Triangle and its properties</li>
                                    <li>Rational Numbers</li>
                                    <li>Algebraic Expression</li>
                                </ul>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </>
}

export default Demo;
