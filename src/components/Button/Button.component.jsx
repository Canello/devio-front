import { PrimaryButton, SecondaryButton } from "./Button.styles";

export const Button = ({
    variant = "primary",
    disabled = false,
    onClick = () => {},
    children,
    ...otherProps
}) => {
    const handleClick = disabled ? () => {} : onClick;

    if (variant === "primary") {
        return (
            <PrimaryButton
                onClick={handleClick}
                disabled={disabled}
                {...otherProps}
            >
                {children}
            </PrimaryButton>
        );
    } else if (variant === "secondary") {
        return (
            <SecondaryButton
                onClick={handleClick}
                disabled={disabled}
                {...otherProps}
            >
                {children}
            </SecondaryButton>
        );
    }
};
