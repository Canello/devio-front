import { PrimaryButton, SecondaryButton } from "./Button.styles";

export const Button = ({ variant = "primary", children, ...otherProps }) => {
    switch (variant) {
        case "primary":
            return <PrimaryButton {...otherProps}>{children}</PrimaryButton>;
        case "secondary":
            return (
                <SecondaryButton {...otherProps}>{children}</SecondaryButton>
            );
        default:
            return <PrimaryButton {...otherProps}>{children}</PrimaryButton>;
    }
};
