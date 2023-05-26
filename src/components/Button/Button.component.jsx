import { PrimaryButton, SecondaryButton } from "./Button.styles";

export const Button = ({ variant = "primary", children, ...otherProps }) => {
    if (variant === "primary") {
        return <PrimaryButton {...otherProps}>{children}</PrimaryButton>;
    } else if (variant === "secondary") {
        return <SecondaryButton {...otherProps}>{children}</SecondaryButton>;
    }
};
