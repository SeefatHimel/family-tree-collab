function getChildrenNo(males, females, father_id, mother_id) {
    const len =
        males.filter(
            (male) => male.father_id == father_id && male.mother_id == mother_id
        ).length +
        females.filter(
            (female) =>
                female.father_id == father_id && female.mother_id == mother_id
        ).length;
    console.log(len);
    return len;
}

export default getChildrenNo;
