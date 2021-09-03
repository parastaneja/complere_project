function combineClx(...args) {
    let classNames = "";
    args.forEach(ele => {
        classNames = `${classNames} ${ele}`;
    });
    return classNames
};

export default combineClx;