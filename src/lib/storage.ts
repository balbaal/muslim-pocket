import { CHECKPOINT_STORAGE_NAME, SurahCheckPoint } from "@/types/checkpoint";

export const setCheckpoint = (checkpointData: SurahCheckPoint) => {
  localStorage.setItem(CHECKPOINT_STORAGE_NAME, JSON.stringify(checkpointData));
};

export const getCheckpoint = (): SurahCheckPoint | null => {
  const checkpoint = localStorage.getItem(CHECKPOINT_STORAGE_NAME);
  return checkpoint ? JSON.parse(checkpoint) : null;
};
