export const UP = "UP";
export const DOWN = "DOWN";

export const countUp = () => {
  return {
    type: UP,
  };
};

export const counDown = () => {
  return {
    type: DOWN,
  };
};
