import getChildrenNo from "./getChildrenNo.service";

function GetTotalSuccessors(males, females, father_id, mother_id) {
    let total = updateSuc(males, females, father_id, mother_id) + 1;
    if(mother_id !== 0 && father_id !==0)
        total++;
    console.log(father_id, mother_id , " ==== > > " , total);
    return total;
}

export default GetTotalSuccessors;

const updateSuc = (males, females, father_id, mother_id) => {
    let num = getChildrenNo(males, females, father_id, mother_id);

    males.map((male) =>
        male.father_id == father_id &&
        male.mother_id == mother_id &&
        male.spouse_id !== 0
            ? (num += updateSuc(males, females, male.id, male.spouse_id) +1 )
            : null
    );

    females.map((female) =>
        female.father_id == father_id &&
        female.mother_id == mother_id &&
        female.spouse_id !== 0
            ? (num += updateSuc(males, females, female.spouse_id, female.id) +1)
            : null
    );

    return num;
};
