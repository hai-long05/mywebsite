import { useState } from 'react';

const useAnimation = (isVisibleDependency1: boolean, isVisibleDependency2: boolean) => {
  const [isFirstAppearance, setFirstAppearance] = useState(false);

  const getAnimation = (animation: string) => {
    if (isFirstAppearance) return animation;
    if (!isVisibleDependency1 && isVisibleDependency2) {
      setFirstAppearance(true);
    }
    return '';
  };

  return { getAnimation };
};

export default useAnimation;