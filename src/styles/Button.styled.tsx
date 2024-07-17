import styled from "styled-components";

interface ButtonProps {
    bg?: string;
    color?: string;
}

export const Button = styled.button<ButtonProps>`
    background-color: ${({ bg }) => bg || '#fff'};
    border-radius: 50px;
    border: none;
    padding: 15px 60px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    padding: 15px 60px;
    color: ${({ color }) => color || '#fff'};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`
