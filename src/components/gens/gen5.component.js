// import Gen5 from "./gen5.component";

const Gen5 = (props) => {
    const { father_id, mother_id, males, females } = props;
    return (
        <>
            <div className="row">
                {males.map((male, index) => {
                    if (
                        male.father_id == father_id &&
                        male.mother_id == mother_id
                    ) {
                        return (
                            <div className="col">
                                <div className="card">
                                    <div key={index}>
                                        <h1>Generation 5</h1>
                                        <h1>
                                            {male.id} --- {male.name} ===
                                            {females.map((female, index) => {
                                                if (
                                                    female.id == male.spouse_id
                                                ) {
                                                    return (
                                                        <span key={index}>
                                                            ====
                                                            {female.name}
                                                        </span>
                                                    );
                                                }
                                            })}
                                        </h1>
                                        <hr />
{/* 
                                        <Gen5
                                            father_id={male.id}
                                            mother_id={male.spouse_id}
                                            males={males}
                                            females={females}
                                        /> */}
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
                            <div className="col">
                                <div className="card">
                                    <div key={index}>
                                        <h1>Generation 5</h1>
                                        <h1>
                                            {female.id} --- {female.name}
                                            ===
                                            {males.map((male, index) => {
                                                if (
                                                    male.id == female.spouse_id
                                                ) {
                                                    return (
                                                        <span key={index}>
                                                            ==== {male.name}
                                                        </span>
                                                    );
                                                }
                                            })}
                                        </h1>
                                        <hr />

                                        {/* <Gen5
                                            father_id={female.spouse_id}
                                            mother_id={female.id}
                                            males={males}
                                            females={females}
                                        /> */}
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

export default Gen5;
