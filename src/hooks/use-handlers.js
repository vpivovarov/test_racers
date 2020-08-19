import { useDispatch } from "react-redux";
import { screenNames } from "@constants";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

export const useHandlers = () => {
  const navigation = useNavigation();

  const navigateBack = useCallback(() => {
    navigation.navigate(screenNames.DRIVERS_NAVIGATOR);
  }, [navigation]);

  return {
    navigateBack,
  };
};
