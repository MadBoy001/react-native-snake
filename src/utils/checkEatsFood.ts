import { Coordinate } from "../types/types";

export const checkEatsFood = (
  head: Coordinate,
  food: Coordinate,
  area: number
): Boolean => {
  const distBtwnFoodAndSnakeX: number = Math.abs(head.x - food.x);
  const distBtwnFoodAndSnakeY: number = Math.abs(head.y - food.y);
  return distBtwnFoodAndSnakeX < area && distBtwnFoodAndSnakeY < area;
};
