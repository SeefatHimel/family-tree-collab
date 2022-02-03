const SingleGen = (props) => {
    const { genNo, males, females, father_id, mother_id, GenComponent } = props;
    return (
        <>
            <div className="row">
                {males.map((male, index) => {
                    if (
                        male.father_id == father_id &&
                        male.mother_id == mother_id
                    ) {
                        return (
                            <div className="col" key={index}>
                                <div className="card">
                                    <div>
                                        <p>Generation {genNo}</p>
                                        <div
                                            className="row"
                                            style={{ margin: "auto" }}
                                        >
                                            <div className="col">
                                                <img
                                                    className=""
                                                    style={{
                                                        borderRadius: "45%",
                                                        height: "60px",
                                                        width: "60px",
                                                    }}
                                                    src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
                                                    alt=""
                                                />
                                                <p>
                                                    {male.id} {male.name}
                                                </p>
                                            </div>
                                            {females.map((female, index) => {
                                                if (
                                                    female.id == male.spouse_id
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
                                                                src="https://www.kindpng.com/picc/m/24-248600_contact-profile-user-default-female-suit-comments-female.png"
                                                                alt=""
                                                            />
                                                            <p>{female.name}</p>
                                                        </div>
                                                    );
                                                }
                                            })}
                                        </div>

                                        <GenComponent
                                            father_id={male.id}
                                            mother_id={male.spouse_id}
                                            males={males}
                                            females={females}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
                {females.map((female, index) => {
                    if (
                        female.father_id == father_id &&
                        female.mother_id == mother_id
                    ) {
                        return (
                            <div className="col" key={index}>
                                <div className="card">
                                    <div>
                                        <p>Generation {genNo}</p>
                                        <div
                                            className="row"
                                            style={{ margin: "auto" }}
                                        >

                                        <div className="col">
                                            <img
                                                className=""
                                                style={{
                                                    borderRadius: "45%",
                                                    height: "60px",
                                                    width: "60px",
                                                }}
                                                src="https://www.kindpng.com/picc/m/24-248600_contact-profile-user-default-female-suit-comments-female.png"
                                                alt=""
                                            />
                                            <p>
                                                {female.id} {female.name}
                                            </p>
                                        </div>
                                        {males.map((male, index) => {
                                            if (male.id == female.spouse_id) {
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
                                                            src="https://www.kindpng.com/picc/m/24-248600_contact-profile-user-default-female-suit-comments-female.png"
                                                            alt=""
                                                        />
                                                        <p>{male.name}</p>
                                                    </div>
                                                );
                                            }
                                        })}
                                        </div>

                                        <GenComponent
                                            father_id={female.spouse_id}
                                            mother_id={female.id}
                                            males={males}
                                            females={females}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </>
    );
};

export default SingleGen;
