export const createUniqueID = () => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString().slice(2, 10);
    const id = timestamp + randomStr;
    return id;
  };

export const roundToHundreth = (num) => Math.round(num * 100) / 100;
