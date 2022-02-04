import { useEffect, useState } from "react";

const SinglePerson = (props) => {
    const {
        males,
        females,
        father_id,
        mother_id,
        colClassName,
        genNo,
        GenComponent,
        mode,
        imgSrc1,
        imgSrc2,
    } = props;

    const [data1, setData1] = useState(males);
    const [data2, setData2] = useState(females);

    useEffect(() => {
        if (mode == 0) {
            setData1(females);
            setData2(males);
        }
    }, []);

    return (
        <>
            {data1.map((person1, index) => {
                if (
                    person1.father_id == father_id &&
                    person1.mother_id == mother_id
                ) {
                    return (
                        <div className={colClassName} key={index}>
                            <div className="card" style={{ float: "none" }}>
                                <div>
                                    <p>Generation {genNo}</p>
                                    <div
                                        className="row"
                                        style={{
                                            margin: "auto",
                                            textAlign: "center",
                                        }}
                                    >
                                        <div className="col">
                                            <img
                                                className=""
                                                style={{
                                                    borderRadius: "45%",
                                                    height: "60px",
                                                    width: "60px",
                                                }}
                                                src={imgSrc1}
                                                alt=""
                                            />
                                            <p>
                                                {person1.id} {person1.name}
                                            </p>
                                        </div>
                                        {data2.map((person2, index) => {
                                            if (
                                                person2.id == person1.spouse_id
                                            ) {
                                                return (
                                                    <div
                                                        className="col"
                                                        key={index}
                                                    >
                                                        <img
                                                            className="row"
                                                            style={{
                                                                borderRadius:
                                                                    "45%",
                                                                height: "60px",
                                                                width: "60px",
                                                                margin: "auto",
                                                            }}
                                                            src={imgSrc2}
                                                            alt=""
                                                        />
                                                        <p>{person2.name}</p>
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>

                                    {genNo < 6 ? (
                                        <GenComponent
                                            father_id={
                                                mode == 1
                                                    ? person1.id
                                                    : person1.spouse_id
                                            }
                                            mother_id={
                                                mode == 1
                                                    ? person1.spouse_id
                                                    : person1.id
                                            }
                                            males={males}
                                            females={females}
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
};

export default SinglePerson;
