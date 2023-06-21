import { ReactNode } from "react";
import { Theme } from "../../styles/theme";
import BaseButton from "./BaseButton";
import ImageSvgUri from "./ImageSvgUri";
import Text from "./Text";
import { StyleSheet } from "react-native";

type IconTextProps = {
  icon?:
    | { iconUrl?: string; iconWidth?: number; iconHeight?: number }
    | ReactNode;
  text: string;
  padding?: keyof Theme["spacing"];
  onPress: () => void;
} & (typeof BaseButton)["arguments"];

export const IconTextButton = ({
  icon,
  onPress,
  text,
  p,
  ...args
}: IconTextProps) => {
  return (
    <BaseButton
      p={p || "md"}
      backgroundColor="background"
      style={styles.networkContainer}
      onPress={onPress}
      borderColor="border"
      {...args}
    >
      {icon && icon.iconUrl ? (
        <ImageSvgUri
          imageUrl={icon.iconUrl}
          height={icon.iconHeight}
          width={icon.iconWidth}
        />
      ) : (
        icon
      )}
      <Text variant="bodySmall" style={styles.networkText}>
        {text}
      </Text>
      {/* <RightArrowIcon size={10} /> */}
    </BaseButton>
  );
};

const styles = StyleSheet.create({
  networkText: {
    marginLeft: 16,
  },
  networkContainer: {
    borderRadius: 8,
    borderWidth: 0.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
